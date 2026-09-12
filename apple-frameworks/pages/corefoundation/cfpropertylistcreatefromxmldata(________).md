> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistcreatefromxmldata(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistcreatefromxmldata(_:_:_:_:))

# CFPropertyListCreateFromXMLData(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a property list using the specified XML or binary property list data.

> Use CFPropertyListCreateWithData instead.

## Declaration

```swift
func CFPropertyListCreateFromXMLData(_ allocator: CFAllocator!, _ xmlData: CFData!, _ mutabilityOption: CFOptionFlags, _ errorString: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> Unmanaged<CFPropertyList>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `xmlData`: The raw bytes to convert into a property list. The bytes may be the content of an XML file or of a binary property list (see [CFPropertyListFormat](cfpropertylistformat.md)).
- `mutabilityOption`: A constant that specifies the degree of mutability for the returned property list. See [Property List Mutability Options](property_list_mutability_options.md) for descriptions of possible values.
- `errorString`: On return, `NULL` if the conversion is successful, otherwise a string that describes the nature of the error. Error messages are not localized, but may be in the future, so they are not currently suitable for comparison.

  Pass `NULL` if you do not wish to receive an error string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A new property list if the conversion is successful, otherwise `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListCreateWithData(\_:\_:\_:\_:\_:)](cfpropertylistcreatewithdata%28__________%29.md) instead.

## See Also

### Creating a Property List

- [CFPropertyListCreateWithData(\_:\_:\_:\_:\_:)](cfpropertylistcreatewithdata%28__________%29.md): Creates a property list from a given CFData object.
- [CFPropertyListCreateWithStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateDeepCopy(\_:\_:\_:)](cfpropertylistcreatedeepcopy%28______%29.md): Recursively creates a copy of a given property list.
- [CFPropertyListCreateFromStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatefromstream%28____________%29.md): Deprecated. Creates a property list using data from a stream.

# CFPropertyListCreateFromXMLData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a property list using the specified XML or binary property list data.

> Use CFPropertyListCreateWithData instead.

## Declaration

```objectivec
extern CFPropertyListRefCFPropertyListCreateFromXMLData(CFAllocatorRef allocator, CFDataRef xmlData, CFOptionFlags mutabilityOption, CFStringRef*errorString);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `xmlData`: The raw bytes to convert into a property list. The bytes may be the content of an XML file or of a binary property list (see [CFPropertyListFormat](cfpropertylistformat.md)).
- `mutabilityOption`: A constant that specifies the degree of mutability for the returned property list. See [Property List Mutability Options](property_list_mutability_options.md) for descriptions of possible values.
- `errorString`: On return, `NULL` if the conversion is successful, otherwise a string that describes the nature of the error. Error messages are not localized, but may be in the future, so they are not currently suitable for comparison.

  Pass `NULL` if you do not wish to receive an error string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A new property list if the conversion is successful, otherwise `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This function is obsolete and will be deprecated soon. Use [CFPropertyListCreateWithData](cfpropertylistcreatewithdata%28__________%29.md) instead.

## See Also

### Creating a Property List

- [CFPropertyListCreateWithData](cfpropertylistcreatewithdata%28__________%29.md): Creates a property list from a given CFData object.
- [CFPropertyListCreateWithStream](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateDeepCopy](cfpropertylistcreatedeepcopy%28______%29.md): Recursively creates a copy of a given property list.
- [CFPropertyListCreateFromStream](cfpropertylistcreatefromstream%28____________%29.md): Deprecated. Creates a property list using data from a stream.
