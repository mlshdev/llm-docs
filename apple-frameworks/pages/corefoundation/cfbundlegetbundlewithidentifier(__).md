> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbundlegetbundlewithidentifier(_:)](https://developer.apple.com/documentation/corefoundation/cfbundlegetbundlewithidentifier(_:))

# CFBundleGetBundleWithIdentifier(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Locate a bundle given its program-defined identifier.

## Declaration

```swift
func CFBundleGetBundleWithIdentifier(_ bundleID: CFString!) -> CFBundle!
```

## Parameters

- `bundleID`: The identifier of the bundle to locate. Note that identifier names are case-sensitive.

<a id="return-value"></a>

## Return Value

A CFBundle object, or `NULL` if the bundle was not found. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For a bundle to be located using its identifier, the bundle must already have been loaded. The principal purpose for locating bundles by identifier is for code in frameworks or plugins to find its own bundle.

Bundle identifiers are created by entering a value for the key `CFBundleIdentifier` in the bundle’s `Info.plist` file.

To ensure uniqueness, you should create bundle identifiers with the form of reverse-DNS naming style package names, such as `com.MyCompany.MyApp.bundleName`.

<a id="Special-Considerations"></a>

### Special Considerations

If a bundle object is created and the bundle file structure later deleted from the filesystem, this function will still return the original bundle object.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate(\_:\_:)](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory(\_:\_:\_:)](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles()](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetMainBundle()](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.

# CFBundleGetBundleWithIdentifier (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Locate a bundle given its program-defined identifier.

## Declaration

```objectivec
extern CFBundleRefCFBundleGetBundleWithIdentifier(CFStringRef bundleID);
```

## Parameters

- `bundleID`: The identifier of the bundle to locate. Note that identifier names are case-sensitive.

<a id="return-value"></a>

## Return Value

A CFBundle object, or `NULL` if the bundle was not found. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For a bundle to be located using its identifier, the bundle must already have been loaded. The principal purpose for locating bundles by identifier is for code in frameworks or plugins to find its own bundle.

Bundle identifiers are created by entering a value for the key `CFBundleIdentifier` in the bundle’s `Info.plist` file.

To ensure uniqueness, you should create bundle identifiers with the form of reverse-DNS naming style package names, such as `com.MyCompany.MyApp.bundleName`.

<a id="Special-Considerations"></a>

### Special Considerations

If a bundle object is created and the bundle file structure later deleted from the filesystem, this function will still return the original bundle object.

## See Also

### Creating and Accessing Bundles

- [CFBundleCreate](cfbundlecreate%28____%29.md): Creates a CFBundle object.
- [CFBundleCreateBundlesFromDirectory](cfbundlecreatebundlesfromdirectory%28______%29.md): Searches a directory and constructs an array of CFBundle objects from all valid bundles in the specified directory.
- [CFBundleGetAllBundles](cfbundlegetallbundles%28%29.md): Returns an array containing all of the bundles currently open in the application.
- [CFBundleGetMainBundle](cfbundlegetmainbundle%28%29.md): Returns an application’s main bundle.
