> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextinput/inputdelegate

# inputDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An input delegate that receives a notification when text changes or when the selection changes.

## Declaration

```swift
weak var inputDelegate: (any UITextInputDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The text input system automatically assigns a delegate to this property at runtime. It is the responsibility of the view that adopts the [UITextInput](../uitextinput.md) protocol to notify the input delegate at the appropriate junctures.

## See Also

### Handling text input

- [UITextInputDelegate](../uitextinputdelegate.md): An intermediary between a document and the text input system.

# inputDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An input delegate that receives a notification when text changes or when the selection changes.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITextInputDelegate> inputDelegate;
```

<a id="Discussion"></a>

## Discussion

The text input system automatically assigns a delegate to this property at runtime. It is the responsibility of the view that adopts the [UITextInput](../uitextinput.md) protocol to notify the input delegate at the appropriate junctures.

## See Also

### Handling text input

- [UITextInputDelegate](../uitextinputdelegate.md): An intermediary between a document and the text input system.
