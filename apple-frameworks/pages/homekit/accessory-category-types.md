> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/accessory-category-types](https://developer.apple.com/documentation/homekit/accessory-category-types)

# Accessory Category Types

**Interface languages:** Swift, Objective-C

**Framework:** HomeKit  
**Kind:** API Collection

The accessory category types supported by HomeKit.

<a id="overview"></a>

## Overview

An [HMAccessoryCategory](hmaccessorycategory.md) instance’s read-only [categoryType](hmaccessorycategory/categorytype.md) property contains one of the values listed below to tell you what the associated accessory does.

Don’t confuse these values with the service types found in [Accessory Service Types](accessory-service-types.md). Despite the similarities, they describe different things. Accessories are the physical objects that the user installs in the home, like a garage door opener. Accessories belong to one of the categories listed here, like [HMAccessoryCategoryTypeGarageDoorOpener](hmaccessorycategorytypegaragedooropener.md).

Accessories have one or more services that perform tasks. The garage door opener accessory has a garage door opener service with service type [HMServiceTypeGarageDoorOpener](hmservicetypegaragedooropener.md). The same accessory might also have an attached light providing a light bulb service with service type [HMServiceTypeLightbulb](hmservicetypelightbulb.md).

## Topics

### Light

- [HMAccessoryCategoryTypeLightbulb](hmaccessorycategorytypelightbulb.md): A lightbulb accessory.

### Power and switches

- [HMAccessoryCategoryTypeOutlet](hmaccessorycategorytypeoutlet.md): An outlet accessory.
- [HMAccessoryCategoryTypeProgrammableSwitch](hmaccessorycategorytypeprogrammableswitch.md): A programmable switch accessory.
- [HMAccessoryCategoryTypeSwitch](hmaccessorycategorytypeswitch.md): A switch accessory.

### Air quality and smoke detection

- [HMAccessoryCategoryTypeFan](hmaccessorycategorytypefan.md): A fan accessory.
- [HMAccessoryCategoryTypeAirPurifier](hmaccessorycategorytypeairpurifier.md): An air purifier accessory.

### Temperature and humidity

- [HMAccessoryCategoryTypeThermostat](hmaccessorycategorytypethermostat.md): A thermostat accessory.
- [HMAccessoryCategoryTypeAirConditioner](hmaccessorycategorytypeairconditioner.md): An air conditioner accessory.
- [HMAccessoryCategoryTypeAirDehumidifier](hmaccessorycategorytypeairdehumidifier.md): A dehumidifier accessory.
- [HMAccessoryCategoryTypeAirHeater](hmaccessorycategorytypeairheater.md): An air heater accessory.
- [HMAccessoryCategoryTypeAirHumidifier](hmaccessorycategorytypeairhumidifier.md): A humidifier accessory.

### Windows

- [HMAccessoryCategoryTypeWindow](hmaccessorycategorytypewindow.md): A window accessory.
- [HMAccessoryCategoryTypeWindowCovering](hmaccessorycategorytypewindowcovering.md): A window covering accessory.

### Locks and openers

- [HMAccessoryCategoryTypeDoor](hmaccessorycategorytypedoor.md): A door accessory.
- [HMAccessoryCategoryTypeDoorLock](hmaccessorycategorytypedoorlock.md): A door lock accessory.
- [HMAccessoryCategoryTypeGarageDoorOpener](hmaccessorycategorytypegaragedooropener.md): A garage door opener accessory.
- [HMAccessoryCategoryTypeVideoDoorbell](hmaccessorycategorytypevideodoorbell.md): A video doorbell accessory.

### Safety and security

- [HMAccessoryCategoryTypeSensor](hmaccessorycategorytypesensor.md): A sensor accessory.
- [HMAccessoryCategoryTypeSecuritySystem](hmaccessorycategorytypesecuritysystem.md): A security system accessory.

### Cameras

- [HMAccessoryCategoryTypeIPCamera](hmaccessorycategorytypeipcamera.md): A networked camera accessory.

### Water

- [HMAccessoryCategoryTypeSprinkler](hmaccessorycategorytypesprinkler.md): A sprinkler system accessory.
- [HMAccessoryCategoryTypeFaucet](hmaccessorycategorytypefaucet.md): A faucet accessory.
- [HMAccessoryCategoryTypeShowerHead](hmaccessorycategorytypeshowerhead.md): A shower head accessory.

### Network

- [HMAccessoryCategoryTypeBridge](hmaccessorycategorytypebridge.md): A bridge accessory.
- [HMAccessoryCategoryTypeRangeExtender](hmaccessorycategorytyperangeextender.md): A range extender accessory.
- [HMAccessoryCategoryTypeAirPort](hmaccessorycategorytypeairport.md): An AirPort accessory.
- [HMAccessoryCategoryTypeWiFiRouter](hmaccessorycategorytypewifirouter.md): A WiFi router accessory.

### Audio and sound

- [HMAccessoryCategoryTypeAudioReceiver](hmaccessorycategorytypeaudioreceiver.md): An audio receiver accessory that supports HAP and AirPlay2.
- [HMAccessoryCategoryTypeSpeaker](hmaccessorycategorytypespeaker.md): A speaker accessory.

### Television

- [HMAccessoryCategoryTypeTelevision](hmaccessorycategorytypetelevision.md): A television accessory.
- [HMAccessoryCategoryTypeTelevisionSetTopBox](hmaccessorycategorytypetelevisionsettopbox.md): A television set-top box accessory.
- [HMAccessoryCategoryTypeTelevisionStreamingStick](hmaccessorycategorytypetelevisionstreamingstick.md): A television streaming stick accessory.

### Uncategorized

- [HMAccessoryCategoryTypeOther](hmaccessorycategorytypeother.md): An uncategorized accessory.

## See Also

### Reading the category type

- [categoryType](hmaccessorycategory/categorytype.md): The category to which this accessory belongs.
