> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/availability/description](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/availability/description)

# description

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** macOS 13.0+ (deprecated in 26.0)

A string describing the extensions availability.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
var description: String { get }
```

## See Also

### Accessing Availability Information

- [totalCount](totalcount.md): Deprecated. The number of extensions not yet approved for hosting by the current app.
- [disabledCount](disabledcount.md): Deprecated. The number of extensions disabled for hosting in the current app.
- [enabledCount](enabledcount.md): Deprecated. The number of extensions enabled for hostng in the current app.
- [unapprovedCount](unapprovedcount.md): Deprecated. The number of extensions not yet approved for hosing by the current app
