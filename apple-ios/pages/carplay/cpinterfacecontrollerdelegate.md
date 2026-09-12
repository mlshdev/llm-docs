> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontrollerdelegate](https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate)

# CPInterfaceControllerDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The interface that an object implements to serve as a delegate to an interface controller.

## Declaration

```swift
@MainActor protocol CPInterfaceControllerDelegate : NSObjectProtocol
```

## Topics

### Handling Display Events

- [templateWillAppear(\_:animated:)](cpinterfacecontrollerdelegate/templatewillappear%28__animated_%29.md): Tells the delegate that the template will appear onscreen.
- [templateDidAppear(\_:animated:)](cpinterfacecontrollerdelegate/templatedidappear%28__animated_%29.md): Tells the delegate that the template did appear onscreen.
- [templateWillDisappear(\_:animated:)](cpinterfacecontrollerdelegate/templatewilldisappear%28__animated_%29.md): Tells the delegate that the template will disappear from the screen.
- [templateDidDisappear(\_:animated:)](cpinterfacecontrollerdelegate/templatediddisappear%28__animated_%29.md): Tells the delegate that the template did disappear from the screen.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configuring the Interface Controller

- [delegate](cpinterfacecontroller/delegate.md): An object that serves as the delegate to the interface controller.
- [prefersDarkUserInterfaceStyle](cpinterfacecontroller/prefersdarkuserinterfacestyle.md): A Boolean value that determines whether the system draws the user interface in Dark Mode.
- [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.

# CPInterfaceControllerDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The interface that an object implements to serve as a delegate to an interface controller.

## Declaration

```objectivec
@protocol CPInterfaceControllerDelegate <NSObject>
```

## Topics

### Handling Display Events

- [templateWillAppear:animated:](cpinterfacecontrollerdelegate/templatewillappear%28__animated_%29.md): Tells the delegate that the template will appear onscreen.
- [templateDidAppear:animated:](cpinterfacecontrollerdelegate/templatedidappear%28__animated_%29.md): Tells the delegate that the template did appear onscreen.
- [templateWillDisappear:animated:](cpinterfacecontrollerdelegate/templatewilldisappear%28__animated_%29.md): Tells the delegate that the template will disappear from the screen.
- [templateDidDisappear:animated:](cpinterfacecontrollerdelegate/templatediddisappear%28__animated_%29.md): Tells the delegate that the template did disappear from the screen.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configuring the Interface Controller

- [delegate](cpinterfacecontroller/delegate.md): An object that serves as the delegate to the interface controller.
- [prefersDarkUserInterfaceStyle](cpinterfacecontroller/prefersdarkuserinterfacestyle.md): A Boolean value that determines whether the system draws the user interface in Dark Mode.
- [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.
