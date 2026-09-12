> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistcreatedeepcopy(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistcreatedeepcopy(_:_:_:))

# CFPropertyListCreateDeepCopy(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Recursively creates a copy of a given property list.

## Declaration

```swift
func CFPropertyListCreateDeepCopy(_ allocator: CFAllocator!, _ propertyList: CFPropertyList!, _ mutabilityOption: CFOptionFlags) -> CFPropertyList!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `propertyList`: The property list to copy. This may be any of the standard property list objects, for example a CFArray or a CFDictionary object.
- `mutabilityOption`: A constant that specifies the degree of mutability of the returned property list. See [Property List Mutability Options](property_list_mutability_options.md) for descriptions of possible values.

<a id="return-value"></a>

## Return Value

A new property list that is a copy of `propertyList`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Recursively creates a copy of the given property list so nested arrays and dictionaries are copied as well as the top-most container.

## See Also

### Creating a Property List

- [CFPropertyListCreateWithData(\_:\_:\_:\_:\_:)](cfpropertylistcreatewithdata%28__________%29.md): Creates a property list from a given CFData object.
- [CFPropertyListCreateWithStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateFromXMLData(\_:\_:\_:\_:)](cfpropertylistcreatefromxmldata%28________%29.md): Deprecated. Creates a property list using the specified XML or binary property list data.
- [CFPropertyListCreateFromStream(\_:\_:\_:\_:\_:\_:)](cfpropertylistcreatefromstream%28____________%29.md): Deprecated. Creates a property list using data from a stream.

# CFPropertyListCreateDeepCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Recursively creates a copy of a given property list.

## Declaration

```objectivec
extern CFPropertyListRefCFPropertyListCreateDeepCopy(CFAllocatorRef allocator, CFPropertyListRef propertyList, CFOptionFlags mutabilityOption);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new property list. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `propertyList`: The property list to copy. This may be any of the standard property list objects, for example a CFArray or a CFDictionary object.
- `mutabilityOption`: A constant that specifies the degree of mutability of the returned property list. See [Property List Mutability Options](property_list_mutability_options.md) for descriptions of possible values.

<a id="return-value"></a>

## Return Value

A new property list that is a copy of `propertyList`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Recursively creates a copy of the given property list so nested arrays and dictionaries are copied as well as the top-most container.

## See Also

### Creating a Property List

- [CFPropertyListCreateWithData](cfpropertylistcreatewithdata%28__________%29.md): Creates a property list from a given CFData object.
- [CFPropertyListCreateWithStream](cfpropertylistcreatewithstream%28____________%29.md): Create and return a property list with a CFReadStream input.
- [CFPropertyListCreateFromXMLData](cfpropertylistcreatefromxmldata%28________%29.md): Deprecated. Creates a property list using the specified XML or binary property list data.
- [CFPropertyListCreateFromStream](cfpropertylistcreatefromstream%28____________%29.md): Deprecated. Creates a property list using data from a stream.
