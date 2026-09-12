> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcbuttonelement](https://developer.apple.com/documentation/gamecontroller/gcbuttonelement)

# GCButtonElement (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of an element that represents a momentary switch, such as a push button.

## Declaration

```swift
protocol GCButtonElement : GCPhysicalInputElement
```

## Topics

### Getting input state

- [touchedInput](gcbuttonelement/touchedinput.md): The input object that provides the touch state of the element.
- [pressedInput](gcbuttonelement/pressedinput.md): The input object that provides the linear and press state of the element.

### Instance Properties

- [forceInput](gcbuttonelement/forceinput.md): Get the input containing the measured force applied to the button.

## Relationships

### Inherits From

- [GCPhysicalInputElement](gcphysicalinputelement.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-swift.struct.md): A collection of physical input elements.
- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.

# GCButtonElement (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of an element that represents a momentary switch, such as a push button.

## Declaration

```objectivec
@protocol GCButtonElement <GCPhysicalInputElement>
```

## Topics

### Getting input state

- [touchedInput](gcbuttonelement/touchedinput.md): The input object that provides the touch state of the element.
- [pressedInput](gcbuttonelement/pressedinput.md): The input object that provides the linear and press state of the element.

### Instance Properties

- [forceInput](gcbuttonelement/forceinput.md): Get the input containing the measured force applied to the button.

## Relationships

### Inherits From

- [GCPhysicalInputElement](gcphysicalinputelement.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-c.class.md): A collection of physical input elements.
- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.
