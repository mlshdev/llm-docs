> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nslightweightmigrationstage/init(_:)](https://developer.apple.com/documentation/coredata/nslightweightmigrationstage/init(_:))

# init(\_:)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+ · Swift 5.8+

Creates a lightweight migration stage with the specified version checksums.

## Declaration

```swift
convenience init(_ checksums: [String])
```

## Parameters

- `checksums`: The array of version checksums.

<a id="Discussion"></a>

## Discussion

To determine an object model’s version checksum, use its [versionChecksum](../nsmanagedobjectmodel/versionchecksum.md) property. Alternatively, you can find the checksum in the versioned model’s `VersionInfo.plist` file or in Xcode’s build log.
