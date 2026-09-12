> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource/startstream()](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource/startstream())

# startStream() (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Starts the stream of media data.

## Declaration

```swift
func startStream() throws
```

## See Also

### Managing a Stream

- [authorizedToStartStream(for:)](authorizedtostartstream%28for_%29.md): Determines whether to authorize an app to use this stream.
- [stopStream()](stopstream%28%29.md): Stops the stream of media data.

# startStreamAndReturnError: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Starts the stream of media data.

## Declaration

```objectivec
- (BOOL) startStreamAndReturnError:(NSError **) outError;
```

## See Also

### Managing a Stream

- [authorizedToStartStreamForClient:](authorizedtostartstream%28for_%29.md): Determines whether to authorize an app to use this stream.
- [stopStreamAndReturnError:](stopstream%28%29.md): Stops the stream of media data.
