> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamcanacceptbytes(_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamcanacceptbytes(_:))

# CFWriteStreamCanAcceptBytes(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether a writable stream can accept new data without blocking.

## Declaration

```swift
func CFWriteStreamCanAcceptBytes(_ stream: CFWriteStream!) -> Bool
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

`true` if data can be written to `stream` without blocking, `false` otherwise. If `stream` cannot tell if data can be written without actually trying to write the data, this function returns `true`.

## See Also

### Examining Stream Properties

- [CFWriteStreamCopyProperty(\_:\_:)](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError(\_:)](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError(\_:)](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus(\_:)](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.

# CFWriteStreamCanAcceptBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether a writable stream can accept new data without blocking.

## Declaration

```objectivec
extern Boolean CFWriteStreamCanAcceptBytes(CFWriteStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

`true` if data can be written to `stream` without blocking, `false` otherwise. If `stream` cannot tell if data can be written without actually trying to write the data, this function returns `true`.

## See Also

### Examining Stream Properties

- [CFWriteStreamCopyProperty](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamCopyError](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.
