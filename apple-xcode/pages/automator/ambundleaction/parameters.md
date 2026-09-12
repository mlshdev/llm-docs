> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/ambundleaction/parameters](https://developer.apple.com/documentation/automator/ambundleaction/parameters)

# parameters (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

The action’s parameters.

## Declaration

```swift
var parameters: NSMutableDictionary? { get set }
```

<a id="Discussion"></a>

## Discussion

The parameters of an action reflect the choices made and values entered in the action’s user interface. Keys in the parameters dictionary identify specific user-interface objects. If an action uses the Cocoa bindings mechanism, the parameters of an [AMBundleAction](../ambundleaction.md) object are automatically set.

## See Also

### Managing Action Properties

- [bundle](bundle.md): The action’s bundle object.
- [hasView](hasview.md): A Boolean value that indicates whether the action has a view associated with it.
- [view](view.md): The action’s view object.

# parameters (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

The action’s parameters.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSMutableDictionary<NSString *,id> * parameters;
```

<a id="Discussion"></a>

## Discussion

The parameters of an action reflect the choices made and values entered in the action’s user interface. Keys in the parameters dictionary identify specific user-interface objects. If an action uses the Cocoa bindings mechanism, the parameters of an [AMBundleAction](../ambundleaction.md) object are automatically set.

## See Also

### Managing Action Properties

- [bundle](bundle.md): The action’s bundle object.
- [hasView](hasview.md): A Boolean value that indicates whether the action has a view associated with it.
- [view](view.md): The action’s view object.
