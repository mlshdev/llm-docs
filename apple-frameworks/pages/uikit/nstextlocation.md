> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlocation](https://developer.apple.com/documentation/uikit/nstextlocation)

# NSTextLocation (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An interface you implement that represents an abstract location inside your document’s content.

## Declaration

```swift
protocol NSTextLocation : NSObjectProtocol
```

## Topics

### Comparing text locations

- [compare(\_:)](nstextlocation/compare%28__%29.md): Compares and returns the logical ordering to location.

### Instance Properties

- [hash](nstextlocation/hash.md): Must be consistent with results from `isEqual:` while also avoiding hash collisions.

### Instance Methods

- [isEqual(\_:)](nstextlocation/isequal%28__%29.md): Returns `true` for locations representing the same document position.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.

# NSTextLocation (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An interface you implement that represents an abstract location inside your document’s content.

## Declaration

```objectivec
@protocol NSTextLocation <NSObject>
```

## Topics

### Comparing text locations

- [compare:](nstextlocation/compare%28__%29.md): Compares and returns the logical ordering to location.

### Instance Properties

- [hash](nstextlocation/hash.md): Must be consistent with results from `isEqual:` while also avoiding hash collisions.

### Instance Methods

- [isEqual:](nstextlocation/isequal%28__%29.md): Returns `true` for locations representing the same document position.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelection](nstextselection.md): A class that represents a single logical selection context that corresponds to an insertion point.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.
