> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardsegue/sourcecontroller](https://developer.apple.com/documentation/appkit/nsstoryboardsegue/sourcecontroller)

# sourceController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The starting/containing view controller or window controller for the storyboard segue.

## Declaration

```swift
var sourceController: Any { get }
```

<a id="Discussion"></a>

## Discussion

In your storyboard segue subclass, you can read this property to get the starting/containing view controller or window controller for the segue.

## See Also

### Inspecting a Storyboard Segue

- [destinationController](destinationcontroller.md): The ending/contained view controller or window controller for the storyboard segue.
- [identifier](identifier-swift.property.md): An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.
- [NSStoryboardSegue.Identifier](identifier-swift.typealias.md)

# sourceController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The starting/containing view controller or window controller for the storyboard segue.

## Declaration

```objectivec
@property (strong, readonly) id sourceController;
```

<a id="Discussion"></a>

## Discussion

In your storyboard segue subclass, you can read this property to get the starting/containing view controller or window controller for the segue.

## See Also

### Inspecting a Storyboard Segue

- [destinationController](destinationcontroller.md): The ending/contained view controller or window controller for the storyboard segue.
- [identifier](identifier-swift.property.md): An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.
- [NSStoryboardSegueIdentifier](identifier-swift.typealias.md)
