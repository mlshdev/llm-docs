> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/absearchelement](https://developer.apple.com/documentation/addressbook/absearchelement)

# ABSearchElement (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An object you use to specify a search query for records in the Address Book database.

## Declaration

```swift
class ABSearchElement
```

<a id="overview"></a>

## Overview

The `ABSearchElement` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABSearchElementRef` type is interchangeable in function or method calls with instances of the `ABSearchElement` class.

## Topics

### Searching

- [init(forConjunction:children:)](absearchelement/init%28forconjunction_children_%29.md): Returns a compound search element, created by combining the search elements in an array with the given conjunction.

### Matching

- [matchesRecord(\_:)](absearchelement/matchesrecord%28__%29.md): Tests whether or not a record matches a search element.

### Constants

- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.
- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.

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

### Search Elements

- [ABSearchElementRef](absearchelementref.md): A reference to an ABSearchElement object.

# ABSearchElement (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An object you use to specify a search query for records in the Address Book database.

## Declaration

```objectivec
@interface ABSearchElement : NSObject
```

<a id="overview"></a>

## Overview

The `ABSearchElement` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABSearchElementRef` type is interchangeable in function or method calls with instances of the `ABSearchElement` class.

## Topics

### Searching

- [searchElementForConjunction:children:](absearchelement/init%28forconjunction_children_%29.md): Returns a compound search element, created by combining the search elements in an array with the given conjunction.

### Matching

- [matchesRecord:](absearchelement/matchesrecord%28__%29.md): Tests whether or not a record matches a search element.

### Constants

- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.
- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Search Elements

- [ABSearchElementRef](absearchelementref.md): A reference to an ABSearchElement object.
