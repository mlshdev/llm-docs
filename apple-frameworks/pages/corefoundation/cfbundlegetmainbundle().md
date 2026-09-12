> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetmainbundle()](https://developer.apple.com/documentation/corefoundation/cfbundlegetmainbundle())

# CFBundleGetMainBundle() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an application’s main bundle.

## Declaration

```swift
func CFBundleGetMainBundle() -> CFBundle!
```

<a id="return-value"></a>

## Return Value

A CFBundle object representing the application’s main bundle, or `NULL` if it is not possible to create a bundle. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

CFBundle creates a main bundle whenever it possibly can, even for unbundled apps. There are a few situations in which it is not possible, so you should check the return value against `NULL`, but this happens only in exceptional circumstances.

For an explanation of the main bundle, see [Locating and Opening Bundles](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/AccessingaBundlesContents/AccessingaBundlesContents.html#//apple_ref/doc/uid/10000123i-CH104-SW6) in [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i).

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate(\_:\_:)](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory(\_:\_:\_:)](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles()](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier(\_:)](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.

# CFBundleGetMainBundle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an application’s main bundle.

## Declaration

```objectivec
extern CFBundleRefCFBundleGetMainBundle();
```

<a id="return-value"></a>

## Return Value

A CFBundle object representing the application’s main bundle, or `NULL` if it is not possible to create a bundle. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

CFBundle creates a main bundle whenever it possibly can, even for unbundled apps. There are a few situations in which it is not possible, so you should check the return value against `NULL`, but this happens only in exceptional circumstances.

For an explanation of the main bundle, see [Locating and Opening Bundles](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/AccessingaBundlesContents/AccessingaBundlesContents.html#//apple_ref/doc/uid/10000123i-CH104-SW6) in [Bundle Programming Guide](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i).

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetBundleWithIdentifier](cfbundlegetbundlewithidentifier%28__%29.md): Locate a bundle given its program-defined identifier.
