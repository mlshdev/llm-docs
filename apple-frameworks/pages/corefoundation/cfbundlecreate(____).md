> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlecreate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbundlecreate(_:_:))

# CFBundleCreate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFBundle object.

## Declaration

```swift
func CFBundleCreate(_ allocator: CFAllocator!, _ bundleURL: CFURL!) -> CFBundle!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bundleURL`: The location of the bundle for which to create a CFBundle object.

<a id="return-value"></a>

## Return Value

A CFBundle object created from the bundle at `bundleURL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="discussion"></a>

## Discussion

Returns `NULL` if there was a memory allocation problem. May return an existing CFBundle object with the reference count incremented. May return `NULL` if the bundle doesn’t exist at `bundleURL` (see Discussion).

<a id="Discussion"></a>

## Discussion

Once a bundle has been created, it is cached; the bundle cache is flushed only periodically. `CFBundleCreate` does not check that a cached bundle still exists in the filesystem. If a bundle is deleted from the filesystem, it is therefore possible for `CFBundleCreate` to return a cached bundle that has actually been deleted.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreateBundlesFromDirectory(\_:\_:\_:)](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles()](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier(\_:)](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle()](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.

# CFBundleCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFBundle object.

## Declaration

```objectivec
extern CFBundleRefCFBundleCreate(CFAllocatorRef allocator, CFURLRef bundleURL);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bundleURL`: The location of the bundle for which to create a CFBundle object.

<a id="return-value"></a>

## Return Value

A CFBundle object created from the bundle at `bundleURL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="discussion"></a>

## Discussion

Returns `NULL` if there was a memory allocation problem. May return an existing CFBundle object with the reference count incremented. May return `NULL` if the bundle doesn’t exist at `bundleURL` (see Discussion).

<a id="Discussion"></a>

## Discussion

Once a bundle has been created, it is cached; the bundle cache is flushed only periodically. `CFBundleCreate` does not check that a cached bundle still exists in the filesystem. If a bundle is deleted from the filesystem, it is therefore possible for `CFBundleCreate` to return a cached bundle that has actually been deleted.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreateBundlesFromDirectory](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.
