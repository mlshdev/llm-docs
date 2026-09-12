> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/inspector(ispresented:content:)](https://developer.apple.com/documentation/swiftui/view/inspector(ispresented:content:))

# inspector(isPresented:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Inserts an inspector at the applied position in the view hierarchy.

## Declaration

```swift
nonisolated func inspector<V>(isPresented: Binding<Bool>, @ContentBuilder content: () -> V) -> some View where V : View

```

## Parameters

- `isPresented`: A binding to `Bool` controlling the presented state.
- `content`: The inspector content.

<a id="discussion"></a>

## Discussion

Apply this modifier to declare an inspector with a context-dependent presentation. For example, an inspector can present as a trailing column in a horizontally regular size class, but adapt to a sheet in a horizontally compact size class.

```swift
struct ShapeEditor: View {
    @State var presented: Bool = false
    var body: some View {
        MyEditorView()
            .inspector(isPresented: $presented) {
                TextTraitsInspectorView()
            }
    }
}
```

> **Note**

> Trailing column inspectors have their presentation state restored by the framework.

> **See Also**

> [InspectorCommands](../inspectorcommands.md) for including the default inspector commands and keyboard shortcuts.

## See Also

### Presenting an inspector

- [inspectorColumnWidth(\_:)](inspectorcolumnwidth%28__%29.md): Sets a fixed, preferred width for the inspector containing this view when presented as a trailing column.
- [inspectorColumnWidth(min:ideal:max:)](inspectorcolumnwidth%28min_ideal_max_%29.md): Sets a flexible, preferred width for the inspector in a trailing-column presentation.
