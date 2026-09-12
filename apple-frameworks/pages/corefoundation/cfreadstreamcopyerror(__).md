> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamcopyerror(_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamcopyerror(_:))

# CFReadStreamCopyError(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the error associated with a stream.

## Declaration

```swift
func CFReadStreamCopyError(_ stream: CFReadStream!) -> CFError!
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

A CFError object that describes the current problem with stream, or `NULL` if there is no error. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty(\_:\_:)](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer(\_:\_:\_:)](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamGetError(\_:)](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus(\_:)](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable(\_:)](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

# CFReadStreamCopyError (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the error associated with a stream.

## Declaration

```objectivec
extern CFErrorRefCFReadStreamCopyError(CFReadStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

A CFError object that describes the current problem with stream, or `NULL` if there is no error. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamGetError](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.
