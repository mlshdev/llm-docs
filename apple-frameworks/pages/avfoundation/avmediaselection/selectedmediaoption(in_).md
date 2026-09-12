> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselection/selectedmediaoption(in:)](https://developer.apple.com/documentation/avfoundation/avmediaselection/selectedmediaoption(in:))

# selectedMediaOption(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the media selection option that’s currently selected in the specified group.

## Declaration

```swift
func selectedMediaOption(in mediaSelectionGroup: AVMediaSelectionGroup) -> AVMediaSelectionOption?
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the associated asset.

<a id="return-value"></a>

## Return Value

The currently selected [AVMediaSelectionOption](../avmediaselectionoption.md). The return value may be `nil`.

<a id="Discussion"></a>

## Discussion

This method returns the currently selected [AVMediaSelectionOption](../avmediaselectionoption.md) in the specified [AVMediaSelectionGroup](../avmediaselectiongroup.md), but may return `nil` if media selection group’s [allowsEmptySelection](../avmediaselectiongroup/allowsemptyselection.md) is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Inspecting the media selection

- [mediaSelectionCriteriaCanBeAppliedAutomatically(to:)](mediaselectioncriteriacanbeappliedautomatically%28to_%29.md): Indicates whether the specified media selection group is subject to automatic media selection.

# selectedMediaOptionInMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the media selection option that’s currently selected in the specified group.

## Declaration

```objectivec
- (AVMediaSelectionOption *) selectedMediaOptionInMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the associated asset.

<a id="return-value"></a>

## Return Value

The currently selected [AVMediaSelectionOption](../avmediaselectionoption.md). The return value may be `nil`.

<a id="Discussion"></a>

## Discussion

This method returns the currently selected [AVMediaSelectionOption](../avmediaselectionoption.md) in the specified [AVMediaSelectionGroup](../avmediaselectiongroup.md), but may return `nil` if media selection group’s [allowsEmptySelection](../avmediaselectiongroup/allowsemptyselection.md) is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Inspecting the media selection

- [mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup:](mediaselectioncriteriacanbeappliedautomatically%28to_%29.md): Indicates whether the specified media selection group is subject to automatic media selection.
