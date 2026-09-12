> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistcreatedata(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistcreatedata(_:_:_:_:_:))

# CFPropertyListCreateData(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a CFData object containing a serialized representation of a given property list in a specified format.

## Declaration

```swift
func CFPropertyListCreateData(_ allocator: CFAllocator!, _ propertyList: CFPropertyList!, _ format: CFPropertyListFormat, _ options: CFOptionFlags, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<CFData>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new data object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `propertyList`: The property list to write out.
- `format`: A CFPropertyListFormat constant to specify the data format. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `options`: This parameter is currently unused and should be set to `0`.
- `error`: If this parameter is non-NULL, if an error occurs, on return this will contain a CFError error describing the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A CFData object containing a serialized representation of `propertyList` in a the format specified by `format`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

## See Also

### Exporting a Property List

- [CFPropertyListWrite(\_:\_:\_:\_:\_:)](cfpropertylistwrite%28__________%29.md): Write the bytes of a serialized property list out to a stream.
- [CFPropertyListCreateXMLData(\_:\_:)](cfpropertylistcreatexmldata%28____%29.md): Deprecated. Creates an XML representation of the specified property list.
- [CFPropertyListWriteToStream(\_:\_:\_:\_:)](cfpropertylistwritetostream%28________%29.md): Deprecated. Writes the bytes of a property list serialization out to a stream.

# CFPropertyListCreateData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a CFData object containing a serialized representation of a given property list in a specified format.

## Declaration

```objectivec
extern CFDataRefCFPropertyListCreateData(CFAllocatorRef allocator, CFPropertyListRef propertyList, CFPropertyListFormat format, CFOptionFlags options, CFErrorRef*error);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new data object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `propertyList`: The property list to write out.
- `format`: A CFPropertyListFormat constant to specify the data format. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `options`: This parameter is currently unused and should be set to `0`.
- `error`: If this parameter is non-NULL, if an error occurs, on return this will contain a CFError error describing the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A CFData object containing a serialized representation of `propertyList` in a the format specified by `format`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

## See Also

### Exporting a Property List

- [CFPropertyListWrite](cfpropertylistwrite%28__________%29.md): Write the bytes of a serialized property list out to a stream.
- [CFPropertyListCreateXMLData](cfpropertylistcreatexmldata%28____%29.md): Deprecated. Creates an XML representation of the specified property list.
- [CFPropertyListWriteToStream](cfpropertylistwritetostream%28________%29.md): Deprecated. Writes the bytes of a property list serialization out to a stream.
