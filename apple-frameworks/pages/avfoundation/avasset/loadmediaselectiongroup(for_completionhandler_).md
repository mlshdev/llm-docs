> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/loadmediaselectiongroup(for:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avasset/loadmediaselectiongroup(for:completionhandler:))

# loadMediaSelectionGroup(for:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a media selection group that contains one or more options with the specified media characteristic.

## Declaration

```swift
func loadMediaSelectionGroup(for mediaCharacteristic: AVMediaCharacteristic, completionHandler: @escaping @Sendable (AVMediaSelectionGroup?, (any Error)?) -> Void)
```

```swift
func loadMediaSelectionGroup(for mediaCharacteristic: AVMediaCharacteristic) async throws -> AVMediaSelectionGroup?
```

## Parameters

- `mediaCharacteristic`: A media characteristic to load the available media selection options for. The supported characterisics are:

  - [audible](../avmediacharacteristic/audible.md) to return the group of available options for audio media in various languages and for various purposes, such as descriptive audio
  - [legible](../avmediacharacteristic/legible.md) to return the group of available options for subtitles in various languages and for various purposes
  - [visual](../avmediacharacteristic/visual.md) to return the group of available options for video media
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **mediaSelectionGroup**: The loaded media selection group, or `nil` if no group is available or if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading media selections

- [allMediaSelections](../avpartialasyncproperty/allmediaselections.md): Conforms when `Root` inherits `AVAsset`. The available media selections for an asset.
- [preferredMediaSelection](../avpartialasyncproperty/preferredmediaselection.md): Conforms when `Root` inherits `AVAsset`. The default media selections for the media selection groups of an asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](../avpartialasyncproperty/availablemediacharacteristicswithmediaselectionoptions.md): Conforms when `Root` inherits `AVAsset`. The media characteristics that provide media selection options.

# loadMediaSelectionGroupForMediaCharacteristic:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a media selection group that contains one or more options with the specified media characteristic.

## Declaration

```objectivec
- (void) loadMediaSelectionGroupForMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic completionHandler:(void (^)(AVMediaSelectionGroup *, NSError *)) completionHandler;
```

## Parameters

- `mediaCharacteristic`: A media characteristic to load the available media selection options for. The supported characterisics are:

  - [AVMediaCharacteristicAudible](../avmediacharacteristic/audible.md) to return the group of available options for audio media in various languages and for various purposes, such as descriptive audio
  - [AVMediaCharacteristicLegible](../avmediacharacteristic/legible.md) to return the group of available options for subtitles in various languages and for various purposes
  - [AVMediaCharacteristicVisual](../avmediacharacteristic/visual.md) to return the group of available options for video media
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **mediaSelectionGroup**: The loaded media selection group, or `nil` if no group is available or if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.
