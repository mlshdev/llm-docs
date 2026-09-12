> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/availability/totalcount](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/availability/totalcount)

# totalCount

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** macOS 13.0+ (deprecated in 26.0)

The number of extensions not yet approved for hosting by the current app.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
var totalCount: Int { get }
```

## See Also

### Accessing Availability Information

- [description](description.md): Deprecated. A string describing the extensions availability.
- [disabledCount](disabledcount.md): Deprecated. The number of extensions disabled for hosting in the current app.
- [enabledCount](enabledcount.md): Deprecated. The number of extensions enabled for hostng in the current app.
- [unapprovedCount](unapprovedcount.md): Deprecated. The number of extensions not yet approved for hosing by the current app
