> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/tokensresponse](https://developer.apple.com/documentation/devicemanagement/tokensresponse)

# TokensResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The response object that contains the device token.

## Declaration

```
object TokensResponse
```

## Properties

- `SyncTokens` — `SynchronizationTokens` (required): A dictionary of synchronization tokens that describes the state of different types of data on the server. The client uses these tokens to determine which endpoints it needs to use to fetch new or updated data on the server.

## Topics

### Supporting Objects

- [SynchronizationTokens](synchronizationtokens.md): The server’s synchronization token.
