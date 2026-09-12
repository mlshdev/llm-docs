> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/bundleidentifier](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/bundleidentifier)

# bundleIdentifier

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The bundle identifier of the app extension.

## Declaration

```swift
var bundleIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

During development, an app extension creator assigns a value to this string that incorporates the creator’s company name and the extension name. Bundle identifier strings use reverse-DNS notation.

## See Also

### Identifying the process

- [extensionPointIdentifier](extensionpointidentifier.md): The extension point of your host app that the app extension supports.
- [localizedName](localizedname.md): The localized, human-readable name of the app extension.
