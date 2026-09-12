> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/accessorycontrollers](https://developer.apple.com/documentation/appkit/nspagelayout/accessorycontrollers)

# accessoryControllers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of accessory view controllers belonging to the page layout panel.

## Declaration

```swift
var accessoryControllers: [NSViewController] { get }
```

<a id="Discussion"></a>

## Discussion

The `NSViewController` instances representing the accessory view controllers belonging to the receiver.

## See Also

### Customizing the page setup dialog

- [addAccessoryController(\_:)](addaccessorycontroller%28__%29.md): Adds the specified controller of an accessory view to be presented in the page setup panel.
- [removeAccessoryController(\_:)](removeaccessorycontroller%28__%29.md): Removes the specified controller of an accessory view.

# accessoryControllers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of accessory view controllers belonging to the page layout panel.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSViewController *> * accessoryControllers;
```

<a id="Discussion"></a>

## Discussion

The `NSViewController` instances representing the accessory view controllers belonging to the receiver.

## See Also

### Customizing the page setup dialog

- [addAccessoryController:](addaccessorycontroller%28__%29.md): Adds the specified controller of an accessory view to be presented in the page setup panel.
- [removeAccessoryController:](removeaccessorycontroller%28__%29.md): Removes the specified controller of an accessory view.
