> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselectiondatasource](https://developer.apple.com/documentation/uikit/nstextselectiondatasource)

# NSTextSelectionDataSource (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A set of methods that objects implement to provide data for, and manage text selections.

## Declaration

```swift
protocol NSTextSelectionDataSource : NSObjectProtocol
```

## Topics

### Range of the selection

- [documentRange](nstextselectiondatasource/documentrange.md): Returns the starting and ending locations for the document.

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragment(at:using:)](nstextselectiondatasource/enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateContainerBoundaries(from:reverse:using:)](nstextselectiondatasource/enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.
- [enumerateSubstrings(from:options:using:)](nstextselectiondatasource/enumeratesubstrings%28from_options_using_%29.md): Enumerates the textual segment boundaries starting at the location you specify.

### Finding specific content in the selection

- [location(\_:offsetBy:)](nstextselectiondatasource/location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [lineFragmentRange(for:inContainerAt:)](nstextselectiondatasource/linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [offset(from:to:)](nstextselectiondatasource/offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRange(for:enclosing:)](nstextselectiondatasource/textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.

### Changing the characteristics of the selection

- [baseWritingDirection(at:)](nstextselectiondatasource/basewritingdirection%28at_%29.md): Returns the base writing direction at the location you specify.
- [NSTextSelectionNavigation.WritingDirection](nstextselectionnavigation/writingdirection.md): Values that describe the writing direction inside a text selection.
- [textLayoutOrientation(at:)](nstextselectiondatasource/textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.
- [NSTextSelectionNavigation.LayoutOrientation](nstextselectionnavigation/layoutorientation.md): Values that describe the possible layout orientations.

### Instance Methods

- [convertInteractionPoint(\_:toContainerAt:)](nstextselectiondatasource/convertinteractionpoint%28__tocontainerat_%29.md): Converts an interaction point from display space into the text container’s coordinate system.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextLayoutManager](nstextlayoutmanager.md)

## See Also

### Accessing the data source

- [textSelectionDataSource](nstextselectionnavigation/textselectiondatasource.md): The data source associated with this selection navigation.

# NSTextSelectionDataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A set of methods that objects implement to provide data for, and manage text selections.

## Declaration

```objectivec
@protocol NSTextSelectionDataSource <NSObject>
```

## Topics

### Range of the selection

- [documentRange](nstextselectiondatasource/documentrange.md): Returns the starting and ending locations for the document.

### Enumerating components of the selection

- [enumerateCaretOffsetsInLineFragmentAtLocation:usingBlock:](nstextselectiondatasource/enumeratecaretoffsetsinlinefragment%28at_using_%29.md): Enumerates all the insertion point caret offsets from left to right in visual order.
- [enumerateContainerBoundariesFromLocation:reverse:usingBlock:](nstextselectiondatasource/enumeratecontainerboundaries%28from_reverse_using_%29.md): Enumerates all the container boundaries starting from the location you specify.
- [enumerateSubstringsFromLocation:options:usingBlock:](nstextselectiondatasource/enumeratesubstrings%28from_options_using_%29.md): Enumerates the textual segment boundaries starting at the location you specify.

### Finding specific content in the selection

- [locationFromLocation:withOffset:](nstextselectiondatasource/location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [lineFragmentRangeForPoint:inContainerAtLocation:](nstextselectiondatasource/linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [offsetFromLocation:toLocation:](nstextselectiondatasource/offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRangeForSelectionGranularity:enclosingLocation:](nstextselectiondatasource/textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.

### Changing the characteristics of the selection

- [baseWritingDirectionAtLocation:](nstextselectiondatasource/basewritingdirection%28at_%29.md): Returns the base writing direction at the location you specify.
- [NSTextSelectionNavigationWritingDirection](nstextselectionnavigation/writingdirection.md): Values that describe the writing direction inside a text selection.
- [textLayoutOrientationAtLocation:](nstextselectiondatasource/textlayoutorientation%28at_%29.md): Returns the layout orientation at the location you specify.
- [NSTextSelectionNavigationLayoutOrientation](nstextselectionnavigation/layoutorientation.md): Values that describe the possible layout orientations.

### Instance Methods

- [convertInteractionPoint:toContainerAtLocation:](nstextselectiondatasource/convertinteractionpoint%28__tocontainerat_%29.md): Converts an interaction point from display space into the text container’s coordinate system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextLayoutManager](nstextlayoutmanager.md)

## See Also

### Accessing the data source

- [textSelectionDataSource](nstextselectionnavigation/textselectiondatasource.md): The data source associated with this selection navigation.
