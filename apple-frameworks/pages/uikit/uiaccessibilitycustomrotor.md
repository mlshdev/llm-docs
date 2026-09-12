> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotor](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor)

# UIAccessibilityCustomRotor (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A context-sensitive function that helps VoiceOver users find the next instance of a related element.

## Declaration

```swift
@MainActor class UIAccessibilityCustomRotor
```

<a id="overview"></a>

## Overview

You might use an instance of this class to find the next link in an article, or the next misspelled word in a document.

> **Related Sessions from WWDC20**

>  Session 10116: [VoiceOver Efficiency with Custom Rotors](https://developer.apple.com/wwdc20/10116)

## Topics

### Creating a rotor object

- [init(attributedName:itemSearch:)](uiaccessibilitycustomrotor/init%28attributedname_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [init(name:itemSearch:)](uiaccessibilitycustomrotor/init%28name_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [init(systemType:itemSearch:)](uiaccessibilitycustomrotor/init%28systemtype_itemsearch_%29.md): Creates a rotor for the specified type of item.

### Navigating to the next item

- [itemSearchBlock](uiaccessibilitycustomrotor/itemsearchblock.md): The block for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotor.Search](uiaccessibilitycustomrotor/search.md): The block type for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotor.Direction](uiaccessibilitycustomrotor/direction.md): Constants that indicate the search direction.

### Getting the rotor type

- [systemRotorType](uiaccessibilitycustomrotor/systemrotortype-swift.property.md): The type of content that the rotor searches.
- [UIAccessibilityCustomRotor.SystemRotorType](uiaccessibilitycustomrotor/systemrotortype-swift.enum.md): Constants that indicate the type of content that the rotor represents.

### Identifying the rotor

- [name](uiaccessibilitycustomrotor/name.md): The name of the rotor.
- [attributedName](uiaccessibilitycustomrotor/attributedname.md): The name of the rotor as an attributed string.

### Initializers

- [init(attributedName:itemSearchBlock:)](uiaccessibilitycustomrotor/init%28attributedname_itemsearchblock_%29.md)
- [init(name:itemSearchBlock:)](uiaccessibilitycustomrotor/init%28name_itemsearchblock_%29.md)
- [init(systemType:itemSearchBlock:)](uiaccessibilitycustomrotor/init%28systemtype_itemsearchblock_%29.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Navigation

- [UIAccessibilityCustomRotorItemResult](uiaccessibilitycustomrotoritemresult.md): A target element that a custom rotor references.
- [UIAccessibilityCustomRotorSearchPredicate](uiaccessibilitycustomrotorsearchpredicate.md): The search parameters that help determine the next matching custom rotor item result.

# UIAccessibilityCustomRotor (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A context-sensitive function that helps VoiceOver users find the next instance of a related element.

## Declaration

```objectivec
@interface UIAccessibilityCustomRotor : NSObject
```

<a id="overview"></a>

## Overview

You might use an instance of this class to find the next link in an article, or the next misspelled word in a document.

> **Related Sessions from WWDC20**

>  Session 10116: [VoiceOver Efficiency with Custom Rotors](https://developer.apple.com/wwdc20/10116)

## Topics

### Creating a rotor object

- [initWithAttributedName:itemSearchBlock:](uiaccessibilitycustomrotor/init%28attributedname_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [initWithName:itemSearchBlock:](uiaccessibilitycustomrotor/init%28name_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [initWithSystemType:itemSearchBlock:](uiaccessibilitycustomrotor/init%28systemtype_itemsearch_%29.md): Creates a rotor for the specified type of item.

### Navigating to the next item

- [itemSearchBlock](uiaccessibilitycustomrotor/itemsearchblock.md): The block for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotorSearch](uiaccessibilitycustomrotor/search.md): The block type for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotorDirection](uiaccessibilitycustomrotor/direction.md): Constants that indicate the search direction.

### Getting the rotor type

- [systemRotorType](uiaccessibilitycustomrotor/systemrotortype-swift.property.md): The type of content that the rotor searches.
- [UIAccessibilityCustomSystemRotorType](uiaccessibilitycustomrotor/systemrotortype-swift.enum.md): Constants that indicate the type of content that the rotor represents.

### Identifying the rotor

- [name](uiaccessibilitycustomrotor/name.md): The name of the rotor.
- [attributedName](uiaccessibilitycustomrotor/attributedname.md): The name of the rotor as an attributed string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Navigation

- [UIAccessibilityCustomRotorItemResult](uiaccessibilitycustomrotoritemresult.md): A target element that a custom rotor references.
- [UIAccessibilityCustomRotorSearchPredicate](uiaccessibilitycustomrotorsearchpredicate.md): The search parameters that help determine the next matching custom rotor item result.
