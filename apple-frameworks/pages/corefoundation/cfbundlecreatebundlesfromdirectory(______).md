> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecreatebundlesfromdirectory(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecreatebundlesfromdirectory(_:_:_:))

# CFBundleCreateBundlesFromDirectory(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.

## Declaration

```swift
func CFBundleCreateBundlesFromDirectory(_ allocator: CFAllocator!, _ directoryURL: CFURL!, _ bundleType: CFString!) -> CFArray!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `directoryURL`: The location of the directory to search for valid bundles.
- `bundleType`: The abstract type of the bundles to locate and create. The type is expressed as a filename extension, such as `bundle`. Pass `NULL` to create CFBundle objects for bundles of any type.

<a id="return-value"></a>

## Return Value

A CFArray object containing CFBundle objects created from the contents of the specified directory. Returns an empty array if no bundles exist at `directoryURL`, and `NULL` if there was a memory allocation problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The array returned by this function will not contain stale CFBundle references.

<a id="Special-Considerations"></a>

### Special Considerations

The [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) applies both to the array returned and to the bundles in the array. In order to properly dispose of the returned value, you must release the array *and* any bundles returned in the array.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate(\_:\_:)](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleGetAllBundles()](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier(\_:)](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle()](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.

# CFBundleCreateBundlesFromDirectory (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.

## Declaration

```objectivec
extern CFArrayRefCFBundleCreateBundlesFromDirectory(CFAllocatorRef allocator, CFURLRef directoryURL, CFStringRef bundleType);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `directoryURL`: The location of the directory to search for valid bundles.
- `bundleType`: The abstract type of the bundles to locate and create. The type is expressed as a filename extension, such as `bundle`. Pass `NULL` to create CFBundle objects for bundles of any type.

<a id="return-value"></a>

## Return Value

A CFArray object containing CFBundle objects created from the contents of the specified directory. Returns an empty array if no bundles exist at `directoryURL`, and `NULL` if there was a memory allocation problem. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The array returned by this function will not contain stale CFBundle references.

<a id="Special-Considerations"></a>

### Special Considerations

The [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) applies both to the array returned and to the bundles in the array. In order to properly dispose of the returned value, you must release the array *and* any bundles returned in the array.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleGetAllBundles](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.
