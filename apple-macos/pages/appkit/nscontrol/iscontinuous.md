> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/iscontinuous](https://developer.apple.com/documentation/appkit/nscontrol/iscontinuous)

# isContinuous (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.

## Declaration

```swift
var isContinuous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the action message is sent continuously; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [target](target.md): The target object that receives action messages from the cell.
- [sendAction(\_:to:)](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendAction(on:)](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

# continuous (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.

## Declaration

```objectivec
@property (getter=isContinuous) BOOL continuous;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the action message is sent continuously; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Implementing the Target-Action Mechanism

- [action](action.md): The default action-message selector associated with the control.
- [target](target.md): The target object that receives action messages from the cell.
- [sendAction:to:](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendActionOn:](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.
