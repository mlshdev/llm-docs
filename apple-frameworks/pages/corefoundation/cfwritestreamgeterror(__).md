> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamgeterror(_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamgeterror(_:))

# CFWriteStreamGetError(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the error status of a stream.

> Use [CFWriteStreamCopyError(\_:)](cfwritestreamcopyerror%28__%29.md) instead.

## Declaration

```swift
func CFWriteStreamGetError(_ stream: CFWriteStream!) -> CFStreamError
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The error status of `stream` returned in a CFStreamError structure.

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes(\_:)](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty(\_:\_:)](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError(\_:)](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetStatus(\_:)](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.

# CFWriteStreamGetError (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the error status of a stream.

> Use [CFWriteStreamCopyError](cfwritestreamcopyerror%28__%29.md) instead.

## Declaration

```objectivec
extern CFStreamError CFWriteStreamGetError(CFWriteStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

The error status of `stream` returned in a CFStreamError structure.

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetStatus](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.
