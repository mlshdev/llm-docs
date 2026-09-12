> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamcopyproperty(_:_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamcopyproperty(_:_:))

# CFWriteStreamCopyProperty(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a property for a stream.

## Declaration

```swift
func CFWriteStreamCopyProperty(_ stream: CFWriteStream!, _ propertyName: CFStreamPropertyKey!) -> CFTypeRef!
```

## Parameters

- `stream`: The stream to examine.
- `propertyName`: The name of the stream property to obtain. The available properties for standard Core Foundation streams are listed in Stream Properties.

<a id="return-value"></a>

## Return Value

The value of the property `propertyName`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Each type of stream can define a set of properties that either describe or configure individual streams. A property can be any interesting information about a stream. Examples include the headers from an HTTP transmission, the expected number of bytes, file permission information, and so on. Use [CFWriteStreamSetProperty(\_:\_:\_:)](cfwritestreamsetproperty%28______%29.md) to modify the value of a property, although some properties are read-only.

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes(\_:)](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyError(\_:)](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError(\_:)](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus(\_:)](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.

# CFWriteStreamCopyProperty (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a property for a stream.

## Declaration

```objectivec
extern CFTypeRefCFWriteStreamCopyProperty(CFWriteStreamRef stream, CFStreamPropertyKey propertyName);
```

## Parameters

- `stream`: The stream to examine.
- `propertyName`: The name of the stream property to obtain. The available properties for standard Core Foundation streams are listed in Stream Properties.

<a id="return-value"></a>

## Return Value

The value of the property `propertyName`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Each type of stream can define a set of properties that either describe or configure individual streams. A property can be any interesting information about a stream. Examples include the headers from an HTTP transmission, the expected number of bytes, file permission information, and so on. Use [CFWriteStreamSetProperty](cfwritestreamsetproperty%28______%29.md) to modify the value of a property, although some properties are read-only.

## See Also

### Examining Stream Properties

- [CFWriteStreamCanAcceptBytes](cfwritestreamcanacceptbytes%28__%29.md): Returns whether a writable stream can accept new data without blocking.
- [CFWriteStreamCopyError](cfwritestreamcopyerror%28__%29.md): Returns the error associated with a stream.
- [CFWriteStreamGetError](cfwritestreamgeterror%28__%29.md): Deprecated. Returns the error status of a stream.
- [CFWriteStreamGetStatus](cfwritestreamgetstatus%28__%29.md): Returns the current state of a stream.
