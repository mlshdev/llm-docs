> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistwritetostream(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistwritetostream(_:_:_:_:))

# CFPropertyListWriteToStream(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Writes the bytes of a property list serialization out to a stream.

> Use CFPropertyListWrite instead.

## Declaration

```swift
func CFPropertyListWriteToStream(_ propertyList: CFPropertyList!, _ stream: CFWriteStream!, _ format: CFPropertyListFormat, _ errorString: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> CFIndex
```

## Parameters

- `propertyList`: The property list to write out.
- `stream`: The stream to write to. The stream must be opened and configured—this function simply writes bytes to the stream.
- `format`: A constant that specifies the format used to write `propertyList`. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `errorString`: On return, `NULL` if the conversion is successful, otherwise a string that describes the nature of the errors. Error messages are not localized, but may be in the future, so they are not currently suitable for comparison.

  Pass `NULL` if you do not wish to receive an error string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

The number of bytes written, or `0` if an error occurred. If `0` is returned, `errorString` will contain an error message.

<a id="Discussion"></a>

## Discussion

This function leaves the stream open after reading the content. When reading a property list, this function expects the reading stream to end wherever the writing ended, so that the end of the property list data can be identified.

<a id="Special-Considerations"></a>

### Special Considerations

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListWrite(\_:\_:\_:\_:\_:)](cfpropertylistwrite%28__________%29.md) instead.

## See Also

### Exporting a Property List

- [CFPropertyListCreateData(\_:\_:\_:\_:\_:)](cfpropertylistcreatedata%28__________%29.md): Returns a CFData object containing a serialized representation of a given property list in a specified format.
- [CFPropertyListWrite(\_:\_:\_:\_:\_:)](cfpropertylistwrite%28__________%29.md): Write the bytes of a serialized property list out to a stream.
- [CFPropertyListCreateXMLData(\_:\_:)](cfpropertylistcreatexmldata%28____%29.md): Deprecated. Creates an XML representation of the specified property list.

# CFPropertyListWriteToStream (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Writes the bytes of a property list serialization out to a stream.

> Use CFPropertyListWrite instead.

## Declaration

```objectivec
extern CFIndex CFPropertyListWriteToStream(CFPropertyListRef propertyList, CFWriteStreamRef stream, CFPropertyListFormat format, CFStringRef*errorString);
```

## Parameters

- `propertyList`: The property list to write out.
- `stream`: The stream to write to. The stream must be opened and configured—this function simply writes bytes to the stream.
- `format`: A constant that specifies the format used to write `propertyList`. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `errorString`: On return, `NULL` if the conversion is successful, otherwise a string that describes the nature of the errors. Error messages are not localized, but may be in the future, so they are not currently suitable for comparison.

  Pass `NULL` if you do not wish to receive an error string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

The number of bytes written, or `0` if an error occurred. If `0` is returned, `errorString` will contain an error message.

<a id="Discussion"></a>

## Discussion

This function leaves the stream open after reading the content. When reading a property list, this function expects the reading stream to end wherever the writing ended, so that the end of the property list data can be identified.

<a id="Special-Considerations"></a>

### Special Considerations

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListWrite](cfpropertylistwrite%28__________%29.md) instead.

## See Also

### Exporting a Property List

- [CFPropertyListCreateData](cfpropertylistcreatedata%28__________%29.md): Returns a CFData object containing a serialized representation of a given property list in a specified format.
- [CFPropertyListWrite](cfpropertylistwrite%28__________%29.md): Write the bytes of a serialized property list out to a stream.
- [CFPropertyListCreateXMLData](cfpropertylistcreatexmldata%28____%29.md): Deprecated. Creates an XML representation of the specified property list.
