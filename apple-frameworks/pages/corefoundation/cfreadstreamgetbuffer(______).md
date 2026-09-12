> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamgetbuffer(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamgetbuffer(_:_:_:))

# CFReadStreamGetBuffer(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a stream’s internal buffer of unread data, if possible.

## Declaration

```swift
func CFReadStreamGetBuffer(_ stream: CFReadStream!, _ maxBytesToRead: CFIndex, _ numBytesRead: UnsafeMutablePointer<CFIndex>!) -> UnsafePointer<UInt8>!
```

## Parameters

- `stream`: The stream to examine.
- `maxBytesToRead`: The maximum number of bytes to read. If greater than `0`, `maxBytesToRead` limits the number of bytes read; if `0` or less, all available bytes are read.
- `numBytesRead`: On return, contains the length of returned buffer. If `stream` is not open or has encountered an error, `numBytesRead` is set to `-1`.

<a id="return-value"></a>

## Return Value

A pointer to the internal buffer of unread data for `stream`, if possible; `NULL` otherwise. The buffer is good only until the next stream operation called on the stream. You should neither change the contents of the returned buffer nor attempt to deallocate the buffer; it is still owned by the stream. The bytes returned in the buffer are considered read from the stream.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty(\_:\_:)](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamCopyError(\_:)](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError(\_:)](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus(\_:)](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable(\_:)](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

# CFReadStreamGetBuffer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a stream’s internal buffer of unread data, if possible.

## Declaration

```objectivec
extern const UInt8 *CFReadStreamGetBuffer(CFReadStreamRef stream, CFIndex maxBytesToRead, CFIndex *numBytesRead);
```

## Parameters

- `stream`: The stream to examine.
- `maxBytesToRead`: The maximum number of bytes to read. If greater than `0`, `maxBytesToRead` limits the number of bytes read; if `0` or less, all available bytes are read.
- `numBytesRead`: On return, contains the length of returned buffer. If `stream` is not open or has encountered an error, `numBytesRead` is set to `-1`.

<a id="return-value"></a>

## Return Value

A pointer to the internal buffer of unread data for `stream`, if possible; `NULL` otherwise. The buffer is good only until the next stream operation called on the stream. You should neither change the contents of the returned buffer nor attempt to deallocate the buffer; it is still owned by the stream. The bytes returned in the buffer are considered read from the stream.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamCopyError](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.
