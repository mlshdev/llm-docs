> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioobjectpropertyaddress](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioobjectpropertyaddress)

# IOUserAudioObjectPropertyAddress

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 21.0+

An object that collects the three parts — selector, scope, and element — that identify a specific property.

## Declaration

```objectivec
struct IOUserAudioObjectPropertyAddress;
```

## Topics

### Address Members

- [mSelector](iouseraudioobjectpropertyaddress/mselector.md): The selector for the property.
- [mScope](iouseraudioobjectpropertyaddress/mscope.md): The scope for the property.
- [mElement](iouseraudioobjectpropertyaddress/melement.md): The element for the property.

## See Also

### Creating a Custom Property

- [Create](../iouseraudiocustomproperty/create.md): Allocates and initializes an instance of the custom property class.
- [init](../iouseraudiocustomproperty/init.md): Initializes an instance of a custom property.
- [IOUserAudioCustomPropertyDataType](iouseraudiocustompropertydatatype.md): A data and qualifier type used for custom properties.
