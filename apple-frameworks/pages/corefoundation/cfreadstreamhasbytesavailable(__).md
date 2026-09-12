> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamhasbytesavailable(_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamhasbytesavailable(_:))

# CFReadStreamHasBytesAvailable(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

## Declaration

```swift
func CFReadStreamHasBytesAvailable(_ stream: CFReadStream!) -> Bool
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

`TRUE` if data can be read from `stream` without blocking, otherwise `FALSE`. If `stream` cannot tell if data is available without actually trying to read the data, this function returns `TRUE`.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty(\_:\_:)](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer(\_:\_:\_:)](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError(\_:)](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError(\_:)](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus(\_:)](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.

# CFReadStreamHasBytesAvailable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

## Declaration

```objectivec
extern Boolean CFReadStreamHasBytesAvailable(CFReadStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

`TRUE` if data can be read from `stream` without blocking, otherwise `FALSE`. If `stream` cannot tell if data is available without actually trying to read the data, this function returns `TRUE`.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamGetStatus](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
