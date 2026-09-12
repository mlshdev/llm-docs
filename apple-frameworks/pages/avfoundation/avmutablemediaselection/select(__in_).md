> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemediaselection/select(_:in:)](https://developer.apple.com/documentation/avfoundation/avmutablemediaselection/select(_:in:))

# select(\_:in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Selects the media option in the specified media selection group.

## Declaration

```swift
func select(_ mediaSelectionOption: AVMediaSelectionOption?, in mediaSelectionGroup: AVMediaSelectionGroup)
```

## Parameters

- `mediaSelectionOption`: The media selection option to select.
- `mediaSelectionGroup`: The media selection group containing the specified media selection option.

<a id="Discussion"></a>

## Discussion

This method selects the [AVMediaSelectionOption](../avmediaselectionoption.md) in the specified [AVMediaSelectionGroup](../avmediaselectiongroup.md) and deselects all other options in that group. If the specified media selection option isn’t a member of the specified media selection group, no change in state will be made. If the media selection group’s [allowsEmptySelection](../avmediaselectiongroup/allowsemptyselection.md) property is set to [true](https://developer.apple.com/documentation/swift/true), you can pass `nil` for `mediaSelectionOption` argument to deselect all media selection options in the group.

# selectMediaOption:inMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Selects the media option in the specified media selection group.

## Declaration

```objectivec
- (void) selectMediaOption:(AVMediaSelectionOption *) mediaSelectionOption inMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionOption`: The media selection option to select.
- `mediaSelectionGroup`: The media selection group containing the specified media selection option.

<a id="Discussion"></a>

## Discussion

This method selects the [AVMediaSelectionOption](../avmediaselectionoption.md) in the specified [AVMediaSelectionGroup](../avmediaselectiongroup.md) and deselects all other options in that group. If the specified media selection option isn’t a member of the specified media selection group, no change in state will be made. If the media selection group’s [allowsEmptySelection](../avmediaselectiongroup/allowsemptyselection.md) property is set to [true](https://developer.apple.com/documentation/swift/true), you can pass `nil` for `mediaSelectionOption` argument to deselect all media selection options in the group.
