# .husky/validate-commit-msg.sh
#!/bin/sh

# Capture the commit message from the argument
commit_msg=$1

# Debug: Log the commit message being validated
echo "Commit message to validate: $commit_msg"

# Check if a commit message is provided
if [ -z "$commit_msg" ]; then
  echo "Error: Commit message is empty."
  exit 1
fi

# Define the regex pattern for the commit message
pattern="^[A-Z]+-[0-9]+ \| .+$"

# Validate the commit message
if ! echo "$commit_msg" | grep -Eq "$pattern"; then
  echo "Invalid commit message format."
  echo "Commit message should be in the format: <Jira ticket number> | <commit message>"
  exit 1
fi

# Success message
echo "Commit message is valid."
