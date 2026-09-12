> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxiselement](https://developer.apple.com/documentation/gamecontroller/gcaxiselement)

# GCAxisElement (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for an element that represents an absolute or relative input value along an axis.

## Declaration

```swift
protocol GCAxisElement : GCPhysicalInputElement
```

## Topics

### Getting the inputs

- [absoluteInput](gcaxiselement/absoluteinput.md): An input object that provides absolute axis values.
- [relativeInput](gcaxiselement/relativeinput.md): An input object that provides relative axis values.

## Relationships

### Inherits From

- [GCPhysicalInputElement](gcphysicalinputelement.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [GCSteeringWheelElement](gcsteeringwheelelement.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-swift.struct.md): A collection of physical input elements.
- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.

# GCAxisElement (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for an element that represents an absolute or relative input value along an axis.

## Declaration

```objectivec
@protocol GCAxisElement <GCPhysicalInputElement>
```

## Topics

### Getting the inputs

- [absoluteInput](gcaxiselement/absoluteinput.md): An input object that provides absolute axis values.
- [relativeInput](gcaxiselement/relativeinput.md): An input object that provides relative axis values.

## Relationships

### Inherits From

- [GCPhysicalInputElement](gcphysicalinputelement.md)

### Conforming Types

- [GCSteeringWheelElement](gcsteeringwheelelement.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-c.class.md): A collection of physical input elements.
- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.
