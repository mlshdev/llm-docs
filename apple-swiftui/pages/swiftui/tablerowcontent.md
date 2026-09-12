> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowcontent](https://developer.apple.com/documentation/swiftui/tablerowcontent)

# TableRowContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A type used to represent table rows.

## Declaration

```swift
@MainActor @preconcurrency protocol TableRowContent<TableRowValue>
```

<a id="overview"></a>

## Overview

Like with the [View](view.md) protocol, you can create custom table row content by declaring a type that conforms to the `TableRowContent` protocol and implementing the required [tableRowBody](tablerowcontent/tablerowbody-swift.property.md) property.

```swift
struct GroupOfPeopleRows: TableRowContent {
    @Binding var people: [Person]

    var tableRowBody: some TableRowContent<Person> {
        ForEach(people) { person in
            TableRow(person)
                .itemProvider { person.itemProvider }
        }
        .dropDestination(for: Person.self) { destination, newPeople in
            people.insert(contentsOf: newPeople, at: destination)
        }
    }
}
```

This example uses an opaque result type and specifies that the primary associated type `TableRowValue` for the `tableRowBody` property is a `Person`. From this, SwiftUI can infer `TableRowValue` for the `GroupOfPeopleRows` structure is also `Person`.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting the row body

- [tableRowBody](tablerowcontent/tablerowbody-swift.property.md): The composition of content that comprise the table row content.
- [TableRowBody](tablerowcontent/tablerowbody-swift.associatedtype.md): The type of content representing the body of this table row content.

### Defining the row value

- [TableRowValue](tablerowcontent/tablerowvalue.md): The type of value represented by this table row content.

### Managing interaction

- [draggable(\_:)](tablerowcontent/draggable%28__%29.md): Activates this row as the source of a drag and drop operation.
- [dropDestination(for:action:)](tablerowcontent/dropdestination%28for_action_%29.md): Defines the entire row as a destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [onHover(perform:)](tablerowcontent/onhover%28perform_%29.md): Adds an action to perform when the pointer moves onto or away from the entire row.
- [itemProvider(\_:)](tablerowcontent/itemprovider%28__%29.md): Provides a closure that vends the drag representation for a particular data element.
- [ItemProviderTableRowModifier](itemprovidertablerowmodifier.md): A table row modifier that associates an item provider with some base row content.

### Adding a context menu to a row

- [contextMenu(menuItems:)](tablerowcontent/contextmenu%28menuitems_%29.md): Adds a context menu to a table row.
- [contextMenu(menuItems:preview:)](tablerowcontent/contextmenu%28menuitems_preview_%29.md): Adds a context menu with a preview to a table row.

### Instance Methods

- [selectionDisabled(\_:)](tablerowcontent/selectiondisabled%28__%29.md): Adds a condition that controls whether users can select this row.

## Relationships

### Inherited By

- [DynamicTableRowContent](dynamictablerowcontent.md)

### Conforming Types

- [DisclosureTableRow](disclosuretablerow.md)
- [EmptyTableRowContent](emptytablerowcontent.md)
- [ForEach](foreach.md)
- [Group](group.md)
- [ModifiedContent](modifiedcontent.md)
- [OutlineGroup](outlinegroup.md)
- [Section](section.md)
- [TableForEachContent](tableforeachcontent.md)
- [TableHeaderRowContent](tableheaderrowcontent.md)
- [TableOutlineGroupContent](tableoutlinegroupcontent.md)
- [TableRow](tablerow.md)
- [TupleTableRowContent](tupletablerowcontent.md)

## See Also

### Creating rows

- [TableRow](tablerow.md): A row that represents a data value in a table.
- [TableHeaderRowContent](tableheaderrowcontent.md): A table row that displays a single view instead of columned content.
- [TupleTableRowContent](tupletablerowcontent.md): A type of table column content that creates table rows created from a Swift tuple of table rows.
- [TableForEachContent](tableforeachcontent.md): A type of table row content that creates table rows created by iterating over a collection.
- [EmptyTableRowContent](emptytablerowcontent.md): Conforms when `Value` conforms to `Identifiable`. A table row content that doesn’t produce any rows.
- [DynamicTableRowContent](dynamictablerowcontent.md): A type of table row content that generates table rows from an underlying collection of data.
- [TableRowBuilder](tablerowbuilder.md): A result builder that creates table row content from closures.
