> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject](https://developer.apple.com/documentation/coreaudio/audiohardwareobject)

# AudioHardwareObject

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

The audio HAL provides an abstraction through which applications can access audio hardware. To do this, the HAL provides a small set of audio objects that provide access to the various pieces of the system. Audio objects all have a set of properties that describe and manipulate their state. AudioHardwareObject is a base class for all other audio objects. As such, all classes inherit this set of properties.

## Declaration

```swift
class AudioHardwareObject
```

## Topics

### Initializers

- [init(id:)](audiohardwareobject/init%28id_%29.md)

### Instance Properties

- [baseClassID](audiohardwareobject/baseclassid.md): An AudioClassID that identifies the class from which the class of the AudioObject is derived. This value must always be one of the standard classes.
- [classID](audiohardwareobject/classid.md): An AudioClassID that identifies the class of the AudioObject.
- [creatorBundleID](audiohardwareobject/creatorbundleid.md): A String that contains the bundle ID of the plug-in that instantiated the object.
- [delegates](audiohardwareobject/delegates.md): An array of PropertyListenerDelegates used to notify property changes.
- [firmwareVersion](audiohardwareobject/firmwareversion.md): A String that contains the human readable firmware version for the object.
- [id](audiohardwareobject/id.md): A UInt32 that provides a handle on a specific AudioObject.
- [isIdentifying](audiohardwareobject/isidentifying.md): A Bool where a value of true indicates that the object’s hardware is drawing attention to itself, typically by flashing or lighting up its front panel display. A value of false indicates that this function is turned off. This makes it easy for a user to associate the physical hardware with its representation in an application. Typically, this property is only supported by AudioHardwareDevices and AudioHardwareBoxes.
- [manufacturer](audiohardwareobject/manufacturer.md): A String that contains the human readable name of the manufacturer of the hardware the object is a part of.
- [modelName](audiohardwareobject/modelname.md): A String that contains the human readable model name of the object. The model name differs from name in that two objects of the same model will have the same value for this property but may have different values for name.
- [name](audiohardwareobject/name.md): A String that contains the human readable name of the object.
- [ownedObjects](audiohardwareobject/ownedobjects.md): An array of AudioHardwareObjects that represent all the objects owned by this object.
- [owner](audiohardwareobject/owner.md): An AudioHardwareObject that identifies this object’s owner. Note that all AudioHardwareObject are owned by some other AudioHardwareObject. The only exception is the AudioSystemObject, for which the value of this property is nil.
- [serialNumber](audiohardwareobject/serialnumber.md): A String that contains the human readable serial number for the object.

### Instance Methods

- [addListener(forProperties:dispatchQueue:)](audiohardwareobject/addlistener%28forproperties_dispatchqueue_%29.md): Registers for notifications to be received on the property listener delegates when the given properties change.
- [hasProperty(address:)](audiohardwareobject/hasproperty%28address_%29.md): Queries an AudioHardwareObject about whether or not it has the given property.
- [isPropertySettable(address:)](audiohardwareobject/ispropertysettable%28address_%29.md): Queries an AudioHardwareObject about whether or not the given property can be set using setPropertyValue.
- [propertyData(address:qualifier:)](audiohardwareobject/propertydata%28address_qualifier_%29.md): Queries an AudioHardwareObject to get the data of the given property.
- [propertyDataSize(address:qualifier:)](audiohardwareobject/propertydatasize%28address_qualifier_%29.md): Queries an AudioHardwareObject to find the size of the data for the given property.
- [removeListener(forProperties:dispatchQueue:)](audiohardwareobject/removelistener%28forproperties_dispatchqueue_%29.md): Unregisters for receiving notifications when the given properties change.
- [setCreatorBundleID(\_:)](audiohardwareobject/setcreatorbundleid%28__%29.md): Set the creatorBundleID property.
- [setIsIdentifying(\_:)](audiohardwareobject/setisidentifying%28__%29.md): Set the isIdentifying property.
- [setName(\_:)](audiohardwareobject/setname%28__%29.md): Set the name property.
- [setPropertyData(address:qualifier:data:)](audiohardwareobject/setpropertydata%28address_qualifier_data_%29-4kzgv.md): Tells an AudioObject to change the value of the given property using the provided data.
- [setPropertyData(address:qualifier:data:)](audiohardwareobject/setpropertydata%28address_qualifier_data_%29-7cfn.md): Tells an AudioObject to change the value of the given property using the provided data.

## Relationships

### Inherited By

- [AudioHardwareBox](audiohardwarebox.md)
- [AudioHardwareClock](audiohardwareclock.md)
- [AudioHardwareControl](audiohardwarecontrol.md)
- [AudioHardwarePlugin](audiohardwareplugin.md)
- [AudioHardwareProcess](audiohardwareprocess.md)
- [AudioHardwareStream](audiohardwarestream.md)
- [AudioHardwareSystem](audiohardwaresystem.md)
- [AudioHardwareTap](audiohardwaretap.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
