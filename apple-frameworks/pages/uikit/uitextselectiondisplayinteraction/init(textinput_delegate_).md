> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction/init(textinput:delegate:)

# init(textInput:delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new text selection display interaction object for the specified text view.

## Declaration

```swift
init(textInput: any UITextInput, delegate: any UITextSelectionDisplayInteractionDelegate)
```

## Parameters

- `textInput`: The text input view that receives this interaction view.
- `delegate`: An optional delegate object to manage the selection UI views.

# initWithTextInput:delegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new text selection display interaction object for the specified text view.

## Declaration

```objectivec
- (instancetype) initWithTextInput:(id<UITextInput>) textInput delegate:(id<UITextSelectionDisplayInteractionDelegate>) delegate;
```

## Parameters

- `textInput`: The text input view that receives this interaction view.
- `delegate`: An optional delegate object to manage the selection UI views.
