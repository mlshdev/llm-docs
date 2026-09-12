> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteractiondelegate/scribbleinteractionwillbeginwriting(_:)](https://developer.apple.com/documentation/uikit/uiscribbleinteractiondelegate/scribbleinteractionwillbeginwriting(_:))

# scribbleInteractionWillBeginWriting(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Informs the delegate when the user begins writing in the view.

## Declaration

```swift
optional func scribbleInteractionWillBeginWriting(_ interaction: UIScribbleInteraction)
```

## Parameters

- `interaction`: The interaction where the user started writing.

<a id="Discussion"></a>

## Discussion

Use this method to hide custom placeholders or other UI elements that can interfere with writing.

## See Also

### Tracking Scribble input

- [scribbleInteractionDidFinishWriting(\_:)](scribbleinteractiondidfinishwriting%28__%29.md): Informs the delegate that the user stops writing in the view, after Scribble transcribes and enters the last word.

# scribbleInteractionWillBeginWriting: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Informs the delegate when the user begins writing in the view.

## Declaration

```objectivec
- (void) scribbleInteractionWillBeginWriting:(UIScribbleInteraction *) interaction;
```

## Parameters

- `interaction`: The interaction where the user started writing.

<a id="Discussion"></a>

## Discussion

Use this method to hide custom placeholders or other UI elements that can interfere with writing.

## See Also

### Tracking Scribble input

- [scribbleInteractionDidFinishWriting:](scribbleinteractiondidfinishwriting%28__%29.md): Informs the delegate that the user stops writing in the view, after Scribble transcribes and enters the last word.
