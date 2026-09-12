> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnchirality](https://developer.apple.com/documentation/vision/vnchirality)

# VNChirality (Swift)

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Constants that the define the chirality, or handedness, of a pose.

## Declaration

```swift
@frozen enum VNChirality
```

## Topics

### Chirality Values

- [VNChirality.left](vnchirality/left.md): Indicates a left-handed pose.
- [VNChirality.right](vnchirality/right.md): Indicates a right-handed pose.
- [VNChirality.unknown](vnchirality/unknown.md): Indicates that the pose chirality is unknown.

### Creating a Chirality

- [init(rawValue:)](vnchirality/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the Chirality

- [chirality](vnhumanhandposeobservation/chirality.md): The chirality, or handedness, of a pose.

# VNChirality (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Constants that the define the chirality, or handedness, of a pose.

## Declaration

```objectivec
enum VNChirality : NSInteger;
```

## Topics

### Chirality Values

- [VNChiralityLeft](vnchirality/left.md): Indicates a left-handed pose.
- [VNChiralityRight](vnchirality/right.md): Indicates a right-handed pose.
- [VNChiralityUnknown](vnchirality/unknown.md): Indicates that the pose chirality is unknown.

## See Also

### Determining the Chirality

- [chirality](vnhumanhandposeobservation/chirality.md): The chirality, or handedness, of a pose.
