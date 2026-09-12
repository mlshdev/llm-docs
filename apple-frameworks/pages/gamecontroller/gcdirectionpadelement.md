> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdirectionpadelement](https://developer.apple.com/documentation/gamecontroller/gcdirectionpadelement)

# GCDirectionPadElement (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of elements that represent directional pads.

## Declaration

```swift
protocol GCDirectionPadElement : GCPhysicalInputElement
```

## Topics

### Directional buttons

- [left](gcdirectionpadelement/left.md): The input object that represents the left button on the directional pad.
- [right](gcdirectionpadelement/right.md): The input object that represents the right button on the directional pad.
- [up](gcdirectionpadelement/up.md): The input object that represents the up button on the directional pad.
- [down](gcdirectionpadelement/down.md): The input object that represents the down button on the directional pad.

### Axes

- [xAxis](gcdirectionpadelement/xaxis.md): The input object that represents the x-axis on the directional pad.
- [yAxis](gcdirectionpadelement/yaxis.md): The input object that represents the y-axis on the directional pad.
- [xyAxes](gcdirectionpadelement/xyaxes.md): The location of the directional pad represented as a point.
- [GCAxis2DInput](gcaxis2dinput.md): The common properties of inputs that provide a normalized point in a two-dimensional coordinate system with a fixed origin.

## Relationships

### Inherits From

- [GCPhysicalInputElement](gcphysicalinputelement.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-swift.struct.md): A collection of physical input elements.
- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.

# GCDirectionPadElement (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of elements that represent directional pads.

## Declaration

```objectivec
@protocol GCDirectionPadElement <GCPhysicalInputElement>
```

## Topics

### Directional buttons

- [left](gcdirectionpadelement/left.md): The input object that represents the left button on the directional pad.
- [right](gcdirectionpadelement/right.md): The input object that represents the right button on the directional pad.
- [up](gcdirectionpadelement/up.md): The input object that represents the up button on the directional pad.
- [down](gcdirectionpadelement/down.md): The input object that represents the down button on the directional pad.

### Axes

- [xAxis](gcdirectionpadelement/xaxis.md): The input object that represents the x-axis on the directional pad.
- [yAxis](gcdirectionpadelement/yaxis.md): The input object that represents the y-axis on the directional pad.
- [xyAxes](gcdirectionpadelement/xyaxes.md): The location of the directional pad represented as a point.
- [GCAxis2DInput](gcaxis2dinput.md): The common properties of inputs that provide a normalized point in a two-dimensional coordinate system with a fixed origin.

## Relationships

### Inherits From

- [GCPhysicalInputElement](gcphysicalinputelement.md)

## See Also

### Elements

- [GCPhysicalInputElementCollection](gcphysicalinputelementcollection-c.class.md): A collection of physical input elements.
- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
