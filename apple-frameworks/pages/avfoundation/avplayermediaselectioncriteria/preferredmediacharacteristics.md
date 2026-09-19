> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/preferredmediacharacteristics

# preferredMediaCharacteristics (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of media characteristics in preferred order.

## Declaration

```swift
var preferredMediaCharacteristics: [AVMediaCharacteristic]? { get }
```

## See Also

### Retrieving selection criteria settings

- [preferredLanguages](preferredlanguages.md): An array of language identifiers in preferred order.
- [principalMediaCharacteristics](principalmediacharacteristics.md): An array of media characteristics that are essential to select when choosing media with a particular characteristic.

# preferredMediaCharacteristics (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of media characteristics in preferred order.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * preferredMediaCharacteristics;
```

## See Also

### Retrieving selection criteria settings

- [preferredLanguages](preferredlanguages.md): An array of language identifiers in preferred order.
- [principalMediaCharacteristics](principalmediacharacteristics.md): An array of media characteristics that are essential to select when choosing media with a particular characteristic.
