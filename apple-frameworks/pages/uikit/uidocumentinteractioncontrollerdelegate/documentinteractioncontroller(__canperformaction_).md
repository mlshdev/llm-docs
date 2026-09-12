> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontroller(_:canperformaction:)](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate/documentinteractioncontroller(_:canperformaction:))

# documentInteractionController(\_:canPerformAction:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 6.0) · iPadOS 3.2+ (deprecated in 6.0) · Mac Catalyst 3.2+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0)

Called when a document interaction controller needs to know whether the specified action can be performed on the associated document.

> Apps should use [UIActivityViewController](../uiactivityviewcontroller.md) for actions.

## Declaration

```swift
optional func documentInteractionController(_ controller: UIDocumentInteractionController, canPerformAction action: Selector?) -> Bool
```

## Parameters

- `controller`: The document interaction controller managing an associated document.
- `action`: The selector representing the action in question.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified action is supported for the associated document or [false](https://developer.apple.com/documentation/swift/false) if it is not. If you do not implement this method, the return value is assumed to be [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When building the options menu (invoked, for example, by the user performing a long press gesture), a document interaction controller calls this method to find out if your app can perform various actions. If you implement this method for a given action, you must also implement the [documentInteractionController(\_:performAction:)](documentinteractioncontroller%28__performaction_%29.md) method for that action.

The supported `action` selectors for this method are `copy:` and `print:`. (The `print:` selector is available in iOS 4.2 and later. Printing is supported only on devices that support multitasking.)

For each action that you implement in the [documentInteractionController(\_:performAction:)](documentinteractioncontroller%28__performaction_%29.md) delegate method, return [true](https://developer.apple.com/documentation/swift/true) from this method if that action is available for the document.

## See Also

### Deprecated

- [documentInteractionController(\_:performAction:)](documentinteractioncontroller%28__performaction_%29.md): Deprecated. Called when a document interaction controller wants its delegate to perform a specified action with the associated document.

# documentInteractionController:canPerformAction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 6.0) · iPadOS 3.2+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Called when a document interaction controller needs to know whether the specified action can be performed on the associated document.

> Apps should use [UIActivityViewController](../uiactivityviewcontroller.md) for actions.

## Declaration

```objectivec
- (BOOL) documentInteractionController:(UIDocumentInteractionController *) controller canPerformAction:(SEL) action;
```

## Parameters

- `controller`: The document interaction controller managing an associated document.
- `action`: The selector representing the action in question.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified action is supported for the associated document or [false](https://developer.apple.com/documentation/swift/false) if it is not. If you do not implement this method, the return value is assumed to be [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When building the options menu (invoked, for example, by the user performing a long press gesture), a document interaction controller calls this method to find out if your app can perform various actions. If you implement this method for a given action, you must also implement the [documentInteractionController:performAction:](documentinteractioncontroller%28__performaction_%29.md) method for that action.

The supported `action` selectors for this method are `copy:` and `print:`. (The `print:` selector is available in iOS 4.2 and later. Printing is supported only on devices that support multitasking.)

For each action that you implement in the [documentInteractionController:performAction:](documentinteractioncontroller%28__performaction_%29.md) delegate method, return [true](https://developer.apple.com/documentation/swift/true) from this method if that action is available for the document.

## See Also

### Deprecated

- [documentInteractionController:performAction:](documentinteractioncontroller%28__performaction_%29.md): Deprecated. Called when a document interaction controller wants its delegate to perform a specified action with the associated document.
