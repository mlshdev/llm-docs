> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/validateproposedfirstresponder(_:for:)](https://developer.apple.com/documentation/appkit/nsresponder/validateproposedfirstresponder(_:for:))

# validateProposedFirstResponder(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows controls to determine when they should become first responder.

## Declaration

```swift
func validateProposedFirstResponder(_ responder: NSResponder, for event: NSEvent?) -> Bool
```

## Parameters

- `responder`: The first responder.
- `event`: The event to validate. May be `nil` if there is no applicable event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control should become first responder, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some controls, such as `NSTextField`, should only become first responder when the enclosing NSTableView/NSBrowser indicates that the view can begin editing. It is up to the particular control that wants to be validated to call this method in its [mouseDown(with:)](mousedown%28with_%29.md) method (or perhaps at another time) to determine if it should attempt to become the first responder or not.

The [NSTableView](../nstableview.md), [NSOutlineView](../nsoutlineview.md), and [NSBrowser](../nsbrowser.md) classes implement this to allow first responder status only if the responder is a view in a selected row. It also delays the first responder assignment if a `doubleAction` may be invoked.

The default implementation returns [true](https://developer.apple.com/documentation/swift/true) when there is no [nextResponder](nextresponder.md) set, otherwise, it is forwarded up the responder chain.

## See Also

### Changing the First Responder

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.
- [becomeFirstResponder()](becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.

# validateProposedFirstResponder:forEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows controls to determine when they should become first responder.

## Declaration

```objectivec
- (BOOL) validateProposedFirstResponder:(NSResponder *) responder forEvent:(NSEvent *) event;
```

## Parameters

- `responder`: The first responder.
- `event`: The event to validate. May be `nil` if there is no applicable event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the control should become first responder, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some controls, such as `NSTextField`, should only become first responder when the enclosing NSTableView/NSBrowser indicates that the view can begin editing. It is up to the particular control that wants to be validated to call this method in its [mouseDown:](mousedown%28with_%29.md) method (or perhaps at another time) to determine if it should attempt to become the first responder or not.

The [NSTableView](../nstableview.md), [NSOutlineView](../nsoutlineview.md), and [NSBrowser](../nsbrowser.md) classes implement this to allow first responder status only if the responder is a view in a selected row. It also delays the first responder assignment if a `doubleAction` may be invoked.

The default implementation returns [true](https://developer.apple.com/documentation/swift/true) when there is no [nextResponder](nextresponder.md) set, otherwise, it is forwarded up the responder chain.

## See Also

### Changing the First Responder

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.
- [becomeFirstResponder](becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.
