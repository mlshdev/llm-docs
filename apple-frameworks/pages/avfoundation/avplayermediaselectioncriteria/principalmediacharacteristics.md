> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayermediaselectioncriteria/principalmediacharacteristics](https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/principalmediacharacteristics)

# principalMediaCharacteristics (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An array of media characteristics that are essential to select when choosing media with a particular characteristic.

## Declaration

```swift
var principalMediaCharacteristics: [AVMediaCharacteristic]? { get }
```

<a id="Discussion"></a>

## Discussion

If no option matches the principal media characteristics, the system chooses the default option in the group as the best match.

When making automatic selections, a player item treats principal media characteristics as criteria that supersede language preferences and preferred media characteristics.

> **Important**

>  Use principal media characteristics with caution. It’s typical to support accessibility features using a combination of language preferences and preferred characteristics, and not using principal media characteristics.

## See Also

### Retrieving selection criteria settings

- [preferredLanguages](preferredlanguages.md): An array of language identifiers in preferred order.
- [preferredMediaCharacteristics](preferredmediacharacteristics.md): An array of media characteristics in preferred order.

# principalMediaCharacteristics (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An array of media characteristics that are essential to select when choosing media with a particular characteristic.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSString *> * principalMediaCharacteristics;
```

<a id="Discussion"></a>

## Discussion

If no option matches the principal media characteristics, the system chooses the default option in the group as the best match.

When making automatic selections, a player item treats principal media characteristics as criteria that supersede language preferences and preferred media characteristics.

> **Important**

>  Use principal media characteristics with caution. It’s typical to support accessibility features using a combination of language preferences and preferred characteristics, and not using principal media characteristics.

## See Also

### Retrieving selection criteria settings

- [preferredLanguages](preferredlanguages.md): An array of language identifiers in preferred order.
- [preferredMediaCharacteristics](preferredmediacharacteristics.md): An array of media characteristics in preferred order.
