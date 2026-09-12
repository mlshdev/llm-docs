> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelement](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelement)

# GCPhysicalInputElement (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of physical input elements.

## Declaration

```swift
protocol GCPhysicalInputElement : NSObjectProtocol
```

## Topics

### Getting a localized name

- [localizedName](gcphysicalinputelement/localizedname.md): The localized name for the element.

### Displaying a symbol

- [sfSymbolsName](gcphysicalinputelement/sfsymbolsname.md): A system symbol for the element.

### Accessing elements by key

- [aliases](gcphysicalinputelement/aliases.md): The element’s aliases to use when accessing it with the subscript notation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GCAxisElement](gcaxiselement.md)
- [GCButtonElement](gcbuttonelement.md)
- [GCDirectionPadElement](gcdirectionpadelement.md)
- [GCSwitchElement](gcswitchelement.md)

### Conforming Types

- [GCGearShifterElement](gcgearshifterelement.md)
- [GCSteeringWheelElement](gcsteeringwheelelement.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-swift.struct.md): A collection of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.

# GCPhysicalInputElement (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of physical input elements.

## Declaration

```objectivec
@protocol GCPhysicalInputElement <NSObject>
```

## Topics

### Getting a localized name

- [localizedName](gcphysicalinputelement/localizedname.md): The localized name for the element.

### Displaying a symbol

- [sfSymbolsName](gcphysicalinputelement/sfsymbolsname.md): A system symbol for the element.

### Accessing elements by key

- [aliases](gcphysicalinputelement/aliases.md): The element’s aliases to use when accessing it with the subscript notation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [GCAxisElement](gcaxiselement.md)
- [GCButtonElement](gcbuttonelement.md)
- [GCDirectionPadElement](gcdirectionpadelement.md)
- [GCSwitchElement](gcswitchelement.md)

### Conforming Types

- [GCGearShifterElement](gcgearshifterelement.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-c.class.md): A collection of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.
