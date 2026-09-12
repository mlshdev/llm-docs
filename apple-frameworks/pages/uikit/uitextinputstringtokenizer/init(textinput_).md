> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputstringtokenizer/init(textinput:)](https://developer.apple.com/documentation/uikit/uitextinputstringtokenizer/init(textinput:))

# init(textInput:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an object initialized with the document object that directly communicates with the text input system.

## Declaration

```swift
init(textInput: any UIResponder & UITextInput)
```

## Parameters

- `textInput`: The document object in the application that adopts the [UITextInput](../uitextinput.md) protocol for the purposes of communicating with the text input system.

<a id="return-value"></a>

## Return Value

An instance of a subclass of [UITextInputStringTokenizer](../uitextinputstringtokenizer.md), or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

The subclass of [UITextInputStringTokenizer](../uitextinputstringtokenizer.md) shouldn’t retain `textInput`; the tokenizer should always have a lifetime bounded by that of the [UITextInput](../uitextinput.md)-conforming object and a retaining reference would create a retain cycle.

# initWithTextInput: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an object initialized with the document object that directly communicates with the text input system.

## Declaration

```objectivec
- (instancetype) initWithTextInput:(UIResponder<UITextInput> *) textInput;
```

## Parameters

- `textInput`: The document object in the application that adopts the [UITextInput](../uitextinput.md) protocol for the purposes of communicating with the text input system.

<a id="return-value"></a>

## Return Value

An instance of a subclass of [UITextInputStringTokenizer](../uitextinputstringtokenizer.md), or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

The subclass of [UITextInputStringTokenizer](../uitextinputstringtokenizer.md) shouldn’t retain `textInput`; the tokenizer should always have a lifetime bounded by that of the [UITextInput](../uitextinput.md)-conforming object and a retaining reference would create a retain cycle.
