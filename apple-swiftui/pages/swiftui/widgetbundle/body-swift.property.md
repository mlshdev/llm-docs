> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetbundle/body-swift.property](https://developer.apple.com/documentation/swiftui/widgetbundle/body-swift.property)

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

Declares the group of widgets that an app supports.

## Declaration

```swift
@WidgetBundleBuilder @MainActor @preconcurrency var body: Self.Body { get }
```

<a id="discussion"></a>

## Discussion

The order that the widgets appear in this property determines the order they are shown to the user when adding a widget. The following example shows how to use a widget bundle builder to define a body showing a game status widget first and a character detail widget second:

```swift
@main
struct GameWidgets: WidgetBundle {
   var body: some Widget {
       GameStatusWidget()
       CharacterDetailWidget()
   }
}
```

## See Also

### Implementing a widget bundle

- [Body](body-swift.associatedtype.md): The type of widget that represents the content of the bundle.
- [WidgetBundleBuilder](../widgetbundlebuilder.md): A custom attribute that constructs a widget bundle’s body.
