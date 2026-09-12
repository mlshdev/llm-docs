> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller](https://developer.apple.com/documentation/appkit/nsarraycontroller)

# NSArrayController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A bindings-compatible controller that manages a collection of objects.

## Declaration

```swift
class NSArrayController
```

<a id="overview"></a>

## Overview

Typically the collection that an [NSArrayController](nsarraycontroller.md) manages is an array, however, if the controller manages a relationship of a managed object (see [NSManagedObject](https://developer.apple.com/documentation/coredata/nsmanagedobject)) the collection may be a set. [NSArrayController](nsarraycontroller.md) provides selection management and sorting capabilities.

## Topics

### Managing Sort Descriptors

- [sortDescriptors](nsarraycontroller/sortdescriptors.md): An array of sort descriptor objects, used by the receiver to arrange its content.

### Arranging Objects

- [arrange(\_:)](nsarraycontroller/arrange%28__%29.md): Returns a given array, appropriately sorted and filtered.
- [arrangedObjects](nsarraycontroller/arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrange(\_:)](nsarraycontroller/arrange%28__%29.md).
- [rearrangeObjects()](nsarraycontroller/rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.

### Managing Content

- [add(\_:)](nsarraycontroller/add%28__%29.md): Creates and adds a new object to the receiver’s content and arranged objects.

### Selection Attributes

- [avoidsEmptySelection](nsarraycontroller/avoidsemptyselection.md): A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection
- [preservesSelection](nsarraycontroller/preservesselection.md): A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes
- [alwaysUsesMultipleValuesMarker](nsarraycontroller/alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected

### Managing selections

- [selectionIndex](nsarraycontroller/selectionindex.md): The index of the first object in the receiver’s selection
- [setSelectionIndex(\_:)](nsarraycontroller/setselectionindex%28__%29.md): Sets the receiver’s selection to the given index, and returns a Boolean value that indicates whether the selection was changed.
- [selectsInsertedObjects](nsarraycontroller/selectsinsertedobjects.md): A Boolean value that indicates whether the receiver automatically selects inserted objects
- [setSelectionIndexes(\_:)](nsarraycontroller/setselectionindexes%28__%29.md): Sets the receiver’s selection indexes and returns a Boolean value that indicates whether the selection changed.
- [selectionIndexes](nsarraycontroller/selectionindexes.md): An index set containing the indexes of the receiver’s currently selected objects in the content array
- [addSelectionIndexes(\_:)](nsarraycontroller/addselectionindexes%28__%29.md): Adds the objects at the specified indexes in the receiver’s content array to the current selection.
- [removeSelectionIndexes(\_:)](nsarraycontroller/removeselectionindexes%28__%29.md): Removes the object as the specified indexes from the receiver’s current selection.
- [setSelectedObjects(\_:)](nsarraycontroller/setselectedobjects%28__%29.md): Sets the specified objects as the receiver’s current selection.
- [selectedObjects](nsarraycontroller/selectedobjects.md): An array containing the receiver’s selected objects
- [addSelectedObjects(\_:)](nsarraycontroller/addselectedobjects%28__%29.md): Adds the specified objects from the receiver’s content array to the current selection.
- [removeSelectedObjects(\_:)](nsarraycontroller/removeselectedobjects%28__%29.md): Removes the specified objects from the receiver’s current selection.
- [selectNext(\_:)](nsarraycontroller/selectnext%28__%29.md): Selects the next object, relative to the current selection, in the receiver’s arranged content.
- [canSelectNext](nsarraycontroller/canselectnext.md): A Boolean value indicating whether the next object, relative to the current selection, in the receiver’s content array can be selected
- [selectPrevious(\_:)](nsarraycontroller/selectprevious%28__%29.md): Selects the previous object, relative to the current selection, in the receiver’s arranged content.
- [canSelectPrevious](nsarraycontroller/canselectprevious.md): A Boolean value indicating whether the previous object, relative to the current selection, in the receiver’s content array can be selected

### Inserting

- [canInsert](nsarraycontroller/caninsert.md): Returns a Boolean value that indicates whether an object can be inserted into the receiver’s content collection.
- [insert(\_:)](nsarraycontroller/insert%28__%29.md): Creates a new object and inserts it into the receiver’s content array.

### Adding and Removing Objects

- [addObject(\_:)](nsarraycontroller/addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [add(contentsOf:)](nsarraycontroller/add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insert(\_:atArrangedObjectIndex:)](nsarraycontroller/insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insert(contentsOf:atArrangedObjectIndexes:)](nsarraycontroller/insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [remove(atArrangedObjectIndex:)](nsarraycontroller/remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [remove(atArrangedObjectIndexes:)](nsarraycontroller/remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove(\_:)](nsarraycontroller/remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [removeObject(\_:)](nsarraycontroller/removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [remove(contentsOf:)](nsarraycontroller/remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

### Filtering Content

- [clearsFilterPredicateOnInsertion](nsarraycontroller/clearsfilterpredicateoninsertion.md): A Boolean value that indicates whether the receiver automatically clears an existing filter predicate when new items are inserted or added to the content
- [filterPredicate](nsarraycontroller/filterpredicate.md): A predicate used by the receiver to filter the array controller contents

### Automatic Content Rearranging

- [automaticallyRearrangesObjects](nsarraycontroller/automaticallyrearrangesobjects.md): A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates
- [automaticRearrangementKeyPaths](nsarraycontroller/automaticrearrangementkeypaths.md): An array of key paths that trigger automatic content sorting or filtering
- [didChangeArrangementCriteria()](nsarraycontroller/didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.

## Relationships

### Inherits From

- [NSObjectController](nsobjectcontroller.md)

### Inherited By

- [NSDictionaryController](nsdictionarycontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSEditorRegistration](nseditorregistration.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSArrayController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A bindings-compatible controller that manages a collection of objects.

## Declaration

```objectivec
@interface NSArrayController : NSObjectController
```

<a id="overview"></a>

## Overview

Typically the collection that an [NSArrayController](nsarraycontroller.md) manages is an array, however, if the controller manages a relationship of a managed object (see [NSManagedObject](https://developer.apple.com/documentation/coredata/nsmanagedobject)) the collection may be a set. [NSArrayController](nsarraycontroller.md) provides selection management and sorting capabilities.

## Topics

### Managing Sort Descriptors

- [sortDescriptors](nsarraycontroller/sortdescriptors.md): An array of sort descriptor objects, used by the receiver to arrange its content.

### Arranging Objects

- [arrangeObjects:](nsarraycontroller/arrange%28__%29.md): Returns a given array, appropriately sorted and filtered.
- [arrangedObjects](nsarraycontroller/arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrangeObjects:](nsarraycontroller/arrange%28__%29.md).
- [rearrangeObjects](nsarraycontroller/rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.

### Managing Content

- [add:](nsarraycontroller/add%28__%29.md): Creates and adds a new object to the receiver’s content and arranged objects.

### Selection Attributes

- [avoidsEmptySelection](nsarraycontroller/avoidsemptyselection.md): A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection
- [preservesSelection](nsarraycontroller/preservesselection.md): A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes
- [alwaysUsesMultipleValuesMarker](nsarraycontroller/alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected

### Managing selections

- [selectionIndex](nsarraycontroller/selectionindex.md): The index of the first object in the receiver’s selection
- [setSelectionIndex:](nsarraycontroller/setselectionindex%28__%29.md): Sets the receiver’s selection to the given index, and returns a Boolean value that indicates whether the selection was changed.
- [selectsInsertedObjects](nsarraycontroller/selectsinsertedobjects.md): A Boolean value that indicates whether the receiver automatically selects inserted objects
- [setSelectionIndexes:](nsarraycontroller/setselectionindexes%28__%29.md): Sets the receiver’s selection indexes and returns a Boolean value that indicates whether the selection changed.
- [selectionIndexes](nsarraycontroller/selectionindexes.md): An index set containing the indexes of the receiver’s currently selected objects in the content array
- [addSelectionIndexes:](nsarraycontroller/addselectionindexes%28__%29.md): Adds the objects at the specified indexes in the receiver’s content array to the current selection.
- [removeSelectionIndexes:](nsarraycontroller/removeselectionindexes%28__%29.md): Removes the object as the specified indexes from the receiver’s current selection.
- [setSelectedObjects:](nsarraycontroller/setselectedobjects%28__%29.md): Sets the specified objects as the receiver’s current selection.
- [selectedObjects](nsarraycontroller/selectedobjects.md): An array containing the receiver’s selected objects
- [addSelectedObjects:](nsarraycontroller/addselectedobjects%28__%29.md): Adds the specified objects from the receiver’s content array to the current selection.
- [removeSelectedObjects:](nsarraycontroller/removeselectedobjects%28__%29.md): Removes the specified objects from the receiver’s current selection.
- [selectNext:](nsarraycontroller/selectnext%28__%29.md): Selects the next object, relative to the current selection, in the receiver’s arranged content.
- [canSelectNext](nsarraycontroller/canselectnext.md): A Boolean value indicating whether the next object, relative to the current selection, in the receiver’s content array can be selected
- [selectPrevious:](nsarraycontroller/selectprevious%28__%29.md): Selects the previous object, relative to the current selection, in the receiver’s arranged content.
- [canSelectPrevious](nsarraycontroller/canselectprevious.md): A Boolean value indicating whether the previous object, relative to the current selection, in the receiver’s content array can be selected

### Inserting

- [canInsert](nsarraycontroller/caninsert.md): Returns a Boolean value that indicates whether an object can be inserted into the receiver’s content collection.
- [insert:](nsarraycontroller/insert%28__%29.md): Creates a new object and inserts it into the receiver’s content array.

### Adding and Removing Objects

- [addObject:](nsarraycontroller/addobject%28__%29.md): Adds `object` to the receiver’s content collection and the arranged objects array.
- [addObjects:](nsarraycontroller/add%28contentsof_%29.md): Adds `objects` to the receiver’s content collection.
- [insertObject:atArrangedObjectIndex:](nsarraycontroller/insert%28__atarrangedobjectindex_%29.md): Inserts `object` into the receiver’s arranged objects array at the location specified by `index`, and adds it to the receiver’s content collection.
- [insertObjects:atArrangedObjectIndexes:](nsarraycontroller/insert%28contentsof_atarrangedobjectindexes_%29.md): Inserts `object`s into the receiver’s arranged objects array at the locations specified in `indexes`, and adds it to the receiver’s content collection.
- [removeObjectAtArrangedObjectIndex:](nsarraycontroller/remove%28atarrangedobjectindex_%29.md): Removes the object at the specified `index` in the receiver’s arranged objects from the receiver’s content array.
- [removeObjectsAtArrangedObjectIndexes:](nsarraycontroller/remove%28atarrangedobjectindexes_%29.md): Removes the objects at the specified `indexes` in the receiver’s arranged objects from the content array.
- [remove:](nsarraycontroller/remove%28__%29.md): Removes the receiver’s selected objects from the content collection.
- [removeObject:](nsarraycontroller/removeobject%28__%29.md): Removes `object` from the receiver’s content collection.
- [removeObjects:](nsarraycontroller/remove%28contentsof_%29.md): Removes `objects` from the receiver’s content collection.

### Filtering Content

- [clearsFilterPredicateOnInsertion](nsarraycontroller/clearsfilterpredicateoninsertion.md): A Boolean value that indicates whether the receiver automatically clears an existing filter predicate when new items are inserted or added to the content
- [filterPredicate](nsarraycontroller/filterpredicate.md): A predicate used by the receiver to filter the array controller contents

### Automatic Content Rearranging

- [automaticallyRearrangesObjects](nsarraycontroller/automaticallyrearrangesobjects.md): A Boolean that indicates if the receiver automatically rearranges its content to correspond to the current sort descriptors and filter predicates
- [automaticRearrangementKeyPaths](nsarraycontroller/automaticrearrangementkeypaths.md): An array of key paths that trigger automatic content sorting or filtering
- [didChangeArrangementCriteria](nsarraycontroller/didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.

## Relationships

### Inherits From

- [NSObjectController](nsobjectcontroller.md)

### Inherited By

- [NSDictionaryController](nsdictionarycontroller.md)
