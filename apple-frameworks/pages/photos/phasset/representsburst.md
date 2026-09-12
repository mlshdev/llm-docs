> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/representsburst](https://developer.apple.com/documentation/photos/phasset/representsburst)

# representsBurst (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.

## Declaration

```swift
var representsBurst: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the user takes a sequence of photos in burst mode with the Camera app (on supported devices), the Photos app user interface groups the resulting assets together. One asset represents the entire sequence in displayed collections.

## See Also

### Working with Burst Photo Assets

- [burstIdentifier](burstidentifier.md): The unique identifier shared by photo assets from the same burst sequence.
- [burstSelectionTypes](burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [PHAssetBurstSelectionType](../phassetburstselectiontype.md): Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](burstselectiontypes.md) property.

# representsBurst (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL representsBurst;
```

<a id="Discussion"></a>

## Discussion

When the user takes a sequence of photos in burst mode with the Camera app (on supported devices), the Photos app user interface groups the resulting assets together. One asset represents the entire sequence in displayed collections.

## See Also

### Working with Burst Photo Assets

- [burstIdentifier](burstidentifier.md): The unique identifier shared by photo assets from the same burst sequence.
- [burstSelectionTypes](burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [PHAssetBurstSelectionType](../phassetburstselectiontype.md): Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](burstselectiontypes.md) property.
