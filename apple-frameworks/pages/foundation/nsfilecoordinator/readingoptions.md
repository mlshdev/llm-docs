> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/readingoptions](https://developer.apple.com/documentation/foundation/nsfilecoordinator/readingoptions)

# NSFileCoordinator.ReadingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options to use when reading the contents or attributes of a file or directory.

## Declaration

```swift
struct ReadingOptions
```

## Topics

### Constants

- [withoutChanges](readingoptions/withoutchanges.md)
- [resolvesSymbolicLink](readingoptions/resolvessymboliclink.md)
- [immediatelyAvailableMetadataOnly](readingoptions/immediatelyavailablemetadataonly.md): Specify this constant if you want to read an item’s metadata without triggering a download.
- [forUploading](readingoptions/foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.

### Initializers

- [init(rawValue:)](readingoptions/init%28rawvalue_%29.md): Instantiates a reading option using an unsigned integer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSFileCoordinator.WritingOptions](writingoptions.md): Options to use when changing the contents or attributes of a file or directory.

# NSFileCoordinatorReadingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options to use when reading the contents or attributes of a file or directory.

## Declaration

```objectivec
enum NSFileCoordinatorReadingOptions : NSUInteger;
```

## Topics

### Constants

- [NSFileCoordinatorReadingWithoutChanges](readingoptions/withoutchanges.md)
- [NSFileCoordinatorReadingResolvesSymbolicLink](readingoptions/resolvessymboliclink.md)
- [NSFileCoordinatorReadingImmediatelyAvailableMetadataOnly](readingoptions/immediatelyavailablemetadataonly.md): Specify this constant if you want to read an item’s metadata without triggering a download.
- [NSFileCoordinatorReadingForUploading](readingoptions/foruploading.md): Specify this content when reading an item for the purpose of uploading its contents.

## See Also

### Constants

- [NSFileCoordinatorWritingOptions](writingoptions.md): Options to use when changing the contents or attributes of a file or directory.
