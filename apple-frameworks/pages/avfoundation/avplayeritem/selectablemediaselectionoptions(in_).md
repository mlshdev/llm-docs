> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/selectablemediaselectionoptions(in:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/selectablemediaselectionoptions(in:))

# selectableMediaSelectionOptions(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the media selection options in the specified media selection group that can produce content.

## Declaration

```swift
func selectableMediaSelectionOptions(in mediaSelectionGroup: AVMediaSelectionGroup) -> [AVMediaSelectionOption]
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the receiver’s asset.

<a id="return-value"></a>

## Return Value

An array containing the media selection options from the group that can produce content. Options in the group that are not in this array can still be selected, but will produce no content.

<a id="discussion"></a>

## Discussion

Some media selection options depend on other options to produce content. For example, a subtitle option generated via audio transcription may require that the source audio option is currently selected. This method filters the options in the specified group to only those that can produce content given the current state of the player item’s media selection.

# selectableMediaSelectionOptionsInMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the media selection options in the specified media selection group that can produce content.

## Declaration

```objectivec
- (NSArray<AVMediaSelectionOption *> *) selectableMediaSelectionOptionsInMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: A media selection group obtained from the receiver’s asset.

<a id="return-value"></a>

## Return Value

An array containing the media selection options from the group that can produce content. Options in the group that are not in this array can still be selected, but will produce no content.

<a id="discussion"></a>

## Discussion

Some media selection options depend on other options to produce content. For example, a subtitle option generated via audio transcription may require that the source audio option is currently selected. This method filters the options in the specified group to only those that can produce content given the current state of the player item’s media selection.
