> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/delegate](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/delegate)

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that serves as the delegate to the interface controller.

## Declaration

```swift
weak var delegate: (any CPInterfaceControllerDelegate)? { get set }
```

## See Also

### Configuring the Interface Controller

- [CPInterfaceControllerDelegate](../cpinterfacecontrollerdelegate.md): The interface that an object implements to serve as a delegate to an interface controller.
- [prefersDarkUserInterfaceStyle](prefersdarkuserinterfacestyle.md): A Boolean value that determines whether the system draws the user interface in Dark Mode.
- [setRootTemplate(\_:animated:completion:)](setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that serves as the delegate to the interface controller.

## Declaration

```objectivec
@property (nonatomic, weak) id<CPInterfaceControllerDelegate> delegate;
```

## See Also

### Configuring the Interface Controller

- [CPInterfaceControllerDelegate](../cpinterfacecontrollerdelegate.md): The interface that an object implements to serve as a delegate to an interface controller.
- [prefersDarkUserInterfaceStyle](prefersdarkuserinterfacestyle.md): A Boolean value that determines whether the system draws the user interface in Dark Mode.
- [setRootTemplate:animated:completion:](setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.
