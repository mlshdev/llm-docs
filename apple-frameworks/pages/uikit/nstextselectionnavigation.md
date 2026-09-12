> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectionnavigation](https://developer.apple.com/documentation/uikit/nstextselectionnavigation)

# NSTextSelectionNavigation (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

An interface you use to expose methods for obtaining results from actions performed on text selections.

## Declaration

```swift
class NSTextSelectionNavigation
```

## Topics

### Creating a selection navigation

- [init(dataSource:)](nstextselectionnavigation/init%28datasource_%29.md): Creates a new object using the text selection data source you provide.

### Selection characteristics

- [allowsNonContiguousRanges](nstextselectionnavigation/allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](nstextselectionnavigation/rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigation.Modifier](nstextselectionnavigation/modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigation.Destination](nstextselectionnavigation/destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigation.Direction](nstextselectionnavigation/direction.md): Values that describe the direction of a selection.
- [textSelection(for:enclosing:inContainerAt:)](nstextselectionnavigation/textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

### Accessing the data source

- [textSelectionDataSource](nstextselectionnavigation/textselectiondatasource.md): The data source associated with this selection navigation.
- [NSTextSelectionDataSource](nstextselectiondatasource.md): A set of methods that objects implement to provide data for, and manage text selections.

### Working with text selections

- [textSelection(for:enclosing:)](nstextselectionnavigation/textselection%28for_enclosing_%29.md): Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.
- [textSelections(interactingAt:inContainerAt:anchors:modifiers:selecting:bounds:)](nstextselectionnavigation/textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): Returns an array of text selections produced by a tap or click at the point you specify.
- [destinationSelection(for:direction:destination:extending:confined:)](nstextselectionnavigation/destinationselection%28for_direction_destination_extending_confined_%29.md): Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.

### Controlling cache behavior

- [flushLayoutCache()](nstextselectionnavigation/flushlayoutcache%28%29.md): Flushes cached layout information.

### Finding the insertion point

- [resolvedInsertionLocation(for:writingDirection:)](nstextselectionnavigation/resolvedinsertionlocation%28for_writingdirection_%29.md): Returns the location for inserting the next input depending on the state of the current and secondary selections.

### Specifying deletion ranges

- [deletionRanges(for:direction:destination:allowsDecomposition:)](nstextselectionnavigation/deletionranges%28for_direction_destination_allowsdecomposition_%29.md): Returns the ranges for deleting the text based on the current selection and movement arguments.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.

# NSTextSelectionNavigation (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

An interface you use to expose methods for obtaining results from actions performed on text selections.

## Declaration

```objectivec
@interface NSTextSelectionNavigation : NSObject
```

## Topics

### Creating a selection navigation

- [initWithDataSource:](nstextselectionnavigation/init%28datasource_%29.md): Creates a new object using the text selection data source you provide.

### Selection characteristics

- [allowsNonContiguousRanges](nstextselectionnavigation/allowsnoncontiguousranges.md): Determines if the instance could produce selections with multiple noncontiguous selections.
- [rotatesCoordinateSystemForLayoutOrientation](nstextselectionnavigation/rotatescoordinatesystemforlayoutorientation.md): Determines if the framework rotates the coordinate system to match the layout orientation.
- [NSTextSelectionNavigationModifier](nstextselectionnavigation/modifier.md): Values that describe how the framework handles different kinds of selection modifiers.
- [NSTextSelectionNavigationDestination](nstextselectionnavigation/destination.md): Values that affect how the framework handles navigation across different textual boundaries during a selection.
- [NSTextSelectionNavigationDirection](nstextselectionnavigation/direction.md): Values that describe the direction of a selection.
- [textSelectionForSelectionGranularity:enclosingPoint:inContainerAtLocation:](nstextselectionnavigation/textselection%28for_enclosing_incontainerat_%29.md): Returns a text selection that expands to the nearest boundaries for selection granularity and an enclosing point you specify.

### Accessing the data source

- [textSelectionDataSource](nstextselectionnavigation/textselectiondatasource.md): The data source associated with this selection navigation.
- [NSTextSelectionDataSource](nstextselectiondatasource.md): A set of methods that objects implement to provide data for, and manage text selections.

### Working with text selections

- [textSelectionForSelectionGranularity:enclosingTextSelection:](nstextselectionnavigation/textselection%28for_enclosing_%29.md): Returns a text selection expanded to the nearest boundaries for the selection granularity and enclosing text selection text ranges you specify.
- [textSelectionsInteractingAtPoint:inContainerAtLocation:anchors:modifiers:selecting:bounds:](nstextselectionnavigation/textselections%28interactingat_incontainerat_anchors_modifiers_selecting_bounds_%29.md): Returns an array of text selections produced by a tap or click at the point you specify.
- [destinationSelectionForTextSelection:direction:destination:extending:confined:](nstextselectionnavigation/destinationselection%28for_direction_destination_extending_confined_%29.md): Returns a new selection that results from applying the navigation operations you specify to the text selection you provide.

### Controlling cache behavior

- [flushLayoutCache](nstextselectionnavigation/flushlayoutcache%28%29.md): Flushes cached layout information.

### Finding the insertion point

- [resolvedInsertionLocationForTextSelection:writingDirection:](nstextselectionnavigation/resolvedinsertionlocation%28for_writingdirection_%29.md): Returns the location for inserting the next input depending on the state of the current and secondary selections.

### Specifying deletion ranges

- [deletionRangesForTextSelection:direction:destination:allowsDecomposition:](nstextselectionnavigation/deletionranges%28for_direction_destination_allowsdecomposition_%29.md): Returns the ranges for deleting the text based on the current selection and movement arguments.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
