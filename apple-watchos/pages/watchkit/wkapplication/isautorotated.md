> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/isautorotated](https://developer.apple.com/documentation/watchkit/wkapplication/isautorotated)

# isAutorotated (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.

## Declaration

```swift
var isAutorotated: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When you enable autorotation, watchOS instead keeps the interface awake and rotates the content, orienting it properly for the viewer.

For more information on enabling autorotation, see [isAutorotating](../wkextension/isautorotating.md).

## See Also

### Related Documentation

- [isAutorotating](../wkextension/isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [deviceOrientationDidChange()](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [isAutorotating](isautorotating.md): A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [globalTintColor](globaltintcolor.md): The watchOS app’s global tint color.

# autorotated (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAutorotated) BOOL autorotated;
```

<a id="Discussion"></a>

## Discussion

Normally, when a user rotates their wrist–for example, to show a watchOS app to another person–the watch is likely to interpret this motion as dropping the wrist and may put the app to sleep. When you enable autorotation, watchOS instead keeps the interface awake and rotates the content, orienting it properly for the viewer.

For more information on enabling autorotation, see [autorotating](../wkextension/isautorotating.md).

## See Also

### Related Documentation

- [autorotating](../wkextension/isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [deviceOrientationDidChange](../wkextensiondelegate/deviceorientationdidchange%28%29.md): Deprecated. Tells the delegate that the device’s orientation has changed.

### Managing the user interface

- [autorotating](isautorotating.md): A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [globalTintColor](globaltintcolor.md): The watchOS app’s global tint color.
