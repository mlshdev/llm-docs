> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/deviceorientationdidchange()](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/deviceorientationdidchange())

# deviceOrientationDidChange() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

Tells the delegate that the device’s orientation has changed.

## Declaration

```swift
optional func deviceOrientationDidChange()
```

<a id="Discussion"></a>

## Discussion

This method is called when the [WKInterfaceDevice](../wkinterfacedevice.md) object’s  [wristLocation](../wkinterfacedevice/wristlocation.md), [crownOrientation](../wkinterfacedevice/crownorientation.md), or [isAutorotated](../wkextension/isautorotated.md) properties change.

## See Also

### Related Documentation

- [isAutorotating](../wkextension/isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [isAutorotated](../wkextension/isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching()](applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive()](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive()](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground()](applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground()](applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.

# deviceOrientationDidChange (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

Tells the delegate that the device’s orientation has changed.

## Declaration

```objectivec
- (void) deviceOrientationDidChange;
```

<a id="Discussion"></a>

## Discussion

This method is called when the [WKInterfaceDevice](../wkinterfacedevice.md) object’s  [wristLocation](../wkinterfacedevice/wristlocation.md), [crownOrientation](../wkinterfacedevice/crownorientation.md), or [autorotated](../wkextension/isautorotated.md) properties change.

## See Also

### Related Documentation

- [autorotating](../wkextension/isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [autorotated](../wkextension/isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching](applicationdidfinishlaunching%28%29.md): Deprecated. Tells the delegate that the launch process is almost done and the extension is almost ready to run.
- [applicationDidBecomeActive](applicationdidbecomeactive%28%29.md): Deprecated. Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive](applicationwillresignactive%28%29.md): Deprecated. Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground](applicationwillenterforeground%28%29.md): Deprecated. Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground](applicationdidenterbackground%28%29.md): Deprecated. Tells the delegate that the app has transitioned from the foreground to the background.
