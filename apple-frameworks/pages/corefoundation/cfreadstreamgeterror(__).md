> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamgeterror(_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamgeterror(_:))

# CFReadStreamGetError(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the error status of a stream.

> Use [CFReadStreamCopyError(\_:)](cfreadstreamcopyerror%28__%29.md) instead.

## Declaration

```swift
func CFReadStreamGetError(_ stream: CFReadStream!) -> CFStreamError
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The error status of `stream` returned in a [CFStreamError](cfstreamerror.md) structure.

<a id="discussion"></a>

## Discussion

The error field is `0` if no error has occurred. If the error field is not `0`, the `domain` field contains a code that identifies the domain in which the value of the `error` field should be interpreted.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty(\_:\_:)](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer(\_:\_:\_:)](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError(\_:)](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetStatus(\_:)](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable(\_:)](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.

# CFReadStreamGetError (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the error status of a stream.

> Use [CFReadStreamCopyError](cfreadstreamcopyerror%28__%29.md) instead.

## Declaration

```objectivec
extern CFStreamError CFReadStreamGetError(CFReadStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The error status of `stream` returned in a [CFStreamError](cfstreamerror.md) structure.

<a id="discussion"></a>

## Discussion

The error field is `0` if no error has occurred. If the error field is not `0`, the `domain` field contains a code that identifies the domain in which the value of the `error` field should be interpreted.

## See Also

### Examining Stream Properties

- [CFReadStreamCopyProperty](cfreadstreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFReadStreamGetBuffer](cfreadstreamgetbuffer%28______%29.md): Returns a pointer to a stream’s internal buffer of unread data, if possible.
- [CFReadStreamCopyError](cfreadstreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFReadStreamGetStatus](cfreadstreamgetstatus%28__%29.md): Returns the current state of a stream.
- [CFReadStreamHasBytesAvailable](cfreadstreamhasbytesavailable%28__%29.md): Returns a Boolean value that indicates whether a readable stream has data that can be read without blocking.
