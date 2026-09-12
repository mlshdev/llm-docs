> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetburstselectiontype](https://developer.apple.com/documentation/photos/phassetburstselectiontype)

# PHAssetBurstSelectionType (Swift)

**Framework:** Photos  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](phasset/burstselectiontypes.md) property.

## Declaration

```swift
struct PHAssetBurstSelectionType
```

## Topics

### Initializers

- [init(rawValue:)](phassetburstselectiontype/init%28rawvalue_%29.md): Creates an asset burst selection type from a raw value.

### Constants

- [autoPick](phassetburstselectiontype/autopick.md): Photos has automatically identified the asset as a potential user favorite.
- [userPick](phassetburstselectiontype/userpick.md): The user has marked the asset as a favorite member of its burst sequence.

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

### Working with Burst Photo Assets

- [burstIdentifier](phasset/burstidentifier.md): The unique identifier shared by photo assets from the same burst sequence.
- [burstSelectionTypes](phasset/burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [representsBurst](phasset/representsburst.md): A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.

# PHAssetBurstSelectionType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](phasset/burstselectiontypes.md) property.

## Declaration

```objectivec
enum PHAssetBurstSelectionType : NSUInteger;
```

## Topics

### Constants

- [PHAssetBurstSelectionTypeNone](https://developer.apple.com/documentation/photos/phassetburstselectiontype/phassetburstselectiontypenone): The asset is not marked as a favorite member of its burst sequence or is not a member of a burst sequence.
- [PHAssetBurstSelectionTypeAutoPick](phassetburstselectiontype/autopick.md): Photos has automatically identified the asset as a potential user favorite.
- [PHAssetBurstSelectionTypeUserPick](phassetburstselectiontype/userpick.md): The user has marked the asset as a favorite member of its burst sequence.

## See Also

### Working with Burst Photo Assets

- [burstIdentifier](phasset/burstidentifier.md): The unique identifier shared by photo assets from the same burst sequence.
- [burstSelectionTypes](phasset/burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [representsBurst](phasset/representsburst.md): A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.
