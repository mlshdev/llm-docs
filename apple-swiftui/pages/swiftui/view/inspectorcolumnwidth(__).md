> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/inspectorcolumnwidth(_:)](https://developer.apple.com/documentation/swiftui/view/inspectorcolumnwidth(_:))

# inspectorColumnWidth(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Sets a fixed, preferred width for the inspector containing this view when presented as a trailing column.

## Declaration

```swift
nonisolated func inspectorColumnWidth(_ width: CGFloat) -> some View

```

## Parameters

- `width`: The preferred fixed width for the inspector if presented as a trailing column.

<a id="discussion"></a>

## Discussion

Apply this modifier on the content of a [inspector(isPresented:content:)](inspector%28ispresented_content_%29.md) to specify a fixed preferred width for the trailing column. Use [inspectorColumnWidth(min:ideal:max:)](inspectorcolumnwidth%28min_ideal_max_%29.md) if you need to specify a flexible width.

The following example shows an editor interface with an inspector, which when presented as a trailing-column, has a fixed width of 225 points. The example also uses [interactiveDismissDisabled(\_:)](interactivedismissdisabled%28__%29.md) to prevent the inspector from being collapsed by user action like dragging a divider.

```swift
MyEditorView()
    .inspector {
        TextTraitsInspectorView()
            .inspectorColumnWidth(225)
            .interactiveDismissDisabled()
    }
```

> **Note**

> A fixed width does not prevent the user collapsing the inspector on macOS. See [interactiveDismissDisabled(\_:)](interactivedismissdisabled%28__%29.md).

## See Also

### Presenting an inspector

- [inspector(isPresented:content:)](inspector%28ispresented_content_%29.md): Inserts an inspector at the applied position in the view hierarchy.
- [inspectorColumnWidth(min:ideal:max:)](inspectorcolumnwidth%28min_ideal_max_%29.md): Sets a flexible, preferred width for the inspector in a trailing-column presentation.
