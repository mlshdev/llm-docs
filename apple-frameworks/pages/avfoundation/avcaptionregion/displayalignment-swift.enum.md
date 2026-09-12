> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/displayalignment-swift.enum](https://developer.apple.com/documentation/avfoundation/avcaptionregion/displayalignment-swift.enum)

# AVCaptionRegion.DisplayAlignment (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate the alignment of lines in a region.

## Declaration

```swift
enum DisplayAlignment
```

<a id="overview"></a>

## Overview

When you insert a caption line, the region places it relative to existing lines. The system determines the order in which the region places lines by its block progression direction. For example, English captions’ block progression direction are top-to-bottom, while Japanese vertical captions use right-to-left.

## Topics

### Display alignments

- [AVCaptionRegion.DisplayAlignment.before](displayalignment-swift.enum/before.md): An alignment that positions lines at the top of the block progression direction.
- [AVCaptionRegion.DisplayAlignment.center](displayalignment-swift.enum/center.md): An alignment that positions lines in the middle of the block progression direction.
- [AVCaptionRegion.DisplayAlignment.after](displayalignment-swift.enum/after.md): An alignment that positions lines at the bottom of the block progression direction.

### Initializers

- [init(rawValue:)](displayalignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the display alignment

- [displayAlignment](displayalignment-swift.property.md): The alignment of lines for the region.

# AVCaptionRegionDisplayAlignment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate the alignment of lines in a region.

## Declaration

```objectivec
enum AVCaptionRegionDisplayAlignment : NSInteger;
```

<a id="overview"></a>

## Overview

When you insert a caption line, the region places it relative to existing lines. The system determines the order in which the region places lines by its block progression direction. For example, English captions’ block progression direction are top-to-bottom, while Japanese vertical captions use right-to-left.

## Topics

### Display alignments

- [AVCaptionRegionDisplayAlignmentBefore](displayalignment-swift.enum/before.md): An alignment that positions lines at the top of the block progression direction.
- [AVCaptionRegionDisplayAlignmentCenter](displayalignment-swift.enum/center.md): An alignment that positions lines in the middle of the block progression direction.
- [AVCaptionRegionDisplayAlignmentAfter](displayalignment-swift.enum/after.md): An alignment that positions lines at the bottom of the block progression direction.

## See Also

### Accessing the display alignment

- [displayAlignment](displayalignment-swift.property.md): The alignment of lines for the region.
