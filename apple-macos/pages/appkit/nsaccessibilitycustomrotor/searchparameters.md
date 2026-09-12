> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotor/searchparameters](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/searchparameters)

# NSAccessibilityCustomRotor.SearchParameters (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

Search parameters for a custom rotor.

## Declaration

```swift
class SearchParameters
```

<a id="overview"></a>

## Overview

Use these parameters to determine the next matching [NSAccessibilityCustomRotor.ItemResult](itemresult.md).

## Topics

### Managing the Current Item

- [currentItem](searchparameters/currentitem.md): The current item that determines where the search starts.
- [NSAccessibilityCustomRotor.ItemResult](itemresult.md): A target accessibility element that a custom rotor references.

### Specifying the Filter String

- [filterString](searchparameters/filterstring.md): A string of text to filter the results against.

### Specifying Search Direction

- [searchDirection](searchparameters/searchdirection.md): The direction to search for an item result.
- [NSAccessibilityCustomRotor.SearchDirection](searchdirection.md): Constants that describe the direction to search for an item result.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Finding the Next Item

- [rotor(\_:resultFor:)](../nsaccessibilitycustomrotoritemsearchdelegate/rotor%28__resultfor_%29.md): Performs a search with the specified search parameters and returns the item result.

# NSAccessibilityCustomRotorSearchParameters (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

Search parameters for a custom rotor.

## Declaration

```objectivec
@interface NSAccessibilityCustomRotorSearchParameters : NSObject
```

<a id="overview"></a>

## Overview

Use these parameters to determine the next matching [NSAccessibilityCustomRotorItemResult](itemresult.md).

## Topics

### Managing the Current Item

- [currentItem](searchparameters/currentitem.md): The current item that determines where the search starts.
- [NSAccessibilityCustomRotorItemResult](itemresult.md): A target accessibility element that a custom rotor references.

### Specifying the Filter String

- [filterString](searchparameters/filterstring.md): A string of text to filter the results against.

### Specifying Search Direction

- [searchDirection](searchparameters/searchdirection.md): The direction to search for an item result.
- [NSAccessibilityCustomRotorSearchDirection](searchdirection.md): Constants that describe the direction to search for an item result.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Finding the Next Item

- [rotor:resultForSearchParameters:](../nsaccessibilitycustomrotoritemsearchdelegate/rotor%28__resultfor_%29.md): Performs a search with the specified search parameters and returns the item result.
