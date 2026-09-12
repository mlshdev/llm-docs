> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfbundledevelopmentregionkey](https://developer.apple.com/documentation/corefoundation/kcfbundledevelopmentregionkey)

# kCFBundleDevelopmentRegionKey (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The name of the development language of the bundle.

## Declaration

```swift
let kCFBundleDevelopmentRegionKey: CFString!
```

<a id="Discussion"></a>

## Discussion

When CFBundle looks for resources, the fallback is to look in the lproj whose name is given by the `kCFBundleDevelopmentRegionKey` in the `Info.plist` file. You must, therefore, ensure that a bundle contains an lproj with that exact name containing a copy of every localized resource, otherwise CFBundle cannot guarantee the fallback mechanism will work.

## See Also

### Constants

- [kCFBundleInfoDictionaryVersionKey](kcfbundleinfodictionaryversionkey.md): The version of the information property list format.
- [kCFBundleExecutableKey](kcfbundleexecutablekey.md): The name of the executable in this bundle (if any).
- [kCFBundleIdentifierKey](kcfbundleidentifierkey.md): The bundle identifier.
- [kCFBundleVersionKey](kcfbundleversionkey.md): The version number of the bundle.
- [kCFBundleNameKey](kcfbundlenamekey.md): The human-readable name of the bundle.
- [kCFBundleLocalizationsKey](kcfbundlelocalizationskey.md): Allows an unbundled application that handles localization itself to specify which localizations it has available.

# kCFBundleDevelopmentRegionKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The name of the development language of the bundle.

## Declaration

```objectivec
extern CFStringRef const kCFBundleDevelopmentRegionKey;
```

<a id="Discussion"></a>

## Discussion

When CFBundle looks for resources, the fallback is to look in the lproj whose name is given by the `kCFBundleDevelopmentRegionKey` in the `Info.plist` file. You must, therefore, ensure that a bundle contains an lproj with that exact name containing a copy of every localized resource, otherwise CFBundle cannot guarantee the fallback mechanism will work.

## See Also

### Constants

- [kCFBundleInfoDictionaryVersionKey](kcfbundleinfodictionaryversionkey.md): The version of the information property list format.
- [kCFBundleExecutableKey](kcfbundleexecutablekey.md): The name of the executable in this bundle (if any).
- [kCFBundleIdentifierKey](kcfbundleidentifierkey.md): The bundle identifier.
- [kCFBundleVersionKey](kcfbundleversionkey.md): The version number of the bundle.
- [kCFBundleNameKey](kcfbundlenamekey.md): The human-readable name of the bundle.
- [kCFBundleLocalizationsKey](kcfbundlelocalizationskey.md): Allows an unbundled application that handles localization itself to specify which localizations it has available.
