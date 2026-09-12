> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotor](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor)

# NSAccessibilityCustomRotor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A context-sensitive function that helps VoiceOver users find the next instance of a related accessibility element.

## Declaration

```swift
class NSAccessibilityCustomRotor
```

<a id="overview"></a>

## Overview

Assistive apps, like VoiceOver, provide interfaces to quickly search apps for content of a specific type. For example, in a web browser, a user can quickly explore a list of navigational links or buttons using VoiceOver’s content menus.

[NSAccessibilityCustomRotor](nsaccessibilitycustomrotor.md) provides a way for apps to vend their own content menus. For example, Pages can create a *Headings* custom rotor that allows assistive apps to search the Pages document for all headings.

## Topics

### Creating a Rotor

- [init(label:itemSearchDelegate:)](nsaccessibilitycustomrotor/init%28label_itemsearchdelegate_%29.md): Creates a custom rotor with the specified label and item search delegate.
- [init(rotorType:itemSearchDelegate:)](nsaccessibilitycustomrotor/init%28rotortype_itemsearchdelegate_%29.md): Creates a custom rotor with the specified rotor type and item search delegate.

### Navigating to the Next Item

- [itemSearchDelegate](nsaccessibilitycustomrotor/itemsearchdelegate.md): The delegate for finding the next item result.
- [NSAccessibilityCustomRotorItemSearchDelegate](nsaccessibilitycustomrotoritemsearchdelegate.md): A delegate for a custom rotor that finds the next item result after performing a search with the specified search parameters.

### Loading the Item

- [itemLoadingDelegate](nsaccessibilitycustomrotor/itemloadingdelegate.md): The delegate for loading item results that don’t have a backing UI element at loading time.
- [NSAccessibilityElementLoading](nsaccessibilityelementloading.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.

### Getting the Rotor Type

- [type](nsaccessibilitycustomrotor/type.md): The type of content that the rotor represents.
- [NSAccessibilityCustomRotor.RotorType](nsaccessibilitycustomrotor/rotortype.md): Constants that indicate the type of content that the rotor represents.

### Identifying the Rotor

- [label](nsaccessibilitycustomrotor/label.md): The localized label that assistive apps use to describe the custom rotor.

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

### Assigning rotors

- [accessibilityCustomRotors()](nsaccessibilityprotocol/accessibilitycustomrotors%28%29.md): Returns the custom rotors of the current accessibility element.
- [setAccessibilityCustomRotors(\_:)](nsaccessibilityprotocol/setaccessibilitycustomrotors%28__%29.md): Sets the custom rotors of the current accessibility element.

# NSAccessibilityCustomRotor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A context-sensitive function that helps VoiceOver users find the next instance of a related accessibility element.

## Declaration

```objectivec
@interface NSAccessibilityCustomRotor : NSObject
```

<a id="overview"></a>

## Overview

Assistive apps, like VoiceOver, provide interfaces to quickly search apps for content of a specific type. For example, in a web browser, a user can quickly explore a list of navigational links or buttons using VoiceOver’s content menus.

[NSAccessibilityCustomRotor](nsaccessibilitycustomrotor.md) provides a way for apps to vend their own content menus. For example, Pages can create a *Headings* custom rotor that allows assistive apps to search the Pages document for all headings.

## Topics

### Creating a Rotor

- [initWithLabel:itemSearchDelegate:](nsaccessibilitycustomrotor/init%28label_itemsearchdelegate_%29.md): Creates a custom rotor with the specified label and item search delegate.
- [initWithRotorType:itemSearchDelegate:](nsaccessibilitycustomrotor/init%28rotortype_itemsearchdelegate_%29.md): Creates a custom rotor with the specified rotor type and item search delegate.

### Navigating to the Next Item

- [itemSearchDelegate](nsaccessibilitycustomrotor/itemsearchdelegate.md): The delegate for finding the next item result.
- [NSAccessibilityCustomRotorItemSearchDelegate](nsaccessibilitycustomrotoritemsearchdelegate.md): A delegate for a custom rotor that finds the next item result after performing a search with the specified search parameters.

### Loading the Item

- [itemLoadingDelegate](nsaccessibilitycustomrotor/itemloadingdelegate.md): The delegate for loading item results that don’t have a backing UI element at loading time.
- [NSAccessibilityElementLoading](nsaccessibilityelementloading.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.

### Getting the Rotor Type

- [type](nsaccessibilitycustomrotor/type.md): The type of content that the rotor represents.
- [NSAccessibilityCustomRotorType](nsaccessibilitycustomrotor/rotortype.md): Constants that indicate the type of content that the rotor represents.

### Identifying the Rotor

- [label](nsaccessibilitycustomrotor/label.md): The localized label that assistive apps use to describe the custom rotor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Assigning rotors

- [accessibilityCustomRotors](nsaccessibility-c.protocol/accessibilitycustomrotors.md): The custom rotors of the current accessibility element.
