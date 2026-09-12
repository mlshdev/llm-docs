> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibility(activationpoint:)](https://developer.apple.com/documentation/swiftui/view/accessibility(activationpoint:))

# accessibility(activationPoint:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Specifies the point where activations occur in the view.

> Use [accessibilityActivationPoint(\_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityactivationpoint%28_:%29-10po1) instead.

## Declaration

```swift
nonisolated func accessibility(activationPoint: CGPoint) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## See Also

### Accessibility modifiers

- [accessibility(label:)](accessibility%28label_%29.md): Deprecated. Adds a label to the view that describes its contents.
- [accessibility(value:)](accessibility%28value_%29.md): Deprecated. Adds a textual description of the value that the view contains.
- [accessibility(hidden:)](accessibility%28hidden_%29.md): Deprecated. Specifies whether to hide this view from system accessibility features.
- [accessibility(identifier:)](accessibility%28identifier_%29.md): Deprecated. Uses the specified string to identify the view.
- [accessibility(selectionIdentifier:)](accessibility%28selectionidentifier_%29.md): Deprecated. Sets a selection identifier for this view’s accessibility element.
- [accessibility(hint:)](accessibility%28hint_%29.md): Deprecated. Communicates to the user what happens after performing the view’s action.
- [accessibility(inputLabels:)](accessibility%28inputlabels_%29.md): Deprecated. Sets alternate input labels with which users identify a view.
- [accessibility(addTraits:)](accessibility%28addtraits_%29.md): Deprecated. Adds the given traits to the view.
- [accessibility(removeTraits:)](accessibility%28removetraits_%29.md): Deprecated. Removes the given traits from this view.
- [accessibility(sortPriority:)](accessibility%28sortpriority_%29.md): Deprecated. Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.
