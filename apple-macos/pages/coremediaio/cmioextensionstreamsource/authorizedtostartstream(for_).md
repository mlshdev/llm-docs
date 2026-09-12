> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource/authorizedtostartstream(for:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource/authorizedtostartstream(for:))

# authorizedToStartStream(for:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Determines whether to authorize an app to use this stream.

## Declaration

```swift
func authorizedToStartStream(for client: CMIOExtensionClient) -> Bool
```

## Parameters

- `client`: The client with authorization to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you authorize the app; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing a Stream

- [startStream()](startstream%28%29.md): Starts the stream of media data.
- [stopStream()](stopstream%28%29.md): Stops the stream of media data.

# authorizedToStartStreamForClient: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Determines whether to authorize an app to use this stream.

## Declaration

```objectivec
- (BOOL) authorizedToStartStreamForClient:(CMIOExtensionClient *) client;
```

## Parameters

- `client`: The client with authorization to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you authorize the app; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing a Stream

- [startStreamAndReturnError:](startstream%28%29.md): Starts the stream of media data.
- [stopStreamAndReturnError:](stopstream%28%29.md): Stops the stream of media data.
