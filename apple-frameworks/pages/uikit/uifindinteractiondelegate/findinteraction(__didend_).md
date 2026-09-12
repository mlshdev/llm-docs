> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteractiondelegate/findinteraction(_:didend:)](https://developer.apple.com/documentation/uikit/uifindinteractiondelegate/findinteraction(_:didend:))

# findInteraction(\_:didEnd:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate when the interaction is about to dismiss the find panel.

## Declaration

```swift
optional func findInteraction(_ interaction: UIFindInteraction, didEnd session: UIFindSession)
```

## Parameters

- `interaction`: The interaction object triggering the find panel.
- `session`: The session object you provided for the interaction.

<a id="Discussion"></a>

## Discussion

Use this method to undo decoration on your view to indicate that a search operation is complete. For example, remove a dimming view from around the unhighlighted search results.

## See Also

### Decorating the searched content

- [findInteraction(\_:didBegin:)](findinteraction%28__didbegin_%29.md): Informs the delegate when the interaction is about to present the find panel.

# findInteraction:didEndFindSession: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate when the interaction is about to dismiss the find panel.

## Declaration

```objectivec
- (void) findInteraction:(UIFindInteraction *) interaction didEndFindSession:(UIFindSession *) session;
```

## Parameters

- `interaction`: The interaction object triggering the find panel.
- `session`: The session object you provided for the interaction.

<a id="Discussion"></a>

## Discussion

Use this method to undo decoration on your view to indicate that a search operation is complete. For example, remove a dimming view from around the unhighlighted search results.

## See Also

### Decorating the searched content

- [findInteraction:didBeginFindSession:](findinteraction%28__didbegin_%29.md): Informs the delegate when the interaction is about to present the find panel.
