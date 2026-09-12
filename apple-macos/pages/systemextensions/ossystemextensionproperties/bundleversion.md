> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionproperties/bundleversion](https://developer.apple.com/documentation/systemextensions/ossystemextensionproperties/bundleversion)

# bundleVersion (Swift)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

The bundle version of the extension.

## Declaration

```swift
var bundleVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

This is the [CFBundleVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleversion) of the extension bundle.

## See Also

### Identifying the Extension

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the extension.
- [bundleShortVersion](bundleshortversion.md): The bundle short version string of the extension.

# bundleVersion (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

The bundle version of the extension.

## Declaration

```objectivec
@property (strong, readonly) NSString * bundleVersion;
```

<a id="Discussion"></a>

## Discussion

This is the [CFBundleVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleversion) of the extension bundle.

## See Also

### Identifying the Extension

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the extension.
- [bundleShortVersion](bundleshortversion.md): The bundle short version string of the extension.
