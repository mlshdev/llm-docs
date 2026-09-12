> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamgetstatus(_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamgetstatus(_:))

# CFReadStreamGetStatus(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current state of a stream.

## Declaration

```swift
func CFReadStreamGetStatus(_ stream: CFReadStream!) -> CFStreamStatus
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The current state of `stream`. See [CFStreamStatus](cfstreamstatus.md) for the list of possible states.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty(\_:\_:)](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer(\_:\_:\_:)](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError(\_:)](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError(\_:)](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamHasBytesAvailable(\_:)](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

# CFReadStreamGetStatus (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current state of a stream.

## Declaration

```objectivec
extern CFStreamStatus CFReadStreamGetStatus(CFReadStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The current state of `stream`. See [CFStreamStatus](cfstreamstatus.md) for the list of possible states.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetError](cfreadstreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFReadStreamHasBytesAvailable](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.
