> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkwaterresistancerating](https://developer.apple.com/documentation/watchkit/wkwaterresistancerating)

# WKWaterResistanceRating (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 3.0+

Values indicating the water-resistance rating.

## Declaration

```swift
enum WKWaterResistanceRating
```

## Topics

### Enumeration Cases

- [WKWaterResistanceRating.ipx7](wkwaterresistancerating/ipx7.md): A water-resistance rating of IPX7.
- [WKWaterResistanceRating.wr50](wkwaterresistancerating/wr50.md): A water-resistance rating of 50 meters.
- [WKWaterResistanceRating.wr100](wkwaterresistancerating/wr100.md)

### Initializers

- [init(rawValue:)](wkwaterresistancerating/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Water Resistance and Lock

- [waterResistanceRating](wkinterfacedevice/waterresistancerating.md): The Apple Watch water-resistance rating.
- [isWaterLockEnabled](wkinterfacedevice/iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.
- [enableWaterLock()](wkinterfacedevice/enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.

# WKWaterResistanceRating (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 3.0+

Values indicating the water-resistance rating.

## Declaration

```objectivec
enum WKWaterResistanceRating : NSInteger;
```

## Topics

### Enumeration Cases

- [WKWaterResistanceRatingIPX7](wkwaterresistancerating/ipx7.md): A water-resistance rating of IPX7.
- [WKWaterResistanceRatingWR50](wkwaterresistancerating/wr50.md): A water-resistance rating of 50 meters.
- [WKWaterResistanceRatingWR100](wkwaterresistancerating/wr100.md)

## See Also

### Accessing Water Resistance and Lock

- [waterResistanceRating](wkinterfacedevice/waterresistancerating.md): The Apple Watch water-resistance rating.
- [waterLockEnabled](wkinterfacedevice/iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.
- [enableWaterLock](wkinterfacedevice/enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.
