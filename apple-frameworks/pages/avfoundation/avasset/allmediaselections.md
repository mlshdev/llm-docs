> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/allmediaselections](https://developer.apple.com/documentation/avfoundation/avasset/allmediaselections)

# allMediaSelections (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.13+ (deprecated in 13.0) · tvOS 11.0+ (deprecated in 16.0) · watchOS 4.0+ (deprecated in 9.0)

The array of available media selections for this asset.

> Load the value of [allMediaSelections](../avpartialasyncproperty/allmediaselections.md) asynchronously instead.

## Declaration

```swift
var allMediaSelections: [AVMediaSelection] { get }
```

# allMediaSelections (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The array of available media selections for this asset.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMediaSelection *> * allMediaSelections;
```

## See Also

### Accessing media selections

- [availableMediaCharacteristicsWithMediaSelectionOptions](availablemediacharacteristicswithmediaselectionoptions.md): Deprecated. An array of media characteristics for which a media selection option is available.
- [mediaSelectionGroupForMediaCharacteristic:](mediaselectiongroup%28formediacharacteristic_%29.md): Deprecated. Returns a media selection group that contains one or more options with the specified media characteristic.
