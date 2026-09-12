> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:docommandby:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:docommandby:))

# textView(\_:doCommandBy:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Sent to allow the delegate to perform the command for the text view.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, doCommandBy commandSelector: Selector) -> Bool
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager.
- `commandSelector`: The selector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) indicates that the delegate handled the command and the text view will not attempt to perform it; [false](https://developer.apple.com/documentation/swift/false) indicates that the delegate did not handle the command the text view will attempt to perform it.

<a id="Discussion"></a>

## Discussion

This method is invoked by `NSTextView`’s `doCommand(by:)` method.

# textView:doCommandBySelector: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent to allow the delegate to perform the command for the text view.

## Declaration

```objectivec
- (BOOL) textView:(NSTextView *) textView doCommandBySelector:(SEL) commandSelector;
```

## Parameters

- `textView`: The text view sending the message. This is the first text view in a series shared by a layout manager.
- `commandSelector`: The selector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) indicates that the delegate handled the command and the text view will not attempt to perform it; [false](https://developer.apple.com/documentation/swift/false) indicates that the delegate did not handle the command the text view will attempt to perform it.

<a id="Discussion"></a>

## Discussion

This method is invoked by `NSTextView`’s `doCommand(by:)` method.
