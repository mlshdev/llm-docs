> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/foreach](https://developer.apple.com/documentation/swiftui/foreach)

# ForEach

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that computes views on demand from an underlying collection of identified data.

## Declaration

```swift
struct ForEach<Data, ID, Content> where Data : RandomAccessCollection, ID : Hashable
```

## Mentioned In

- [Creating performant scrollable stacks](creating-performant-scrollable-stacks.md)
- [Displaying data in lists](displaying-data-in-lists.md)
- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md)
- [Reordering items in lists, stacks, grids, and custom layouts](reordering-items-in-lists-stacks-grids-and-custom-layouts.md)
- [Picking container views for your content](picking-container-views-for-your-content.md)

<a id="overview"></a>

## Overview

Use `ForEach` to provide views based on a [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection) of some data type. Either the collection’s elements must conform to [Identifiable](https://developer.apple.com/documentation/swift/identifiable) or you need to provide an `id` parameter to the `ForEach` initializer.

The following example creates a `NamedFont` type that conforms to [Identifiable](https://developer.apple.com/documentation/swift/identifiable), and an array of this type called `namedFonts`. A `ForEach` instance iterates over the array, producing new [Text](text.md) instances that display examples of each SwiftUI [Font](font.md) style provided in the array.

```swift
private struct NamedFont: Identifiable {
    let name: String
    let font: Font
    var id: String { name }
}

private let namedFonts: [NamedFont] = [
    NamedFont(name: "Large Title", font: .largeTitle),
    NamedFont(name: "Title", font: .title),
    NamedFont(name: "Headline", font: .headline),
    NamedFont(name: "Body", font: .body),
    NamedFont(name: "Caption", font: .caption)
]

var body: some View {
    ForEach(namedFonts) { namedFont in
        Text(namedFont.name)
            .font(namedFont.font)
    }
}
```

![A vertically arranged stack of labels showing various standard fonts,](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-ForEach-fonts@2x.png)

Some containers like [List](list.md) or [LazyVStack](lazyvstack.md) will query the elements within a for each lazily. To obtain maximal performance, ensure that the view created from each element in the collection represents a constant number of views.

For example, the following view uses an if statement which means each element of the collection can represent either 1 or 0 views, a non-constant number.

```swift
ForEach(namedFonts) { namedFont in
    if namedFont.name.count != 2 {
        Text(namedFont.name)
    }
}
```

You can make the above view represent a constant number of views by wrapping the condition in a [VStack](vstack.md), an [HStack](hstack.md), or a [ZStack](zstack.md).

```swift
ForEach(namedFonts) { namedFont in
    VStack {
        if namedFont.name.count != 2 {
            Text(namedFont.name)
        }
    }
}
```

When enabling the following launch argument, SwiftUI will log when it encounters a view that produces a non-constant number of views in these containers:

```swift
-LogForEachSlowPath YES
```

## Topics

### Creating a collection

- [init(\_:)](foreach/init%28__%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `TableRowContent`. Creates an instance that uniquely identifies and creates table rows across updates based on the identity of the underlying data.
- [init(\_:content:)](foreach/init%28__content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `MapContent`. Creates an instance that uniquely identifies and creates map content across updates based on the identity of the underlying data.
- [init(\_:id:content:)](foreach/init%28__id_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `MapContent`. Creates an instance that uniquely identifies and creates map content across updates based on the provided key path to the underlying data’s identifier.
- [init(sections:content:)](foreach/init%28sections_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the sections of a given view.
- [init(subviews:content:)](foreach/init%28subviews_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the subviews of a given view.

### Creating an editable collection

- [init(\_:editActions:content:)](foreach/init%28__editactions_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the identity of the underlying data.
- [init(\_:id:editActions:content:)](foreach/init%28__id_editactions_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the identity of the underlying data.

### Accessing content

- [content](foreach/content.md): A function to create content on demand using the underlying data.
- [data](foreach/data.md): The collection of underlying identified data that SwiftUI uses to create views dynamically.

## Relationships

### Conforms To

- [AccessibilityRotorContent](accessibilityrotorcontent.md)
- [AttachmentContent](https://developer.apple.com/documentation/realitykit/attachmentcontent)
- [Chart3DContent](https://developer.apple.com/documentation/charts/chart3dcontent)
- [ChartContent](https://developer.apple.com/documentation/charts/chartcontent)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomizableToolbarContent](customizabletoolbarcontent.md)
- [DynamicMapContent](https://developer.apple.com/documentation/mapkit/dynamicmapcontent)
- [DynamicTableRowContent](dynamictablerowcontent.md)
- [DynamicViewContent](dynamicviewcontent.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MapContent](https://developer.apple.com/documentation/mapkit/mapcontent)
- [SceneAccessoryContent](sceneaccessorycontent.md)
- [TabContent](tabcontent.md)
- [TableRowContent](tablerowcontent.md)
- [ToolbarContent](toolbarcontent.md)
- [View](view.md)

## See Also

### Iterating over dynamic data

- [ForEachSectionCollection](foreachsectioncollection.md): A collection which allows a view to be treated as a collection of its sections in a for each loop.
- [ForEachSubviewCollection](foreachsubviewcollection.md): A collection which allows a view to be treated as a collection of its subviews in a for each loop.
- [DynamicViewContent](dynamicviewcontent.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Copyable`, `ID` conforms to `Escapable`, `ID` conforms to `Hashable`, and `Content` conforms to `View`. A type of view that generates views from an underlying collection of data.
