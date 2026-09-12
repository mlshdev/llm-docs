> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/allmediaselections](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/allmediaselections)

# allMediaSelections

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The available media selections for an asset.

## Declaration

```swift
static var allMediaSelections: AVAsyncProperty<Root, [AVMediaSelection]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading media selections

- [preferredMediaSelection](preferredmediaselection.md): Conforms when `Root` inherits `AVAsset`. The default media selections for the media selection groups of an asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](availablemediacharacteristicswithmediaselectionoptions.md): Conforms when `Root` inherits `AVAsset`. The media characteristics that provide media selection options.
- [loadMediaSelectionGroup(for:completionHandler:)](../avasset/loadmediaselectiongroup%28for_completionhandler_%29.md): Loads a media selection group that contains one or more options with the specified media characteristic.
