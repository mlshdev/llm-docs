> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/localizedname](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/localizedname)

# localizedName

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The localized, human-readable name of the app extension.

## Declaration

```swift
var localizedName: String { get }
```

<a id="discussion"></a>

## Discussion

Use this string if you need to display the name of the app extension in your app’s interface.

## See Also

### Identifying the process

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app extension.
- [extensionPointIdentifier](extensionpointidentifier.md): The extension point of your host app that the app extension supports.
