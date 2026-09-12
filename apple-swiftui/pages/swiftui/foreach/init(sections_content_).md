> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/foreach/init(sections:content:)](https://developer.apple.com/documentation/swiftui/foreach/init(sections:content:))

# init(sections:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an instance that uniquely identifies and creates views across updates based on the sections of a given view.

## Declaration

```swift
init<V>(sections view: V, @ContentBuilder content: @escaping (SectionConfiguration) -> Content) where Data == ForEachSectionCollection<Content>, ID == SectionConfiguration.ID, Content : View, V : View
```

## Parameters

- `view`: The view to extract the sections of.
- `content`: The content builder that creates views from sections

## See Also

### Creating a collection

- [init(\_:)](init%28__%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `TableRowContent`. Creates an instance that uniquely identifies and creates table rows across updates based on the identity of the underlying data.
- [init(\_:content:)](init%28__content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `MapContent`. Creates an instance that uniquely identifies and creates map content across updates based on the identity of the underlying data.
- [init(\_:id:content:)](init%28__id_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `MapContent`. Creates an instance that uniquely identifies and creates map content across updates based on the provided key path to the underlying data’s identifier.
- [init(subviews:content:)](init%28subviews_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection` and `ID` conforms to `Hashable`. Creates an instance that uniquely identifies and creates views across updates based on the subviews of a given view.
