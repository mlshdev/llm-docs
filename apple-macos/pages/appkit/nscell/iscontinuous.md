> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/iscontinuous](https://developer.apple.com/documentation/appkit/nscell/iscontinuous)

# isContinuous (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

## Declaration

```swift
var isContinuous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is YES, the cell’s action message is sent continuously during mouse tracking. In practice, the continuous delivery of action messages has meaning only for [NSActionCell](../nsactioncell.md) and its subclasses, which implement the target/action mechanism. Some [NSControl](../nscontrol.md) subclasses, notably [NSMatrix](../nsmatrix.md), send a default action to a default target when a cell doesn’t provide a target or action.

## See Also

### Managing the Target and Action

- [action](action.md): The action performed by the cell.
- [target](target.md): The object that receives the cell’s action messages.
- [sendAction(on:)](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

# continuous (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell sends its action message continuously during mouse tracking.

## Declaration

```objectivec
@property (getter=isContinuous) BOOL continuous;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is YES, the cell’s action message is sent continuously during mouse tracking. In practice, the continuous delivery of action messages has meaning only for [NSActionCell](../nsactioncell.md) and its subclasses, which implement the target/action mechanism. Some [NSControl](../nscontrol.md) subclasses, notably [NSMatrix](../nsmatrix.md), send a default action to a default target when a cell doesn’t provide a target or action.

## See Also

### Managing the Target and Action

- [action](action.md): The action performed by the cell.
- [target](target.md): The object that receives the cell’s action messages.
- [sendActionOn:](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.
