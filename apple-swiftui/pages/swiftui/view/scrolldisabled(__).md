> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/scrolldisabled(_:)](https://developer.apple.com/documentation/swiftui/view/scrolldisabled(_:))

# scrollDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Disables or enables scrolling in scrollable views.

## Declaration

```swift
nonisolated func scrollDisabled(_ disabled: Bool) -> some View

```

## Parameters

- `disabled`: A Boolean that indicates whether scrolling is disabled.

<a id="discussion"></a>

## Discussion

Use this modifier to control whether a [ScrollView](../scrollview.md) can scroll:

```swift
@State private var isScrollDisabled = false

var body: some View {
    ScrollView {
        VStack {
            Toggle("Disable", isOn: $isScrollDisabled)
            MyContent()
        }
    }
    .scrollDisabled(isScrollDisabled)
}
```

SwiftUI passes the disabled property through the environment, which means you can use this modifier to disable scrolling for all scroll views within a view hierarchy. In the following example, the modifier affects both scroll views:

```swift
 ScrollView {
     ForEach(rows) { row in
         ScrollView(.horizontal) {
             RowContent(row)
         }
     }
 }
 .scrollDisabled(true)
```

You can also use this modifier to disable scrolling for other kinds of scrollable views, like a [List](../list.md) or a [TextEditor](../texteditor.md).

## See Also

### Disabling scrolling

- [isScrollEnabled](../environmentvalues/isscrollenabled.md): A Boolean value that indicates whether any scroll views associated with this environment allow scrolling to occur.
