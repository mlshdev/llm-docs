> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/private(_:)](https://developer.apple.com/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct/private(_:))

# private(\_:)

**Framework:** SwiftData  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Enables managed CloudKit sync using the specified ubiquity container.

## Declaration

```swift
static func `private`(_ privateDBName: String) -> ModelConfiguration.CloudKitDatabase
```

## Parameters

- `privateDBName`: The identifier of the iCloud ubiquity container to use. You find these in the iCloud capabilities section of your Xcode project. For more information, see [Configuring iCloud services](https://developer.apple.com/documentation/xcode/configuring-icloud-services).

## See Also

### Getting discovery options

- [automatic](automatic.md): Enables managed CloudKit sync using the primary ubiquity container from the app’s entitlements.
- [none](none.md): Disables managed CloudKit sync.
