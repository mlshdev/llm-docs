> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteractiondelegate/scribbleinteractionshoulddelayfocus(_:)](https://developer.apple.com/documentation/uikit/uiscribbleinteractiondelegate/scribbleinteractionshoulddelayfocus(_:))

# scribbleInteractionShouldDelayFocus(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate to delay focusing the text input view.

## Declaration

```swift
optional func scribbleInteractionShouldDelayFocus(_ interaction: UIScribbleInteraction) -> Bool
```

## Parameters

- `interaction`: The text input view asking about delaying focus.

<a id="return-value"></a>

## Return Value

Return `true` to delay focusing the text input, `false` otherwise.

<a id="Discussion"></a>

## Discussion

Normally, Scribble focuses the target input as soon as the user starts writing. If you return `true` from this callback, Scribble waits until the user pauses briefly while writing. This is useful in cases where the view shifts or transforms when becoming first responder, which can be disruptive to a user trying to write in the field.

It’s preferable to adjust the UI behavior and minimize these kinds transformations to avoid the layout changes. Only use this method as a last resort, since transcription happens all at once instead of incrementally.

## See Also

### Allowing and controlling Scribble interactions

- [scribbleInteraction(\_:shouldBeginAt:)](scribbleinteraction%28__shouldbeginat_%29.md): Returns a Boolean value that indicates whether the delegate should allow writing at a specific location in the view.

# scribbleInteractionShouldDelayFocus: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate to delay focusing the text input view.

## Declaration

```objectivec
- (BOOL) scribbleInteractionShouldDelayFocus:(UIScribbleInteraction *) interaction;
```

## Parameters

- `interaction`: The text input view asking about delaying focus.

<a id="return-value"></a>

## Return Value

Return `true` to delay focusing the text input, `false` otherwise.

<a id="Discussion"></a>

## Discussion

Normally, Scribble focuses the target input as soon as the user starts writing. If you return `true` from this callback, Scribble waits until the user pauses briefly while writing. This is useful in cases where the view shifts or transforms when becoming first responder, which can be disruptive to a user trying to write in the field.

It’s preferable to adjust the UI behavior and minimize these kinds transformations to avoid the layout changes. Only use this method as a last resort, since transcription happens all at once instead of incrementally.

## See Also

### Allowing and controlling Scribble interactions

- [scribbleInteraction:shouldBeginAtLocation:](scribbleinteraction%28__shouldbeginat_%29.md): Returns a Boolean value that indicates whether the delegate should allow writing at a specific location in the view.
