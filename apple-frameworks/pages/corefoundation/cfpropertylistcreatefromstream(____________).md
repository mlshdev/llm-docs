> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistcreatefromstream(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistcreatefromstream(_:_:_:_:_:_:))

# CFPropertyListCreateFromStream(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a property list using data from a stream.

> Use CFPropertyListCreateWithStream instead.

## Declaration

```swift
func CFPropertyListCreateFromStream(_ allocator: CFAllocator!, _ stream: CFReadStream!, _ streamLength: CFIndex, _ mutabilityOption: CFOptionFlags, _ format: UnsafeMutablePointer<CFPropertyListFormat>!, _ errorString: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> Unmanaged<CFPropertyList>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `stream`: The stream whose data contains the content. The stream must be opened and configured—this function simply reads bytes from the stream. The stream may contain any supported property list type (see [CFPropertyListFormat](cfpropertylistformat.md)).
- `streamLength`: The number of bytes to read. If `0`, this function will read to the end of the stream.
- `mutabilityOption`: A constant that specifies the degree of mutability for the returned property list. See [Property List Mutability Options](property_list_mutability_options.md) for descriptions of possible values.
- `format`: A constant that specifies the format of the property list. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `errorString`: On return, `NULL` if the conversion is successful, otherwise a string that describes the nature of the error. Error messages are not localized, but may be in the future, so they are not suitable for comparison.

  Pass `NULL` if you do not wish to receive an error string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A new property list initialized with the data contained in `stream`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function simply reads bytes from `stream` starting at the current location to the end, which is expected to be the end of the property list, or up to the number of bytes specified by `streamLength` if it is not `0`.

<a id="Special-Considerations"></a>

### Special Considerations

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListCreateWithStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatewithstream%28____________%29.md) instead.

## See Also

### Creating a Property List

- [CFPropertyListCreateWithData(\_:\_:\_:\_:\_:)](cfpropertylistcreatewithdata%28__________%29.md): Creates a property list from a given CFData object.
- [CFPropertyListCreateWithStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateDeepCopy(\_:\_:\_:)](cfpropertylistcreatedeepcopy%28______%29.md): Recursively creates a copy of a given property list.
- [CFPropertyListCreateFromXMLData(\_:\_:\_:\_:)](cfpropertylistcreatefromxmldata%28________%29.md): Deprecated. Creates a property list using the specified XML or binary property list data.

# CFPropertyListCreateFromStream (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a property list using data from a stream.

> Use CFPropertyListCreateWithStream instead.

## Declaration

```objectivec
extern CFPropertyListRefCFPropertyListCreateFromStream(CFAllocatorRef allocator, CFReadStreamRef stream, CFIndex streamLength, CFOptionFlags mutabilityOption, CFPropertyListFormat *format, CFStringRef*errorString);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `stream`: The stream whose data contains the content. The stream must be opened and configured—this function simply reads bytes from the stream. The stream may contain any supported property list type (see [CFPropertyListFormat](cfpropertylistformat.md)).
- `streamLength`: The number of bytes to read. If `0`, this function will read to the end of the stream.
- `mutabilityOption`: A constant that specifies the degree of mutability for the returned property list. See [Property List Mutability Options](property_list_mutability_options.md) for descriptions of possible values.
- `format`: A constant that specifies the format of the property list. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `errorString`: On return, `NULL` if the conversion is successful, otherwise a string that describes the nature of the error. Error messages are not localized, but may be in the future, so they are not suitable for comparison.

  Pass `NULL` if you do not wish to receive an error string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A new property list initialized with the data contained in `stream`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function simply reads bytes from `stream` starting at the current location to the end, which is expected to be the end of the property list, or up to the number of bytes specified by `streamLength` if it is not `0`.

<a id="Special-Considerations"></a>

### Special Considerations

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListCreateWithStream](cfpropertylistcreatewithstream%28____________%29.md) instead.

## See Also

### Creating a Property List

- [CFPropertyListCreateWithData](cfpropertylistcreatewithdata%28__________%29.md): Creates a property list from a given CFData object.
- [CFPropertyListCreateWithStream](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateDeepCopy](cfpropertylistcreatedeepcopy%28______%29.md): Recursively creates a copy of a given property list.
- [CFPropertyListCreateFromXMLData](cfpropertylistcreatefromxmldata%28________%29.md): Deprecated. Creates a property list using the specified XML or binary property list data.
