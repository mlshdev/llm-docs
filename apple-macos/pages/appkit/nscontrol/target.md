> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/target](https://developer.apple.com/documentation/appkit/nscontrol/target)

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The target object that receives action messages from the cell.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, the application follows the responder chain looking for an object that can respond to the message. See the description of the [NSActionCell](../nsactioncell.md) class for details.

## See Also

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction(\_:to:)](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendAction(on:)](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The target object that receives action messages from the cell.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is `nil`, the application follows the responder chain looking for an object that can respond to the message. See the description of the [NSActionCell](../nsactioncell.md) class for details.

## See Also

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [continuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction:to:](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendActionOn:](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.
