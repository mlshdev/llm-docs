> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationrequestwithoptions/init(destinationplatform:options:)](https://developer.apple.com/documentation/appmigrationkit/migrationrequestwithoptions/init(destinationplatform:options:))

# init(destinationPlatform:options:)

**Framework:** AppMigrationKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a request instance.

## Declaration

```swift
init(destinationPlatform: MigrationPlatform, options: [OptionsType : Data] = [OptionsType: Data]())
```

## Parameters

- `destinationPlatform`: A value that identifies the platform the target device uses.
- `options`: Export options requested by the destination device.
