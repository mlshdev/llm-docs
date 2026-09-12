> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamgetstatus(_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamgetstatus(_:))

# CFWriteStreamGetStatus(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current state of a stream.

## Declaration

```swift
func CFWriteStreamGetStatus(_ stream: CFWriteStream!) -> CFStreamStatus
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The current state of `stream`. See [CFStreamStatus](cfstreamstatus.md) for the list of possible states.

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes(\_:)](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty(\_:\_:)](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError(\_:)](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError(\_:)](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.

# CFWriteStreamGetStatus (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current state of a stream.

## Declaration

```objectivec
extern CFStreamStatus CFWriteStreamGetStatus(CFWriteStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The current state of `stream`. See [CFStreamStatus](cfstreamstatus.md) for the list of possible states.

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
