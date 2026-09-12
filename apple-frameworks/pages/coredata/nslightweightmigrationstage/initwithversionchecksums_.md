> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nslightweightmigrationstage/initwithversionchecksums:](https://developer.apple.com/documentation/coredata/nslightweightmigrationstage/initwithversionchecksums:)

# initWithVersionChecksums:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a lightweight migration stage with the specified version checksums.

## Declaration

```objectivec
- (instancetype) initWithVersionChecksums:(NSArray<NSString *> *) versionChecksums;
```

## Parameters

- `versionChecksums`: The array of version checksums.

<a id="return-value"></a>

## Return Value

An initialized lightweight migration manager, or `nil` if Core Data can’t create one.

<a id="Discussion"></a>

## Discussion

To determine an object model’s version checksum, use its [versionChecksum](../nsmanagedobjectmodel/versionchecksum.md) property. Alternatively, you can find the checksum in the versioned model’s `VersionInfo.plist` file or in Xcode’s build log.
