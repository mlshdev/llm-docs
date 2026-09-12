> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/availability](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/availability)

# AppExtensionIdentity.Availability

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** macOS 13.0+ (deprecated in 26.0)

An object that contains information about available extensions.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
struct Availability
```

## Topics

### Creating an Availability Object

- [init()](availability/init%28%29.md): Deprecated. Creates an app extension identity availability object.

### Accessing Availability Information

- [description](availability/description.md): Deprecated. A string describing the extensions availability.
- [totalCount](availability/totalcount.md): Deprecated. The number of extensions not yet approved for hosting by the current app.
- [disabledCount](availability/disabledcount.md): Deprecated. The number of extensions disabled for hosting in the current app.
- [enabledCount](availability/enabledcount.md): Deprecated. The number of extensions enabled for hostng in the current app.
- [unapprovedCount](availability/unapprovedcount.md): Deprecated. The number of extensions not yet approved for hosing by the current app

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [availabilityUpdates](availabilityupdates.md): Deprecated.
- [matching(appExtensionPointIDs:)](matching%28appextensionpointids_%29.md): Deprecated. The asynchronous sequence of extension identities which target the specified extension point identifiers.
- [AppExtensionIdentity.Identities](identities.md): Deprecated. An asynchronous sequence that returns the enabled extensions that match provided constraints.
