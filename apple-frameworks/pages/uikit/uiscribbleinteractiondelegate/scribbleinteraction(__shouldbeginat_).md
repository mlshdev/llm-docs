> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteractiondelegate/scribbleinteraction(_:shouldbeginat:)](https://developer.apple.com/documentation/uikit/uiscribbleinteractiondelegate/scribbleinteraction(_:shouldbeginat:))

# scribbleInteraction(\_:shouldBeginAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Returns a Boolean value that indicates whether the delegate should allow writing at a specific location in the view.

## Declaration

```swift
optional func scribbleInteraction(_ interaction: UIScribbleInteraction, shouldBeginAt location: CGPoint) -> Bool
```

## Parameters

- `interaction`: The text view asking if it can start receiving user input.
- `location`: The location of the text view as a [CGPoint](../../corefoundation/cgpoint.md) in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

Return `false` to disallow writing at the specified location; otherwise return `true`.

<a id="Discussion"></a>

## Discussion

Use this callback to temporarily suppress Scribble in text input views if your app supports drawing over text or special interaction when using Apple Pencil. In cases like this, consider providing a UI for the user to toggle between drawing and handwriting.

This callback can also return `false` for views that handle Apple Pencil events directly, like a drawing canvas, since nearby text fields could take over the events for writing.

## See Also

### Allowing and controlling Scribble interactions

- [scribbleInteractionShouldDelayFocus(\_:)](scribbleinteractionshoulddelayfocus%28__%29.md): Tells the delegate to delay focusing the text input view.

# scribbleInteraction:shouldBeginAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Returns a Boolean value that indicates whether the delegate should allow writing at a specific location in the view.

## Declaration

```objectivec
- (BOOL) scribbleInteraction:(UIScribbleInteraction *) interaction shouldBeginAtLocation:(CGPoint) location;
```

## Parameters

- `interaction`: The text view asking if it can start receiving user input.
- `location`: The location of the text view as a [CGPoint](../../corefoundation/cgpoint.md) in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

Return `false` to disallow writing at the specified location; otherwise return `true`.

<a id="Discussion"></a>

## Discussion

Use this callback to temporarily suppress Scribble in text input views if your app supports drawing over text or special interaction when using Apple Pencil. In cases like this, consider providing a UI for the user to toggle between drawing and handwriting.

This callback can also return `false` for views that handle Apple Pencil events directly, like a drawing canvas, since nearby text fields could take over the events for writing.

## See Also

### Allowing and controlling Scribble interactions

- [scribbleInteractionShouldDelayFocus:](scribbleinteractionshoulddelayfocus%28__%29.md): Tells the delegate to delay focusing the text input view.
