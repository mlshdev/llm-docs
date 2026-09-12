> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange](https://developer.apple.com/documentation/uikit/nstextrange)

# NSTextRange (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A class that represents a contiguous range between two locations inside document contents.

## Declaration

```swift
class NSTextRange
```

<a id="overview"></a>

## Overview

An `NSTextRange` consists of the starting and terminating locations. There the two basic properties: [location](nstextrange/location.md) and [endLocation](nstextrange/endlocation.md), respectively. The terminating [location](nstextrange/location.md), [endLocation](nstextrange/endlocation.md), is directly following the last location in the range. For example, a location contains a range if `(range.location <= location) && (location < range.endLocation)` is `true`.

## Topics

### Creating a text range

- [init(location:)](nstextrange/init%28location_%29.md): Creates a new text range at the location you specify.
- [init(location:end:)](nstextrange/init%28location_end_%29.md): Creates a new text range with the starting and ending locations you specify.

### Characteristics of the text range

- [location](nstextrange/location.md): The starting location of the text range.
- [endLocation](nstextrange/endlocation.md): The ending location of the text range.
- [isEmpty](nstextrange/isempty.md): Returns whether the text range is empty.

### Comparing text ranges

- [intersection(\_:)](nstextrange/intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [intersects(\_:)](nstextrange/intersects%28__%29.md): Determines if two ranges intersect.
- [isEqual(to:)](nstextrange/isequal%28to_%29.md): Compares two text ranges.
- [union(\_:)](nstextrange/union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

### Finding text within the text range

- [contains(\_:)](nstextrange/contains%28__%29-7hvi0.md): Determines if the text location you specify is in the current text range.
- [contains(\_:)](nstextrange/contains%28__%29-5j4y2.md): Determines if the text range you specify is in the current text range.

### Initializers

- [init(location:endLocation:)](nstextrange/init%28location_endlocation_%29.md)

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

- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.

# NSTextRange (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A class that represents a contiguous range between two locations inside document contents.

## Declaration

```objectivec
@interface NSTextRange : NSObject
```

<a id="overview"></a>

## Overview

An `NSTextRange` consists of the starting and terminating locations. There the two basic properties: [location](nstextrange/location.md) and [endLocation](nstextrange/endlocation.md), respectively. The terminating [location](nstextrange/location.md), [endLocation](nstextrange/endlocation.md), is directly following the last location in the range. For example, a location contains a range if `(range.location <= location) && (location < range.endLocation)` is `true`.

## Topics

### Creating a text range

- [initWithLocation:](nstextrange/init%28location_%29.md): Creates a new text range at the location you specify.
- [initWithLocation:endLocation:](nstextrange/init%28location_end_%29.md): Creates a new text range with the starting and ending locations you specify.

### Characteristics of the text range

- [location](nstextrange/location.md): The starting location of the text range.
- [endLocation](nstextrange/endlocation.md): The ending location of the text range.
- [empty](nstextrange/isempty.md): Returns whether the text range is empty.

### Comparing text ranges

- [textRangeByIntersectingWithTextRange:](nstextrange/intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [intersectsWithTextRange:](nstextrange/intersects%28__%29.md): Determines if two ranges intersect.
- [isEqualToTextRange:](nstextrange/isequal%28to_%29.md): Compares two text ranges.
- [textRangeByFormingUnionWithTextRange:](nstextrange/union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

### Finding text within the text range

- [containsLocation:](nstextrange/contains%28__%29-7hvi0.md): Determines if the text location you specify is in the current text range.
- [containsRange:](nstextrange/contains%28__%29-5j4y2.md): Determines if the text range you specify is in the current text range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Location and selection

- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
