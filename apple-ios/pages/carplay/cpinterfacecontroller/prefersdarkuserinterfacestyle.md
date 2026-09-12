> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/prefersdarkuserinterfacestyle](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/prefersdarkuserinterfacestyle)

# prefersDarkUserInterfaceStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the system draws the user interface in Dark Mode.

## Declaration

```swift
var prefersDarkUserInterfaceStyle: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To adopt the dark user interface style, set this value to [true](https://developer.apple.com/documentation/swift/true) before you provide the root template or push any templates. The default value is [false](https://developer.apple.com/documentation/swift/false), which allows templates to change between light and dark styles.

## See Also

### Configuring the Interface Controller

- [delegate](delegate.md): An object that serves as the delegate to the interface controller.
- [CPInterfaceControllerDelegate](../cpinterfacecontrollerdelegate.md): The interface that an object implements to serve as a delegate to an interface controller.
- [setRootTemplate(\_:animated:completion:)](setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.

# prefersDarkUserInterfaceStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the system draws the user interface in Dark Mode.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL prefersDarkUserInterfaceStyle;
```

<a id="Discussion"></a>

## Discussion

To adopt the dark user interface style, set this value to [true](https://developer.apple.com/documentation/swift/true) before you provide the root template or push any templates. The default value is [false](https://developer.apple.com/documentation/swift/false), which allows templates to change between light and dark styles.

## See Also

### Configuring the Interface Controller

- [delegate](delegate.md): An object that serves as the delegate to the interface controller.
- [CPInterfaceControllerDelegate](../cpinterfacecontrollerdelegate.md): The interface that an object implements to serve as a delegate to an interface controller.
- [setRootTemplate:animated:completion:](setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.
