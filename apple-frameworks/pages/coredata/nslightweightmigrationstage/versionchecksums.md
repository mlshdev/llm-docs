> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nslightweightmigrationstage/versionchecksums](https://developer.apple.com/documentation/coredata/nslightweightmigrationstage/versionchecksums)

# versionChecksums (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The array of version checksums.

## Declaration

```swift
var versionChecksums: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the checksum you specify when creating the lightweight migration stage.

# versionChecksums (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The array of version checksums.

## Declaration

```objectivec
@property (strong, readonly) NSArray<NSString *> * versionChecksums;
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the checksum you specify when creating the lightweight migration stage.
