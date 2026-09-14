> Pinned source for Runpod main: [runpodctl/reference/runpodctl-user.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/runpodctl/reference/runpodctl-user.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-user

# user

Use runpodctl to view your Runpod account email, credit balance, hourly spend, spending limit, and notification settings.

View your account information and current balance.

```bash Command
runpodctl user
```

## Alias

You can use `me` as a shorthand for `user`:

```bash
runpodctl me
```

## Description

The `user` command displays information about your Runpod account, including:

- Account email
- Current credit balance
- Current spend per hour
- Spend limit
- Notification settings

## Example output

```json
{
  "clientBalance": 435.85,
  "currentSpendPerHr": 0.001,
  "email": "user@example.com",
  "id": "user_abc123",
  "notifyLowBalance": true,
  "notifyPodsGeneral": true,
  "notifyPodsStale": true,
  "spendLimit": 180
}
```

## Related commands

- [`runpodctl billing`](https://docs.runpod.io/runpodctl/reference/runpodctl-billing)
- [`runpodctl config`](https://docs.runpod.io/runpodctl/reference/runpodctl-config)
