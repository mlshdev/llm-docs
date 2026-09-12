> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/selectedmediaoption(in:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/selectedmediaoption(in:))

# selectedMediaOption(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 11.0) · iPadOS 5.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Returns the media selection option that’s currently selected from the specified group.

> Use [currentMediaSelection](currentmediaselection.md) instead.

## Declaration

```swift
func selectedMediaOption(in mediaSelectionGroup: AVMediaSelectionGroup) -> AVMediaSelectionOption?
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the player item’s asset.

<a id="return-value"></a>

## Return Value

An instance of [AVMediaSelectionOption](../avmediaselectionoption.md) that describes the currently selected option in the group.

<a id="Discussion"></a>

## Discussion

If the value of the [allowsEmptySelection](../avmediaselectiongroup/allowsemptyselection.md) property of `mediaSelectionGroup` is [true](https://developer.apple.com/documentation/swift/true), the currently selected option in the group may be `nil`.

# selectedMediaOptionInMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 11.0) · iPadOS 5.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0)

Returns the media selection option that’s currently selected from the specified group.

> Use [currentMediaSelection](currentmediaselection.md) instead.

## Declaration

```objectivec
- (AVMediaSelectionOption *) selectedMediaOptionInMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the player item’s asset.

<a id="return-value"></a>

## Return Value

An instance of [AVMediaSelectionOption](../avmediaselectionoption.md) that describes the currently selected option in the group.

<a id="Discussion"></a>

## Discussion

If the value of the [allowsEmptySelection](../avmediaselectiongroup/allowsemptyselection.md) property of `mediaSelectionGroup` is [true](https://developer.apple.com/documentation/swift/true), the currently selected option in the group may be `nil`.
