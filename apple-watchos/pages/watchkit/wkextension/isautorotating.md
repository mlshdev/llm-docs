> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/isautorotating](https://developer.apple.com/documentation/watchkit/wkextension/isautorotating)

# isAutorotating (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.

## Declaration

```swift
var isAutorotating: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false).

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When autorotation is enabled, watchOS instead keeps the interface awake and rotates the content so that it is oriented properly for the viewer.

Do not enable autorotation indefinitely. Instead, enable it selectively on a specific interface controller that the user is likely to share. For example, in the interface controller’s [willActivate()](../wkinterfacecontroller/willactivate%28%29.md) method, set this property to [true](https://developer.apple.com/documentation/swift/true). In the [didDeactivate()](../wkinterfacecontroller/diddeactivate%28%29.md) method, set it back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [deviceOrientationDidChange()](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [isAutorotated](isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [globalTintColor](globaltintcolor.md): Deprecated. The watchOS app’s global tint color.
- [enableWaterLock()](enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.

# autorotating (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.

## Declaration

```objectivec
@property (nonatomic, getter=isAutorotating) BOOL autorotating;
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false).

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When autorotation is enabled, watchOS instead keeps the interface awake and rotates the content so that it is oriented properly for the viewer.

Do not enable autorotation indefinitely. Instead, enable it selectively on a specific interface controller that the user is likely to share. For example, in the interface controller’s [willActivate](../wkinterfacecontroller/willactivate%28%29.md) method, set this property to [true](https://developer.apple.com/documentation/swift/true). In the [didDeactivate](../wkinterfacecontroller/diddeactivate%28%29.md) method, set it back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [deviceOrientationDidChange](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [autorotated](isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [globalTintColor](globaltintcolor.md): Deprecated. The watchOS app’s global tint color.
- [enableWaterLock](enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.
