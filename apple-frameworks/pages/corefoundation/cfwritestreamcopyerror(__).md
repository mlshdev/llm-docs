> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamcopyerror(_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamcopyerror(_:))

# CFWriteStreamCopyError(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the error associated with a stream.

## Declaration

```swift
func CFWriteStreamCopyError(_ stream: CFWriteStream!) -> CFError!
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

A CFError object that describes the current problem with stream, or `NULL` if there is no error. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes(\_:)](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty(\_:\_:)](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamGetError(\_:)](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus(\_:)](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.

# CFWriteStreamCopyError (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the error associated with a stream.

## Declaration

```objectivec
extern CFErrorRefCFWriteStreamCopyError(CFWriteStreamRef stream);
```

## Parameters

- `stream`: The stream to examine.

<a id="return-value"></a>

## Return Value

A CFError object that describes the current problem with stream, or `NULL` if there is no error. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyProperty](cfwritestreamcopyproperty%28____%29.md): Returns the value of a property for a stream.
- [CFWriteStreamGetError](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.
