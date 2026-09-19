> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/arrangement

# UIArrangementViewController.Arrangement

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A type that describes how an arrangement view controller lays out its view controllers.

## Declaration

```swift
protocol Arrangement
```

## Topics

### Getting the default view properties

- [defaultViewProperties](arrangement/defaultviewproperties.md): Beta. The default view properties for a view controller placed in the arrangement.
- [ViewProperties](arrangement/viewproperties.md): Beta. The type of properties for views within the arrangement.

### Setting view properties

- [setViewProperties(\_:for:)](arrangement/setviewproperties%28__for_%29.md): Beta. Sets the view properties for a placement in the arrangement.

### Getting a default arrangement

- [overlay](arrangement/overlay.md): Beta. Conforms when `Self` is `UIOverlayArrangement`. The default overlay arrangement.
- [split](arrangement/split.md): Beta. Conforms when `Self` is `UISplitArrangement`. The default split arrangement.

## Relationships

### Conforming Types

- [UIOverlayArrangement](../uioverlayarrangement-swift.struct.md)
- [UISplitArrangement](../uisplitarrangement-swift.struct.md)

## See Also

### Configuring the arrangement

- [UIOverlayArrangement](../uioverlayarrangement-swift.struct.md): Beta. An arrangement that overlays views.
- [UISplitArrangement](../uisplitarrangement-swift.struct.md): Beta. An arrangement that splits views.
- [updateArrangement(\_:animated:)](updatearrangement%28__animated_%29.md): Beta. Updates the arrangement of the view controller.
