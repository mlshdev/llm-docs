> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistcreatewithdata(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistcreatewithdata(_:_:_:_:_:))

# CFPropertyListCreateWithData(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a property list from a given CFData object.

## Declaration

```swift
func CFPropertyListCreateWithData(_ allocator: CFAllocator!, _ data: CFData!, _ options: CFOptionFlags, _ format: UnsafeMutablePointer<CFPropertyListFormat>!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<CFPropertyList>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `data`: A CFData object containing a serialized representation of a property list.
- `options`: A [CFPropertyListMutabilityOptions](cfpropertylistmutabilityoptions.md) constant to specify the mutability of the returned property list—see [Property List Mutability Options](property_list_mutability_options.md) for possible values.
- `format`: If this parameter is non-`NULL`, on return it will be set to the format of the data. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `error`: If this parameter is non-`NULL`, if an error occurs, on return this will contain a CFError error describing the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A new property list created from the data in `data`. If an error occurs while parsing the data, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Property List

- [CFPropertyListCreateWithStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateDeepCopy(\_:\_:\_:)](cfpropertylistcreatedeepcopy%28______%29.md): Recursively creates a copy of a given property list.
- [CFPropertyListCreateFromXMLData(\_:\_:\_:\_:)](cfpropertylistcreatefromxmldata%28________%29.md): Deprecated. Creates a property list using the specified XML or binary property list data.
- [CFPropertyListCreateFromStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatefromstream%28____________%29.md): Deprecated. Creates a property list using data from a stream.

# CFPropertyListCreateWithData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a property list from a given CFData object.

## Declaration

```objectivec
extern CFPropertyListRefCFPropertyListCreateWithData(CFAllocatorRef allocator, CFDataRef data, CFOptionFlags options, CFPropertyListFormat *format, CFErrorRef*error);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `data`: A CFData object containing a serialized representation of a property list.
- `options`: A [CFPropertyListMutabilityOptions](cfpropertylistmutabilityoptions.md) constant to specify the mutability of the returned property list—see [Property List Mutability Options](property_list_mutability_options.md) for possible values.
- `format`: If this parameter is non-`NULL`, on return it will be set to the format of the data. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.
- `error`: If this parameter is non-`NULL`, if an error occurs, on return this will contain a CFError error describing the problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A new property list created from the data in `data`. If an error occurs while parsing the data, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Property List

- [CFPropertyListCreateWithStream](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateDeepCopy](cfpropertylistcreatedeepcopy%28______%29.md): Recursively creates a copy of a given property list.
- [CFPropertyListCreateFromXMLData](cfpropertylistcreatefromxmldata%28________%29.md): Deprecated. Creates a property list using the specified XML or binary property list data.
- [CFPropertyListCreateFromStream](cfpropertylistcreatefromstream%28____________%29.md): Deprecated. Creates a property list using data from a stream.
