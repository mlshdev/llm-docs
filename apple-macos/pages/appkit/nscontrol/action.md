> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/action](https://developer.apple.com/documentation/appkit/nscontrol/action)

# action (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The default action-message selector associated with the control.

## Declaration

```swift
var action: Selector? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the action message selector of the receiver’s cell. Controls that support multiple cells (such as `NSMatrix` and `NSForm`) must supply the appropriate action-message selector in this property. Specify `NULL` to prevent action messages from being sent to the receiver’s target.

If you want the action-message selector for a control that has multiple cells, it is better to get the selector directly from the cell’s own `action` property.

## See Also

### Implementing the Target-Action Mechanism

- [target](target.md): The target object that receives action messages from the cell.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction(\_:to:)](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendAction(on:)](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

# action (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The default action-message selector associated with the control.

## Declaration

```objectivec
@property (nullable) SEL action;
```

<a id="Discussion"></a>

## Discussion

This property contains the action message selector of the receiver’s cell. Controls that support multiple cells (such as `NSMatrix` and `NSForm`) must supply the appropriate action-message selector in this property. Specify `NULL` to prevent action messages from being sent to the receiver’s target.

If you want the action-message selector for a control that has multiple cells, it is better to get the selector directly from the cell’s own `action` property.

## See Also

### Implementing the Target-Action Mechanism

- [target](target.md): The target object that receives action messages from the cell.
- [continuous](iscontinuous.md): A Boolean value indicating whether the receiver’s cell sends its action message continuously to its target during mouse tracking.
- [sendAction:to:](sendaction%28__to_%29.md): Causes the specified action to be sent to the target.
- [sendActionOn:](sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.
