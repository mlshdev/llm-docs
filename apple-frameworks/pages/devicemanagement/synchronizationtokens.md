> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/synchronizationtokens](https://developer.apple.com/documentation/devicemanagement/synchronizationtokens)

# SynchronizationTokens

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The server’s synchronization token.

## Declaration

```
object SynchronizationTokens
```

## Properties

- `DeclarationsToken` — `string` (required): The synchronization token for declarations.
- `Timestamp` — `date-time` (required): The timestamp for the creation of the set of sync tokens. Clients use this to determine the most recent set of sync tokens when different sources provide the tokens. Use the format `YYYY-mm-ddTHH:MM:SSZ`.

## Mentioned In

- [Integrating declarative management](integrating-declarative-management.md)
