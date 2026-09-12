> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteractiondelegate/findinteraction(_:didbegin:)](https://developer.apple.com/documentation/uikit/uifindinteractiondelegate/findinteraction(_:didbegin:))

# findInteraction(\_:didBegin:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate when the interaction is about to present the find panel.

## Declaration

```swift
optional func findInteraction(_ interaction: UIFindInteraction, didBegin session: UIFindSession)
```

## Parameters

- `interaction`: The interaction object triggering the find panel.
- `session`: The session object you provided for the interaction.

<a id="Discussion"></a>

## Discussion

Use this method to decorate your view to indicate that a search operation is about to occur. For example, apply a dimming view around the unhighlighted search results.

## See Also

### Decorating the searched content

- [findInteraction(\_:didEnd:)](findinteraction%28__didend_%29.md): Informs the delegate when the interaction is about to dismiss the find panel.

# findInteraction:didBeginFindSession: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the delegate when the interaction is about to present the find panel.

## Declaration

```objectivec
- (void) findInteraction:(UIFindInteraction *) interaction didBeginFindSession:(UIFindSession *) session;
```

## Parameters

- `interaction`: The interaction object triggering the find panel.
- `session`: The session object you provided for the interaction.

<a id="Discussion"></a>

## Discussion

Use this method to decorate your view to indicate that a search operation is about to occur. For example, apply a dimming view around the unhighlighted search results.

## See Also

### Decorating the searched content

- [findInteraction:didEndFindSession:](findinteraction%28__didend_%29.md): Informs the delegate when the interaction is about to dismiss the find panel.
