> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistcreatexmldata(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistcreatexmldata(_:_:))

# CFPropertyListCreateXMLData(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates an XML representation of the specified property list.

> Use CFPropertyListCreateData instead.

## Declaration

```swift
func CFPropertyListCreateXMLData(_ allocator: CFAllocator!, _ propertyList: CFPropertyList!) -> Unmanaged<CFData>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new data object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `propertyList`: The property list to convert. This may be any of the standard property list objects, for example a CFArray or a CFDictionary object.

<a id="return-value"></a>

## Return Value

A CFData object containing the XML data. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListCreateData(\_:\_:\_:\_:\_:)](cfpropertylistcreatedata%28__________%29.md) instead.

## See Also

### Exporting a Property List

- [CFPropertyListCreateData(\_:\_:\_:\_:\_:)](cfpropertylistcreatedata%28__________%29.md): Returns a CFData object containing a serialized representation of a given property list in a specified format.
- [CFPropertyListWrite(\_:\_:\_:\_:\_:)](cfpropertylistwrite%28__________%29.md): Write the bytes of a serialized property list out to a stream.
- [CFPropertyListWriteToStream(\_:\_:\_:\_:)](cfpropertylistwritetostream%28________%29.md): Deprecated. Writes the bytes of a property list serialization out to a stream.

# CFPropertyListCreateXMLData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates an XML representation of the specified property list.

> Use CFPropertyListCreateData instead.

## Declaration

```objectivec
extern CFDataRefCFPropertyListCreateXMLData(CFAllocatorRef allocator, CFPropertyListRef propertyList);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new data object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `propertyList`: The property list to convert. This may be any of the standard property list objects, for example a CFArray or a CFDictionary object.

<a id="return-value"></a>

## Return Value

A CFData object containing the XML data. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListCreateData](cfpropertylistcreatedata%28__________%29.md) instead.

## See Also

### Exporting a Property List

- [CFPropertyListCreateData](cfpropertylistcreatedata%28__________%29.md): Returns a CFData object containing a serialized representation of a given property list in a specified format.
- [CFPropertyListWrite](cfpropertylistwrite%28__________%29.md): Write the bytes of a serialized property list out to a stream.
- [CFPropertyListWriteToStream](cfpropertylistwritetostream%28________%29.md): Deprecated. Writes the bytes of a property list serialization out to a stream.
