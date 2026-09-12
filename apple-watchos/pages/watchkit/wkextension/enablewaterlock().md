> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/enablewaterlock()](https://developer.apple.com/documentation/watchkit/wkextension/enablewaterlock())

# enableWaterLock() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+ (deprecated in 6.1)

Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.

> Use the [WKInterfaceDevice](../wkinterfacedevice.md) class’s [enableWaterLock()](../wkinterfacedevice/enablewaterlock%28%29.md) method instead.

## Declaration

```swift
func enableWaterLock()
```

<a id="Discussion"></a>

## Discussion

The following rules apply when using Water Lock:

- You must call the [enableWaterLock()](../wkinterfacedevice/enablewaterlock%28%29.md) method from the main thread.
- You can only enable Water Lock when the app is running in the foreground during an active workout or location session.
- The app must be running on a supported device (the [WKInterfaceDevice](../wkinterfacedevice.md) object’s [waterResistanceRating](../wkinterfacedevice/waterresistancerating.md) property must be set to [WKWaterResistanceRating.wr50](../wkwaterresistancerating/wr50.md)).
- Water Lock remains active until the user unlocks it. You can’t programmatically unlock the watch.

## See Also

### Managing the user interface

- [isAutorotating](isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [isAutorotated](isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [globalTintColor](globaltintcolor.md): Deprecated. The watchOS app’s global tint color.

# enableWaterLock (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+ (deprecated in 6.1)

Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.

> Use the [WKInterfaceDevice](../wkinterfacedevice.md) class’s [enableWaterLock](../wkinterfacedevice/enablewaterlock%28%29.md) method instead.

## Declaration

```objectivec
- (void) enableWaterLock;
```

<a id="Discussion"></a>

## Discussion

The following rules apply when using Water Lock:

- You must call the [enableWaterLock](../wkinterfacedevice/enablewaterlock%28%29.md) method from the main thread.
- You can only enable Water Lock when the app is running in the foreground during an active workout or location session.
- The app must be running on a supported device (the [WKInterfaceDevice](../wkinterfacedevice.md) object’s [waterResistanceRating](../wkinterfacedevice/waterresistancerating.md) property must be set to [WKWaterResistanceRatingWR50](../wkwaterresistancerating/wr50.md)).
- Water Lock remains active until the user unlocks it. You can’t programmatically unlock the watch.

## See Also

### Managing the user interface

- [autorotating](isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [autorotated](isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [globalTintColor](globaltintcolor.md): Deprecated. The watchOS app’s global tint color.
