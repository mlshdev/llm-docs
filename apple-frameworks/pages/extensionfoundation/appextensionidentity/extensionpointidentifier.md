> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/extensionpointidentifier](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/extensionpointidentifier)

# extensionPointIdentifier

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The extension point of your host app that the app extension supports.

## Declaration

```swift
var extensionPointIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

This property contains the identifier for one of the host app’s extension points. Extension points represent the extensible features of the host app.

## See Also

### Identifying the process

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app extension.
- [localizedName](localizedname.md): The localized, human-readable name of the app extension.
