> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovidersource/disconnect(from:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovidersource/disconnect(from:))

# disconnect(from:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Disconnects a client from a source’s provider.

## Declaration

```swift
func disconnect(from client: CMIOExtensionClient)
```

## Parameters

- `client`: A client to disconnect to the source’s provider.

## See Also

### Managing Connections

- [connect(to:)](connect%28to_%29.md): Connects a client to a source’s provider.

# disconnectClient: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Disconnects a client from a source’s provider.

## Declaration

```objectivec
- (void) disconnectClient:(CMIOExtensionClient *) client;
```

## Parameters

- `client`: A client to disconnect to the source’s provider.

## See Also

### Managing Connections

- [connectClient:error:](connect%28to_%29.md): Connects a client to a source’s provider.
