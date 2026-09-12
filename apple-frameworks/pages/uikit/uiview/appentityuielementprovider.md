> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/appentityuielementprovider](https://developer.apple.com/documentation/uikit/uiview/appentityuielementprovider)

# appEntityUIElementProvider

**Framework:** AppIntents  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · tvOS 18.4+ · visionOS 2.4+

return AppEntityUIElement( identifier: EntityIdentifier( for: PhotoModel.self, identifier: photo.id ), bounds: photo.frame, state: State(isSelected: photo.isSelected) ) } } } }

## Declaration

```swift
@MainActor @preconcurrency var appEntityUIElementProvider: ((UIView, AppEntityUIElementsContext) -> [AppEntityUIElement])? { get set }
```

<a id="discussion"></a>

## Discussion

```

> Note: The order of the returned elements isn't relevant.

If your custom view shows content you can describe with a single app entity, use the ``appEntityIdentifier`` property instead to
associate the app entity with your custom view.

For more information, refer to <doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri> and
<doc://com.apple.documentation/documentation/appintents>.
```
