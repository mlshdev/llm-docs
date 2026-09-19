> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfbundlegetallbundles()

# CFBundleGetAllBundles() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing all of the bundles currently open in the application.

## Declaration

```swift
func CFBundleGetAllBundles() -> CFArray!
```

<a id="return-value"></a>

## Return Value

A CFArray object containing CFBundle objects for each open bundle in the application. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

This function is potentially expensive and not thread-safe. It’s best used for debugging or other diagnostics purposes rather than as part of the main execution path of production code.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate(\_:\_:)](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory(\_:\_:\_:)](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetBundleWithIdentifier(\_:)](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle()](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.

# CFBundleGetAllBundles (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing all of the bundles currently open in the application.

## Declaration

```objectivec
extern CFArrayRefCFBundleGetAllBundles();
```

<a id="return-value"></a>

## Return Value

A CFArray object containing CFBundle objects for each open bundle in the application. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

This function is potentially expensive and not thread-safe. It’s best used for debugging or other diagnostics purposes rather than as part of the main execution path of production code.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetBundleWithIdentifier](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
- [CFBundleGetMainBundle](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.
