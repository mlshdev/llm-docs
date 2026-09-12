> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamsource/stopstream()](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamsource/stopstream())

# stopStream() (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Stops the stream of media data.

## Declaration

```swift
func stopStream() throws
```

## See Also

### Managing a Stream

- [authorizedToStartStream(for:)](authorizedtostartstream%28for_%29.md): Determines whether to authorize an app to use this stream.
- [startStream()](startstream%28%29.md): Starts the stream of media data.

# stopStreamAndReturnError: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Stops the stream of media data.

## Declaration

```objectivec
- (BOOL) stopStreamAndReturnError:(NSError **) outError;
```

## See Also

### Managing a Stream

- [authorizedToStartStreamForClient:](authorizedtostartstream%28for_%29.md): Determines whether to authorize an app to use this stream.
- [startStreamAndReturnError:](startstream%28%29.md): Starts the stream of media data.
