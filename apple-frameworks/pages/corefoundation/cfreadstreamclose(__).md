> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamclose(_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamclose(_:))

# CFReadStreamClose(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Closes a readable stream.

## Declaration

```swift
func CFReadStreamClose(_ stream: CFReadStream!)
```

## Parameters

- `stream`: The stream to close.

<a id="Discussion"></a>

## Discussion

This function terminates the flow of bytes and releases any system resources required by the stream. The stream is removed from any run loops in which it was scheduled. Once closed, the stream cannot be reopened.

## See Also

### Opening and Closing a Read Stream

- [CFReadStreamOpen(\_:)](cfreadstreamopen%28__%29.md): Opens a stream for reading.

# CFReadStreamClose (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Closes a readable stream.

## Declaration

```objectivec
extern void CFReadStreamClose(CFReadStreamRef stream);
```

## Parameters

- `stream`: The stream to close.

<a id="Discussion"></a>

## Discussion

This function terminates the flow of bytes and releases any system resources required by the stream. The stream is removed from any run loops in which it was scheduled. Once closed, the stream cannot be reopened.

## See Also

### Opening and Closing a Read Stream

- [CFReadStreamOpen](cfreadstreamopen%28__%29.md): Opens a stream for reading.
