> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamclose(_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamclose(_:))

# CFWriteStreamClose(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Closes a writable stream.

## Declaration

```swift
func CFWriteStreamClose(_ stream: CFWriteStream!)
```

## Parameters

- `stream`: The stream to close.

<a id="Discussion"></a>

## Discussion

This function terminates the flow of bytes and releases any system resources required by the stream. The stream is removed from any run loops in which it was scheduled. Once closed, the stream cannot be reopened.

## See Also

### Opening and Closing a Stream

- [CFWriteStreamOpen(\_:)](cfwritestreamopen%28__%29.md): Opens a stream for writing.

# CFWriteStreamClose (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Closes a writable stream.

## Declaration

```objectivec
extern void CFWriteStreamClose(CFWriteStreamRef stream);
```

## Parameters

- `stream`: The stream to close.

<a id="Discussion"></a>

## Discussion

This function terminates the flow of bytes and releases any system resources required by the stream. The stream is removed from any run loops in which it was scheduled. Once closed, the stream cannot be reopened.

## See Also

### Opening and Closing a Stream

- [CFWriteStreamOpen](cfwritestreamopen%28__%29.md): Opens a stream for writing.
