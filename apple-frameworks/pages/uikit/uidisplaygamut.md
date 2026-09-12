> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidisplaygamut](https://developer.apple.com/documentation/uikit/uidisplaygamut)

# UIDisplayGamut (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants that indicate the gamut of the current display.

## Declaration

```swift
enum UIDisplayGamut
```

## Topics

### Constants

- [UIDisplayGamut.unspecified](uidisplaygamut/unspecified.md): An unspecified gamut value.
- [UIDisplayGamut.SRGB](uidisplaygamut/srgb.md): The sRGB display gamut.
- [UIDisplayGamut.P3](uidisplaygamut/p3.md): The P3 display gamut.

### Initializers

- [init(rawValue:)](uidisplaygamut/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving display-related traits

- [displayScale](uitraitcollection/displayscale.md): The display scale of the trait collection.
- [displayGamut](uitraitcollection/displaygamut.md): The gamut of the current display.

# UIDisplayGamut (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants that indicate the gamut of the current display.

## Declaration

```objectivec
enum UIDisplayGamut : NSInteger;
```

## Topics

### Constants

- [UIDisplayGamutUnspecified](uidisplaygamut/unspecified.md): An unspecified gamut value.
- [UIDisplayGamutSRGB](uidisplaygamut/srgb.md): The sRGB display gamut.
- [UIDisplayGamutP3](uidisplaygamut/p3.md): The P3 display gamut.

## See Also

### Retrieving display-related traits

- [displayScale](uitraitcollection/displayscale.md): The display scale of the trait collection.
- [displayGamut](uitraitcollection/displaygamut.md): The gamut of the current display.
