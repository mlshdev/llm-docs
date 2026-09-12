> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/outlinegroup](https://developer.apple.com/documentation/swiftui/outlinegroup)

# OutlineGroup

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A structure that computes views and disclosure groups on demand from an underlying collection of tree-structured, identified data.

## Declaration

```swift
struct OutlineGroup<Data, ID, Parent, Leaf, Subgroup> where Data : RandomAccessCollection, ID : Hashable
```

## Mentioned In

- [Displaying data in lists](displaying-data-in-lists.md)

<a id="overview"></a>

## Overview

Use an outline group when you need a view that can represent a hierarchy of data by using disclosure views. This allows the user to navigate the tree structure by using the disclosure views to expand and collapse branches.

In the following example, a tree structure of `FileItem` data offers a simplified view of a file system. Passing the root of this tree and the key path of its children allows you to quickly create a visual representation of the file system.

```swift
struct FileItem: Hashable, Identifiable, CustomStringConvertible {
    var id: Self { self }
    var name: String
    var children: [FileItem]? = nil
    var description: String {
        switch children {
        case nil:
            return "📄 \(name)"
        case .some(let children):
            return children.isEmpty ? "📂 \(name)" : "📁 \(name)"
        }
    }
}

let data =
  FileItem(name: "users", children:
    [FileItem(name: "user1234", children:
      [FileItem(name: "Photos", children:
        [FileItem(name: "photo001.jpg"),
         FileItem(name: "photo002.jpg")]),
       FileItem(name: "Movies", children:
         [FileItem(name: "movie001.mp4")]),
          FileItem(name: "Documents", children: [])
      ]),
     FileItem(name: "newuser", children:
       [FileItem(name: "Documents", children: [])
       ])
    ])

OutlineGroup(data, children: \.children) { item in
    Text("\(item.description)")
}
```

<a id="Type-parameters"></a>

### Type parameters

Five generic type constraints define a specific `OutlineGroup` instance:

- `Data`: The type of a collection containing the children of an element in the tree-shaped data.
- `ID`: The type of the identifier for an element.
- `Parent`: The type of the visual representation of an element whose children property is non-`nil`
- `Leaf`: The type of the visual representation of an element whose children property is `nil`.
- `Subgroup`: A type of a view that groups a parent view and a view representing its children, typically with some mechanism for showing and hiding the children

## Topics

### Creating an outline group

- [init(\_:children:)](outlinegroup/init%28__children_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` is `Data.Element.ID`, `Parent` conforms to `TableRowContent`, `Parent` is `Leaf`, `Leaf` is `Subgroup`, and `Data.Element` is `Parent.TableRowValue`. Creates an outline group from a collection of root data elements and a key path to element’s children.
- [init(\_:children:content:)](outlinegroup/init%28__children_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` is `Data.Element.ID`, `Parent` conforms to `View`, `Parent` is `Leaf`, `Subgroup` is `DisclosureGroup<Parent, OutlineSubgroupChildren>`, and `Data.Element` conforms to `Identifiable`. Creates an outline group from a binding to a collection of root data elements and a key path to its children.
- [init(\_:id:children:content:)](outlinegroup/init%28__id_children_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, `Parent` conforms to `View`, `Parent` is `Leaf`, and `Subgroup` is `DisclosureGroup<Parent, OutlineSubgroupChildren>`. Creates an outline group from a binding to a collection of root data elements, the key path to a data element’s identifier, and a key path to its children.

### Supporting types

- [OutlineSubgroupChildren](outlinesubgroupchildren.md): A type-erased view representing the children in an outline subgroup.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [TableRowContent](tablerowcontent.md)
- [View](view.md)

## See Also

### Disclosing information progressively

- [DisclosureGroup](disclosuregroup.md): A view that shows or hides another content view, based on the state of a disclosure control.
- [disclosureGroupStyle(\_:)](view/disclosuregroupstyle%28__%29.md): Sets the style for disclosure groups within this view.
