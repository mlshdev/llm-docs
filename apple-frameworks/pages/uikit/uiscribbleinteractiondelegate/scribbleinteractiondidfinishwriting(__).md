> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteractiondelegate/scribbleinteractiondidfinishwriting(_:)](https://developer.apple.com/documentation/uikit/uiscribbleinteractiondelegate/scribbleinteractiondidfinishwriting(_:))

# scribbleInteractionDidFinishWriting(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Informs the delegate that the user stops writing in the view, after Scribble transcribes and enters the last word.

## Declaration

```swift
optional func scribbleInteractionDidFinishWriting(_ interaction: UIScribbleInteraction)
```

## Parameters

- `interaction`: The interaction where the user finished writing.

<a id="Discussion"></a>

## Discussion

Use this to reset placeholders or other UI elements, if appropriate, to their state from before the user started writing.

## See Also

### Tracking Scribble input

- [scribbleInteractionWillBeginWriting(\_:)](scribbleinteractionwillbeginwriting%28__%29.md): Informs the delegate when the user begins writing in the view.

# scribbleInteractionDidFinishWriting: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Informs the delegate that the user stops writing in the view, after Scribble transcribes and enters the last word.

## Declaration

```objectivec
- (void) scribbleInteractionDidFinishWriting:(UIScribbleInteraction *) interaction;
```

## Parameters

- `interaction`: The interaction where the user finished writing.

<a id="Discussion"></a>

## Discussion

Use this to reset placeholders or other UI elements, if appropriate, to their state from before the user started writing.

## See Also

### Tracking Scribble input

- [scribbleInteractionWillBeginWriting:](scribbleinteractionwillbeginwriting%28__%29.md): Informs the delegate when the user begins writing in the view.
