> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudiocustompropertydatatype](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudiocustompropertydatatype)

# IOUserAudioCustomPropertyDataType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 21.0+

A data and qualifier type used for custom properties.

## Declaration

```objectivec
enum IOUserAudioCustomPropertyDataType : uint32_t;
```

<a id="Discussion"></a>

## Discussion

Use `0` to indicate the custom property doesn’t have any data.

## Topics

### Data Types

- [Dictionary](iouseraudiocustompropertydatatype/dictionary.md): A data type that indicates the custom data is a dictionary.
- [String](iouseraudiocustompropertydatatype/string.md): A data type that indicates the custom data is a string.

### Enumeration Cases

- [None](iouseraudiocustompropertydatatype/none.md)

## See Also

### Creating a Custom Property

- [Create](../iouseraudiocustomproperty/create.md): Allocates and initializes an instance of the custom property class.
- [init](../iouseraudiocustomproperty/init.md): Initializes an instance of a custom property.
- [IOUserAudioObjectPropertyAddress](iouseraudioobjectpropertyaddress.md): An object that collects the three parts — selector, scope, and element — that identify a specific property.
