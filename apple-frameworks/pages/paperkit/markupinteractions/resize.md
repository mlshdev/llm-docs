> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupinteractions/resize](https://developer.apple.com/documentation/paperkit/markupinteractions/resize)

# resize

**Framework:** PaperKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Allows resizing.

## Declaration

```swift
static let resize: MarkupInteractions
```

<a id="discussion"></a>

## Discussion

This only controls manual resizing through direct interaction (drag handles, gestures). Programmatic resizing via the `frame` property always works. For `ShapeMarkup` elements, automatic content-driven resizing from the `autoresizing` property still occurs independently of this setting.

## See Also

### Configuring interactions

- [rotate](rotate.md): Allows rotation.
- [move](move.md): Allows moving.
- [delete](delete.md): Allows deletion.
- [style](style.md): Allows style changes.
- [select](select.md): Allows selection.
