> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/textinputview](https://developer.apple.com/documentation/uikit/uitextinput/textinputview)

# textInputView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An affiliated view that provides a coordinate system for all geometric values in the protocol.

## Declaration

```swift
optional var textInputView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

The view that both draws the text and provides a coordinate system for all geometric values in this protocol. (This is typically an instance of the [UITextInput](../uitextinput.md)-adopting class.) If this property is unimplemented, the first view in the responder chain is selected.

# textInputView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An affiliated view that provides a coordinate system for all geometric values in the protocol.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * textInputView;
```

<a id="Discussion"></a>

## Discussion

The view that both draws the text and provides a coordinate system for all geometric values in this protocol. (This is typically an instance of the [UITextInput](../uitextinput.md)-adopting class.) If this property is unimplemented, the first view in the responder chain is selected.
