> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelementcollection-c.class](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementcollection-c.class)

# GCPhysicalInputElementCollection

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A collection of physical input elements.

## Declaration

```objectivec
@interface GCPhysicalInputElementCollection : NSObject
```

## Topics

### Getting elements in the collection

- [elementEnumerator](gcphysicalinputelementcollection-c.class/elementenumerator.md): Returns an enumerator to iterate the elements in the collection.
- [count](gcphysicalinputelementcollection-c.class/count.md): The number of elements in the collection.

### Accessing elements by key and alias

- [objectForKeyedSubscript:](gcphysicalinputelementcollection-c.class/objectforkeyedsubscript_.md): Returns the element in the collection for the specified key.
- [elementForAlias:](gcphysicalinputelementcollection-c.class/elementforalias_.md): Returns the element in the collection that uses the specified alias.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Elements

- [GCPhysicalInputElement](gcphysicalinputelement.md): The common properties of physical input elements.
- [GCButtonElement](gcbuttonelement.md): The common properties of an element that represents a momentary switch, such as a push button.
- [GCAxisElement](gcaxiselement.md): The common properties for an element that represents an absolute or relative input value along an axis.
- [GCSwitchElement](gcswitchelement.md): The common properties for an element that represents a switch.
- [GCDirectionPadElement](gcdirectionpadelement.md): The common properties of elements that represent directional pads.
