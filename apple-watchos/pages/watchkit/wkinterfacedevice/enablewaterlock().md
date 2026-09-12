> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/enablewaterlock()](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/enablewaterlock())

# enableWaterLock() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Disables the Apple Watch touch screen to prevent accidental taps while submerged.

## Declaration

```swift
func enableWaterLock()
```

<a id="Discussion"></a>

## Discussion

The following rules apply when using Water Lock:

- You must call the [enableWaterLock()](enablewaterlock%28%29.md) method from the main thread.
- You can only enable Water Lock when the app is running in the foreground during an active workout or location session.
- The app must be running on a supported device (the [WKInterfaceDevice](../wkinterfacedevice.md) object’s [waterResistanceRating](waterresistancerating.md) property must be [WKWaterResistanceRating.wr50](../wkwaterresistancerating/wr50.md)).
- Water Lock remains active until the user unlocks it. You can’t programmatically unlock the watch.

## See Also

### Accessing Water Resistance and Lock

- [waterResistanceRating](waterresistancerating.md): The Apple Watch water-resistance rating.
- [WKWaterResistanceRating](../wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [isWaterLockEnabled](iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.

# enableWaterLock (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Disables the Apple Watch touch screen to prevent accidental taps while submerged.

## Declaration

```objectivec
- (void) enableWaterLock;
```

<a id="Discussion"></a>

## Discussion

The following rules apply when using Water Lock:

- You must call the [enableWaterLock](enablewaterlock%28%29.md) method from the main thread.
- You can only enable Water Lock when the app is running in the foreground during an active workout or location session.
- The app must be running on a supported device (the [WKInterfaceDevice](../wkinterfacedevice.md) object’s [waterResistanceRating](waterresistancerating.md) property must be [WKWaterResistanceRatingWR50](../wkwaterresistancerating/wr50.md)).
- Water Lock remains active until the user unlocks it. You can’t programmatically unlock the watch.

## See Also

### Accessing Water Resistance and Lock

- [waterResistanceRating](waterresistancerating.md): The Apple Watch water-resistance rating.
- [WKWaterResistanceRating](../wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [waterLockEnabled](iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.
