> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontrollerdelegate](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontrollerdelegate)

# TVApplicationControllerDelegate (Swift)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A protocol used to observe and manage the different states of an application controller.

> Please use SwiftUI or UIKit

## Declaration

```swift
protocol TVApplicationControllerDelegate : NSObjectProtocol
```

## Topics

### Managing the App Controller

- [appController(\_:didFail:)](tvapplicationcontrollerdelegate/appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController(\_:didFinishLaunching:)](tvapplicationcontrollerdelegate/appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController(\_:didStop:)](tvapplicationcontrollerdelegate/appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController(\_:evaluateAppJavaScriptIn:)](tvapplicationcontrollerdelegate/appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.
- [player(for:)](tvapplicationcontrollerdelegate/player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the Delegate

- [delegate](tvapplicationcontroller/delegate.md): Deprecated. The delegate of the app controller object.

# TVApplicationControllerDelegate (Objective-C)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A protocol used to observe and manage the different states of an application controller.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@protocol TVApplicationControllerDelegate <NSObject>
```

## Topics

### Managing the App Controller

- [appController:didFailWithError:](tvapplicationcontrollerdelegate/appcontroller%28__didfail_%29.md): Deprecated. Tell the delegate the app controller failed due to an error.
- [appController:didFinishLaunchingWithOptions:](tvapplicationcontrollerdelegate/appcontroller%28__didfinishlaunching_%29.md): Deprecated. Tells the delegate the app controller has finished launching.
- [appController:didStopWithOptions:](tvapplicationcontrollerdelegate/appcontroller%28__didstop_%29.md): Deprecated. Tells the delegate the app has stopped for any reason.
- [appController:evaluateAppJavaScriptInContext:](tvapplicationcontrollerdelegate/appcontroller%28__evaluateappjavascriptin_%29.md): Deprecated. Tells the delegate to add JavaScript classes and objects.
- [playerForAppController:](tvapplicationcontrollerdelegate/player%28for_%29.md): Deprecated. Asks the delegate for a custom player object for a particular player bridge.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the Delegate

- [delegate](tvapplicationcontroller/delegate.md): Deprecated. The delegate of the app controller object.
