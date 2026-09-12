> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscene/interfacecontroller](https://developer.apple.com/documentation/carplay/cptemplateapplicationscene/interfacecontroller)

# interfaceController (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The controller that manages the scene’s user interface.

## Declaration

```swift
var interfaceController: CPInterfaceController { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the interface controller CarPlay creates when the scene connects, which you then use to manage your templates.

## See Also

### Accessing the Interface Controller

- [CPInterfaceController](../cpinterfacecontroller.md): A controller that manages the templates for constructing a scene’s user interface.

# interfaceController (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The controller that manages the scene’s user interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) CPInterfaceController * interfaceController;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the interface controller CarPlay creates when the scene connects, which you then use to manage your templates.

## See Also

### Accessing the Interface Controller

- [CPInterfaceController](../cpinterfacecontroller.md): A controller that manages the templates for constructing a scene’s user interface.
