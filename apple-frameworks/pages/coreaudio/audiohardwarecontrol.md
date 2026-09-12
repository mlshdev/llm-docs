> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwarecontrol](https://developer.apple.com/documentation/coreaudio/audiohardwarecontrol)

# AudioHardwareControl

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwareControl class encapsulate a single audio control, which provides properties that describe/manipulate a particular aspect of the owning device such as gain, mute, data source selection, etc.

## Declaration

```swift
class AudioHardwareControl
```

## Topics

### Initializers

- [init(id:)](audiohardwarecontrol/init%28id_%29.md)

### Instance Properties

- [availableItems](audiohardwarecontrol/availableitems.md): An array of UInt32s that represent the IDs of all the items available.
- [booleanValue](audiohardwarecontrol/booleanvalue.md): A Bool that represents the value of the boolean control.
- [element](audiohardwarecontrol/element.md): An AudioObjectPropertyElement that indicates which element of the owning device the control applies to.
- [scope](audiohardwarecontrol/scope.md): An AudioObjectPropertyScope that indicates which part of the owning device the control applies to.
- [selectedItems](audiohardwarecontrol/selecteditems.md): An array of UInt32s that are the IDs of the items currently selected.
- [sliderRange](audiohardwarecontrol/sliderrange.md): An array of two UInt32s that represents the inclusive range of values the slider control can take.
- [sliderValue](audiohardwarecontrol/slidervalue.md): A UInt32 that represents the value of the slider control.
- [stereoPanChannels](audiohardwarecontrol/stereopanchannels.md): An array of two UInt32s that indicate which elements of the device the signal is being panned between.
- [stereoPanValue](audiohardwarecontrol/stereopanvalue.md): A Float where 0.0 is full left, 1.0 is full right, and 0.5 is center.
- [volumeDecibelRange](audiohardwarecontrol/volumedecibelrange.md): An AudioValueRange that contains the minimum and maximum dB values the control can have.
- [volumeDecibelValue](audiohardwarecontrol/volumedecibelvalue.md): A Float that represents the value of the volume control in dB.
- [volumeScalarValue](audiohardwarecontrol/volumescalarvalue.md): A Float that represents the value of the volume control. The range is between 0.0 and 1.0 (inclusive).

### Instance Methods

- [convertToDecibels(fromScalar:)](audiohardwarecontrol/converttodecibels%28fromscalar_%29.md): Convert a volume scalar value to the equivalent dB value.
- [convertToScalar(fromDecibels:)](audiohardwarecontrol/converttoscalar%28fromdecibels_%29.md): Convert a volume dB value to the equivalent scalar value.
- [selectorItemKind(fromID:)](audiohardwarecontrol/selectoritemkind%28fromid_%29.md): This property returns a UInt32 that identifies the kind of selector item the item ID refers to.
- [selectorItemName(fromID:)](audiohardwarecontrol/selectoritemname%28fromid_%29.md): Translates the given item ID into a human readable name.
- [setBooleanValue(\_:)](audiohardwarecontrol/setbooleanvalue%28__%29.md): Set the booleanValue property.
- [setSelectedItems(\_:)](audiohardwarecontrol/setselecteditems%28__%29.md): Set the selectedItems property.
- [setSliderValue(\_:)](audiohardwarecontrol/setslidervalue%28__%29.md): Set the sliderValue property.
- [setStereoPanValue(\_:)](audiohardwarecontrol/setstereopanvalue%28__%29.md): Set the stereoPanValue property.
- [setVolumeDecibelValue(\_:)](audiohardwarecontrol/setvolumedecibelvalue%28__%29.md): Set the decibelScalarValue property.
- [setVolumeScalarValue(\_:)](audiohardwarecontrol/setvolumescalarvalue%28__%29.md): Set the volumeScalarValue property.

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
