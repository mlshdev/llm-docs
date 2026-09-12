> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselection/mediaselectioncriteriacanbeappliedautomatically(to:)](https://developer.apple.com/documentation/avfoundation/avmediaselection/mediaselectioncriteriacanbeappliedautomatically(to:))

# mediaSelectionCriteriaCanBeAppliedAutomatically(to:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the specified media selection group is subject to automatic media selection.

## Declaration

```swift
func mediaSelectionCriteriaCanBeAppliedAutomatically(to mediaSelectionGroup: AVMediaSelectionGroup) -> Bool
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the associated asset.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the group is subject to automatic media selection.

<a id="Discussion"></a>

## Discussion

The automatic application of media selection criteria is suspended in any group in which a specific selection has been made by calling [select(\_:in:)](../avplayeritem/select%28__in_%29.md) on the current [AVPlayerItem](../avplayeritem.md).

## See Also

### Inspecting the media selection

- [selectedMediaOption(in:)](selectedmediaoption%28in_%29.md): Returns the media selection option that’s currently selected in the specified group.

# mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the specified media selection group is subject to automatic media selection.

## Declaration

```objectivec
- (BOOL) mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the associated asset.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the group is subject to automatic media selection.

<a id="Discussion"></a>

## Discussion

The automatic application of media selection criteria is suspended in any group in which a specific selection has been made by calling [selectMediaOption:inMediaSelectionGroup:](../avplayeritem/select%28__in_%29.md) on the current [AVPlayerItem](../avplayeritem.md).

## See Also

### Inspecting the media selection

- [selectedMediaOptionInMediaSelectionGroup:](selectedmediaoption%28in_%29.md): Returns the media selection option that’s currently selected in the specified group.
