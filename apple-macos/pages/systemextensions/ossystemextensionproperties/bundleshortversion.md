> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionproperties/bundleshortversion](https://developer.apple.com/documentation/systemextensions/ossystemextensionproperties/bundleshortversion)

# bundleShortVersion (Swift)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

The bundle short version string of the extension.

## Declaration

```swift
var bundleShortVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

This is the [CFBundleShortVersionString](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleshortversionstring) of the extension bundle.

## See Also

### Identifying the Extension

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the extension.
- [bundleVersion](bundleversion.md): The bundle version of the extension.

# bundleShortVersion (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

The bundle short version string of the extension.

## Declaration

```objectivec
@property (strong, readonly) NSString * bundleShortVersion;
```

<a id="Discussion"></a>

## Discussion

This is the [CFBundleShortVersionString](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleshortversionstring) of the extension bundle.

## See Also

### Identifying the Extension

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the extension.
- [bundleVersion](bundleversion.md): The bundle version of the extension.
