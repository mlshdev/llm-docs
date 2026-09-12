> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/isautorotating](https://developer.apple.com/documentation/watchkit/wkapplication/isautorotating)

# isAutorotating (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.

## Declaration

```swift
var isAutorotating: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to [false](https://developer.apple.com/documentation/swift/false).

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When you enable autorotation, watchOS instead keeps the interface awake and rotates the content, orienting it properly for the viewer.

Don’t enable autorotation indefinitely. Instead, enable it selectively on a specific interface controller that the user is likely to share. For example, in the interface controller’s [willActivate()](../wkinterfacecontroller/willactivate%28%29.md) method, set this property to [true](https://developer.apple.com/documentation/swift/true). In the [didDeactivate()](../wkinterfacecontroller/diddeactivate%28%29.md) method, set it back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [isAutorotated](../wkextension/isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [deviceOrientationDidChange()](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [isAutorotated](isautorotated.md): A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.
- [globalTintColor](globaltintcolor.md): The watchOS app’s global tint color.

# autorotating (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.

## Declaration

```objectivec
@property (nonatomic, getter=isAutorotating) BOOL autorotating;
```

<a id="Discussion"></a>

## Discussion

This property defaults to [false](https://developer.apple.com/documentation/swift/false).

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When you enable autorotation, watchOS instead keeps the interface awake and rotates the content, orienting it properly for the viewer.

Don’t enable autorotation indefinitely. Instead, enable it selectively on a specific interface controller that the user is likely to share. For example, in the interface controller’s [willActivate](../wkinterfacecontroller/willactivate%28%29.md) method, set this property to [true](https://developer.apple.com/documentation/swift/true). In the [didDeactivate](../wkinterfacecontroller/diddeactivate%28%29.md) method, set it back to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [autorotated](../wkextension/isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [deviceOrientationDidChange](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [autorotated](isautorotated.md): A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.
- [globalTintColor](globaltintcolor.md): The watchOS app’s global tint color.
