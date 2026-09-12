> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/renderingprocess/createvisibilitypropagationinteraction()](https://developer.apple.com/documentation/browserenginekit/renderingprocess/createvisibilitypropagationinteraction())

# createVisibilityPropagationInteraction()

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns an interaction that associates a view with the rendering process.

## Declaration

```swift
func createVisibilityPropagationInteraction() -> any UIInteraction
```

<a id="discussion"></a>

## Discussion

When you add a visibility propagation interaction to a view, the system considers the extension process visible whenever the view is visible, and schedules the process as if it has visible UI. When the view isn’t visible, the system schedules the process as a background helper.

If your rendering extension prepares content for multiple views, create a separate visibility propagation for each view.

## See Also

### Visibility propagation

- [Propagating view visibility information to extension processes](../propagating-view-visibility-information-to-browser-extensions.md): Register the extensions that contribute to preparing your browser app’s UI.
- [createVisibilityPropagationInteraction()](../webcontentprocess/createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the web content process.
