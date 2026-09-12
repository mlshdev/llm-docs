> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuporderedset](https://developer.apple.com/documentation/paperkit/markuporderedset)

# MarkupOrderedSet

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An ordered set of markup elements.

## Declaration

```swift
struct MarkupOrderedSet
```

<a id="overview"></a>

## Overview

The set ensures all elements have unique `id` values.

## Topics

### Creating a set

- [init()](markuporderedset/init%28%29.md): Creates a new, empty collection.

### Adding elements

- [append(\_:)](markuporderedset/append%28__%29.md): Appends a new member to the end of the set, if the set doesn’t already contain it.
- [append(contentsOf:)](markuporderedset/append%28contentsof_%29.md): Appends the contents of a sequence to the end of the set, excluding elements that are already members.
- [insert(\_:at:)](markuporderedset/insert%28__at_%29.md): Inserts a new member at the specified index, if the set doesn’t already contain it.
- [updateOrAppend(\_:)](markuporderedset/updateorappend%28__%29.md): Adds the given element to the set unconditionally, either appending it to the set, or replacing an existing value if one with the same id is present.

### Accessing elements

- [subscript(\_:)](markuporderedset/subscript%28__%29-1h73t.md): Accesses the stroke for the given id.
- [subscript(\_:)](markuporderedset/subscript%28__%29-6e2ez.md): Accesses the element for the given id.
- [subscript(\_:)](markuporderedset/subscript%28__%29-79x8r.md): Accesses the element for the given id.
- [ids](markuporderedset/ids.md): A view of the set’s element ids.
- [strokes](markuporderedset/strokes.md): The strokes in the set.
- [count](markuporderedset/count.md): The number of elements in the set.

### Removing elements

- [remove(\_:)](markuporderedset/remove%28__%29.md): Removes the given element from the set.
- [remove(at:)](markuporderedset/remove%28at_%29.md): Removes and returns the element at the specified position.
- [removeAll(where:)](markuporderedset/removeall%28where_%29.md): Removes all the elements that satisfy the given predicate.
- [removeElement(for:)](markuporderedset/removeelement%28for_%29-4pqof.md): Removes the associated element for the given id from the set.
- [removeElement(for:)](markuporderedset/removeelement%28for_%29-5khjd.md): Removes the associated element for the given id from the set.
- [removeStroke(for:)](markuporderedset/removestroke%28for_%29.md): Removes the associated stroke for the given id from the set.

### Finding elements

- [contains(\_:)](markuporderedset/contains%28__%29.md): Returns a Boolean value that indicates whether the given element exists in the set.
- [firstIndex(of:)](markuporderedset/firstindex%28of_%29.md): Returns the index of the given element in the set, or `nil` if the element is not a member of the set.

### Identifying elements

- [MarkupOrderedSet.ElementID](markuporderedset/elementid.md): The markup ID types supported in a markup ordered set.
- [MarkupOrderedSet.ElementIDs](markuporderedset/elementids.md): A view of a set’s ids.
- [MarkupOrderedSet.Element](markuporderedset/element.md): The type of element in the set.

### Default Implementations

- [BidirectionalCollection Implementations](markuporderedset/bidirectionalcollection-implementations.md)
- [Collection Implementations](markuporderedset/collection-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Data model

- [PaperMarkup](papermarkup.md): The data model object for storing markup data created from a `PaperViewController`.
- [MarkupID](markupid.md): An opaque ID for markup elements.
