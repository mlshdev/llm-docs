> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionproperties/bundleidentifier](https://developer.apple.com/documentation/systemextensions/ossystemextensionproperties/bundleidentifier)

# bundleIdentifier (Swift)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

The bundle identifier of the extension.

## Declaration

```swift
var bundleIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This is the [CFBundleIdentifier](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleidentifier) of the extension bundle.

## See Also

### Identifying the Extension

- [bundleVersion](bundleversion.md): The bundle version of the extension.
- [bundleShortVersion](bundleshortversion.md): The bundle short version string of the extension.

# bundleIdentifier (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

The bundle identifier of the extension.

## Declaration

```objectivec
@property (strong, readonly) NSString * bundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

This is the [CFBundleIdentifier](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleidentifier) of the extension bundle.

## See Also

### Identifying the Extension

- [bundleVersion](bundleversion.md): The bundle version of the extension.
- [bundleShortVersion](bundleshortversion.md): The bundle short version string of the extension.
