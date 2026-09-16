> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacedevice/waterresistancerating

# waterResistanceRating (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The Apple Watch water-resistance rating.

## Declaration

```swift
var waterResistanceRating: WKWaterResistanceRating { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible water resistance ratings, see [WKWaterResistanceRating](../wkwaterresistancerating.md).

## See Also

### Accessing Water Resistance and Lock

- [WKWaterResistanceRating](../wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [isWaterLockEnabled](iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.
- [enableWaterLock()](enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.

# waterResistanceRating (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The Apple Watch water-resistance rating.

## Declaration

```objectivec
@property (nonatomic, readonly) WKWaterResistanceRating waterResistanceRating;
```

<a id="Discussion"></a>

## Discussion

For a list of possible water resistance ratings, see [WKWaterResistanceRating](../wkwaterresistancerating.md).

## See Also

### Accessing Water Resistance and Lock

- [WKWaterResistanceRating](../wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [waterLockEnabled](iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.
- [enableWaterLock](enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.
