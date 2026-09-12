> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/iswaterlockenabled](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/iswaterlockenabled)

# isWaterLockEnabled (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.1+

A Boolean value that indicates whether the water lock is enabled.

## Declaration

```swift
var isWaterLockEnabled: Bool { get }
```

## See Also

### Accessing Water Resistance and Lock

- [waterResistanceRating](waterresistancerating.md): The Apple Watch water-resistance rating.
- [WKWaterResistanceRating](../wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [enableWaterLock()](enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.

# waterLockEnabled (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.1+

A Boolean value that indicates whether the water lock is enabled.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isWaterLockEnabled) BOOL waterLockEnabled;
```

## See Also

### Accessing Water Resistance and Lock

- [waterResistanceRating](waterresistancerating.md): The Apple Watch water-resistance rating.
- [WKWaterResistanceRating](../wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [enableWaterLock](enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.
