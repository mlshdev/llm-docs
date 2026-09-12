> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/isautorotated](https://developer.apple.com/documentation/watchkit/wkextension/isautorotated)

# isAutorotated (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.2+ (deprecated in 9.2)

A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.

## Declaration

```swift
var isAutorotated: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When autorotation is enabled, watchOS instead keeps the interface awake and rotates the content so that it is oriented properly for the viewer.

For more information on enabling autorotation, see [isAutorotating](isautorotating.md).

## See Also

### Related Documentation

- [deviceOrientationDidChange()](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [isAutorotating](isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [globalTintColor](globaltintcolor.md): Deprecated. The watchOS app’s global tint color.
- [enableWaterLock()](enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.

# autorotated (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.2+ (deprecated in 9.2)

A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAutorotated) BOOL autorotated;
```

<a id="Discussion"></a>

## Discussion

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When autorotation is enabled, watchOS instead keeps the interface awake and rotates the content so that it is oriented properly for the viewer.

For more information on enabling autorotation, see [autorotating](isautorotating.md).

## See Also

### Related Documentation

- [deviceOrientationDidChange](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [autorotating](isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [globalTintColor](globaltintcolor.md): Deprecated. The watchOS app’s global tint color.
- [enableWaterLock](enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.
