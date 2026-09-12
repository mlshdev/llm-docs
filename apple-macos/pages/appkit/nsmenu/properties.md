> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/properties](https://developer.apple.com/documentation/appkit/nsmenu/properties)

# NSMenu.Properties (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

These constants are used as a bitmask for specifying a set of menu or menu item properties, and are contained by the [propertiesToUpdate](propertiestoupdate.md) property.

## Declaration

```swift
struct Properties
```

## Topics

### Constants

- [propertyItemTitle](properties/propertyitemtitle.md): The menu item’s title.
- [propertyItemAttributedTitle](properties/propertyitemattributedtitle.md): The menu item’s attributed string title.
- [propertyItemKeyEquivalent](properties/propertyitemkeyequivalent.md): The menu item’s key equivalent.
- [propertyItemImage](properties/propertyitemimage.md): The menu image.
- [propertyItemEnabled](properties/propertyitemenabled.md): Whether the menu item is enabled or disabled.
- [propertyItemAccessibilityDescription](properties/propertyitemaccessibilitydescription.md): The menu item’s accessibility description.

### Creating an NSMenu Property

- [init(rawValue:)](properties/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSMenuProperties (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants are used as a bitmask for specifying a set of menu or menu item properties, and are contained by the [propertiesToUpdate](propertiestoupdate.md) property.

## Declaration

```objectivec
enum NSMenuProperties : NSUInteger;
```

## Topics

### Constants

- [NSMenuPropertyItemTitle](properties/propertyitemtitle.md): The menu item’s title.
- [NSMenuPropertyItemAttributedTitle](properties/propertyitemattributedtitle.md): The menu item’s attributed string title.
- [NSMenuPropertyItemKeyEquivalent](properties/propertyitemkeyequivalent.md): The menu item’s key equivalent.
- [NSMenuPropertyItemImage](properties/propertyitemimage.md): The menu image.
- [NSMenuPropertyItemEnabled](properties/propertyitemenabled.md): Whether the menu item is enabled or disabled.
- [NSMenuPropertyItemAccessibilityDescription](properties/propertyitemaccessibilitydescription.md): The menu item’s accessibility description.
