> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/hasmediacharacteristic(_:)](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/hasmediacharacteristic(_:))

# hasMediaCharacteristic(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the receiver has media with the given media characteristic.

## Declaration

```swift
func hasMediaCharacteristic(_ mediaCharacteristic: AVMediaCharacteristic) -> Bool
```

## Parameters

- `mediaCharacteristic`: The media characteristic of interest, for example, [visual](../avmediacharacteristic/visual.md), [audible](../avmediacharacteristic/audible.md), or [legible](../avmediacharacteristic/legible.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the media selection option has media with mediaCharacteristic, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing media information

- [mediaType](mediatype.md): The media type of the media data.
- [mediaSubTypes](mediasubtypes.md): The media sub-types of the media data associated with the option.

# hasMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the receiver has media with the given media characteristic.

## Declaration

```objectivec
- (BOOL) hasMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic of interest, for example, [AVMediaCharacteristicVisual](../avmediacharacteristic/visual.md), [AVMediaCharacteristicAudible](../avmediacharacteristic/audible.md), or [AVMediaCharacteristicLegible](../avmediacharacteristic/legible.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the media selection option has media with mediaCharacteristic, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing media information

- [mediaType](mediatype.md): The media type of the media data.
- [mediaSubTypes](mediasubtypes.md): The media sub-types of the media data associated with the option.
