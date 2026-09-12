> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistwrite(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistwrite(_:_:_:_:_:))

# CFPropertyListWrite(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Write the bytes of a serialized property list out to a stream.

## Declaration

```swift
func CFPropertyListWrite(_ propertyList: CFPropertyList!, _ stream: CFWriteStream!, _ format: CFPropertyListFormat, _ options: CFOptionFlags, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> CFIndex
```

## Parameters

- `propertyList`: The property list to write out.
- `stream`: The CFWriteStream to which to write the data. The stream must be opened and configured.
- `format`: A CFPropertyListFormat constant to specify the data format. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `options`: This parameter is currently unused and should be set to `0`.
- `error`: If this parameter is non-NULL, if an error occurs, on return this will contain a CFError error describing the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

The number of bytes written to `stream`. If an error occurs, returns `0`.

## See Also

### Exporting a Property List

- [CFPropertyListCreateData(\_:\_:\_:\_:\_:)](cfpropertylistcreatedata%28__________%29.md): Returns a CFData object containing a serialized representation of a given property list in a specified format.
- [CFPropertyListCreateXMLData(\_:\_:)](cfpropertylistcreatexmldata%28____%29.md): Deprecated. Creates an XML representation of the specified property list.
- [CFPropertyListWriteToStream(\_:\_:\_:\_:)](cfpropertylistwritetostream%28________%29.md): Deprecated. Writes the bytes of a property list serialization out to a stream.

# CFPropertyListWrite (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Write the bytes of a serialized property list out to a stream.

## Declaration

```objectivec
extern CFIndex CFPropertyListWrite(CFPropertyListRef propertyList, CFWriteStreamRef stream, CFPropertyListFormat format, CFOptionFlags options, CFErrorRef*error);
```

## Parameters

- `propertyList`: The property list to write out.
- `stream`: The CFWriteStream to which to write the data. The stream must be opened and configured.
- `format`: A CFPropertyListFormat constant to specify the data format. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `options`: This parameter is currently unused and should be set to `0`.
- `error`: If this parameter is non-NULL, if an error occurs, on return this will contain a CFError error describing the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

The number of bytes written to `stream`. If an error occurs, returns `0`.

## See Also

### Exporting a Property List

- [CFPropertyListCreateData](cfpropertylistcreatedata%28__________%29.md): Returns a CFData object containing a serialized representation of a given property list in a specified format.
- [CFPropertyListCreateXMLData](cfpropertylistcreatexmldata%28____%29.md): Deprecated. Creates an XML representation of the specified property list.
- [CFPropertyListWriteToStream](cfpropertylistwritetostream%28________%29.md): Deprecated. Writes the bytes of a property list serialization out to a stream.
