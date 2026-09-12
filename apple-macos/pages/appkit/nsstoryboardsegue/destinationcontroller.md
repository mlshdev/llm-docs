> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardsegue/destinationcontroller](https://developer.apple.com/documentation/appkit/nsstoryboardsegue/destinationcontroller)

# destinationController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The ending/contained view controller or window controller for the storyboard segue.

## Declaration

```swift
var destinationController: Any { get }
```

<a id="Discussion"></a>

## Discussion

In your storyboard segue subclass, you can read this property to get the ending/contained view controller or window controller for the segue. This property is essential if you override the [prepare(for:sender:)](../nssegueperforming/prepare%28for_sender_%29.md) method of the [NSSeguePerforming](../nssegueperforming.md) protocol, to let you pass configuration data to the ending/contained controller.

## See Also

### Inspecting a Storyboard Segue

- [sourceController](sourcecontroller.md): The starting/containing view controller or window controller for the storyboard segue.
- [identifier](identifier-swift.property.md): An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.
- [NSStoryboardSegue.Identifier](identifier-swift.typealias.md)

# destinationController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The ending/contained view controller or window controller for the storyboard segue.

## Declaration

```objectivec
@property (strong, readonly) id destinationController;
```

<a id="Discussion"></a>

## Discussion

In your storyboard segue subclass, you can read this property to get the ending/contained view controller or window controller for the segue. This property is essential if you override the [prepareForSegue:sender:](../nssegueperforming/prepare%28for_sender_%29.md) method of the [NSSeguePerforming](../nssegueperforming.md) protocol, to let you pass configuration data to the ending/contained controller.

## See Also

### Inspecting a Storyboard Segue

- [sourceController](sourcecontroller.md): The starting/containing view controller or window controller for the storyboard segue.
- [identifier](identifier-swift.property.md): An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.
- [NSStoryboardSegueIdentifier](identifier-swift.typealias.md)
