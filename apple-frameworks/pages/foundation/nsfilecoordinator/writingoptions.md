> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/writingoptions](https://developer.apple.com/documentation/foundation/nsfilecoordinator/writingoptions)

# NSFileCoordinator.WritingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options to use when changing the contents or attributes of a file or directory.

## Declaration

```swift
struct WritingOptions
```

<a id="overview"></a>

## Overview

You must specify only one constant at a time for a given write operation.

## Topics

### Constants

- [forDeleting](writingoptions/fordeleting.md)
- [forMoving](writingoptions/formoving.md)
- [forMerging](writingoptions/formerging.md)
- [forReplacing](writingoptions/forreplacing.md)
- [contentIndependentMetadataOnly](writingoptions/contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.

### Initializers

- [init(rawValue:)](writingoptions/init%28rawvalue_%29.md): Instantiates a writing option using an unsigned integer.

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

- [NSFileCoordinator.ReadingOptions](readingoptions.md): Options to use when reading the contents or attributes of a file or directory.

# NSFileCoordinatorWritingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options to use when changing the contents or attributes of a file or directory.

## Declaration

```objectivec
enum NSFileCoordinatorWritingOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

You must specify only one constant at a time for a given write operation.

## Topics

### Constants

- [NSFileCoordinatorWritingForDeleting](writingoptions/fordeleting.md)
- [NSFileCoordinatorWritingForMoving](writingoptions/formoving.md)
- [NSFileCoordinatorWritingForMerging](writingoptions/formerging.md)
- [NSFileCoordinatorWritingForReplacing](writingoptions/forreplacing.md)
- [NSFileCoordinatorWritingContentIndependentMetadataOnly](writingoptions/contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.

## See Also

### Constants

- [NSFileCoordinatorReadingOptions](readingoptions.md): Options to use when reading the contents or attributes of a file or directory.
