> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovidersource/connect(to:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovidersource/connect(to:))

# connect(to:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Connects a client to a source’s provider.

## Declaration

```swift
func connect(to client: CMIOExtensionClient) throws
```

## Parameters

- `client`: A client to connect to a source’s provider.

## See Also

### Managing Connections

- [disconnect(from:)](disconnect%28from_%29.md): Disconnects a client from a source’s provider.

# connectClient:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Connects a client to a source’s provider.

## Declaration

```objectivec
- (BOOL) connectClient:(CMIOExtensionClient *) client error:(NSError **) outError;
```

## Parameters

- `client`: A client to connect to a source’s provider.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

## See Also

### Managing Connections

- [disconnectClient:](disconnect%28from_%29.md): Disconnects a client from a source’s provider.
