> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/accessory-service-types](https://developer.apple.com/documentation/homekit/accessory-service-types)

# Accessory Service Types

**Interface languages:** Swift, Objective-C

**Framework:** HomeKit  
**Kind:** API Collection

The service types supported by HomeKit.

<a id="overview"></a>

## Overview

An [HMService](hmservice.md) instance’s read-only [serviceType](hmservice/servicetype.md) property contains one of the values listed below to tell you what the service does.

Don’t confuse these values with the accessory categories found in [Accessory Category Types](accessory-category-types.md). Despite the similarities, they describe different things. Accessories are the physical objects that the user installs in the home, like a garage door opener. Accessories belong to a particular category, like [HMAccessoryCategoryTypeGarageDoorOpener](hmaccessorycategorytypegaragedooropener.md).

Accessories have one or more services that perform tasks. The garage door opener accessory has a garage door opener service with service type [HMServiceTypeGarageDoorOpener](hmservicetypegaragedooropener.md), given below. The same accessory might also have an attached light providing a light bulb service with service type [HMServiceTypeLightbulb](hmservicetypelightbulb.md), also given below.

## Topics

### Light

- [HMServiceTypeLightbulb](hmservicetypelightbulb.md): A light bulb service.
- [HMServiceTypeLightSensor](hmservicetypelightsensor.md): A light sensor service.

### Power and Switches

- [HMServiceTypeSwitch](hmservicetypeswitch.md): A switch service.
- [HMServiceTypeBattery](hmservicetypebattery.md): A battery service.
- [HMServiceTypeOutlet](hmservicetypeoutlet.md): An outlet service.
- [HMServiceTypeStatefulProgrammableSwitch](hmservicetypestatefulprogrammableswitch.md): A stateful programmable switch service.
- [HMServiceTypeStatelessProgrammableSwitch](hmservicetypestatelessprogrammableswitch.md): A stateless programmable switch service.

### Air Quality and Smoke Detection

- [HMServiceTypeAirPurifier](hmservicetypeairpurifier.md): An air purifier service.
- [HMServiceTypeAirQualitySensor](hmservicetypeairqualitysensor.md): An air quality sensor service.
- [HMServiceTypeCarbonDioxideSensor](hmservicetypecarbondioxidesensor.md): A carbon dioxide sensor service.
- [HMServiceTypeCarbonMonoxideSensor](hmservicetypecarbonmonoxidesensor.md): A carbon monoxide sensor service.
- [HMServiceTypeSmokeSensor](hmservicetypesmokesensor.md): A smoke sensor service.

### Temperature and Humidity

- [HMServiceTypeHeaterCooler](hmservicetypeheatercooler.md): A heater or cooler service.
- [HMServiceTypeTemperatureSensor](hmservicetypetemperaturesensor.md): A temperature sensor service.
- [HMServiceTypeThermostat](hmservicetypethermostat.md): A thermostat service.
- [HMServiceTypeFan](hmservicetypefan.md): A fan service.
- [HMServiceTypeFilterMaintenance](hmservicetypefiltermaintenance.md): A filter maintenance service.
- [HMServiceTypeHumidifierDehumidifier](hmservicetypehumidifierdehumidifier.md): A humidifier or dehumidifier service.
- [HMServiceTypeHumiditySensor](hmservicetypehumiditysensor.md): A humidity sensor service.
- [HMServiceTypeVentilationFan](hmservicetypeventilationfan.md): A ventilation fan service.

### Windows

- [HMServiceTypeWindow](hmservicetypewindow.md): A window service.
- [HMServiceTypeWindowCovering](hmservicetypewindowcovering.md): A window covering service.
- [HMServiceTypeSlats](hmservicetypeslats.md): A slats service.

### Water

- [HMServiceTypeFaucet](hmservicetypefaucet.md): A faucet service.
- [HMServiceTypeValve](hmservicetypevalve.md): A valve service.
- [HMServiceTypeIrrigationSystem](hmservicetypeirrigationsystem.md): An irrigation system service.
- [HMServiceTypeLeakSensor](hmservicetypeleaksensor.md): A leak sensor service.

### Locks and Openers

- [HMServiceTypeDoor](hmservicetypedoor.md): A door service.
- [HMServiceTypeDoorbell](hmservicetypedoorbell.md): A doorbell service.
- [HMServiceTypeGarageDoorOpener](hmservicetypegaragedooropener.md): A garage door opener service.
- [HMServiceTypeLockManagement](hmservicetypelockmanagement.md): A lock management service.
- [HMServiceTypeLockMechanism](hmservicetypelockmechanism.md): A lock mechanism service.

### Safety and Security

- [HMServiceTypeMotionSensor](hmservicetypemotionsensor.md): A motion sensor service.
- [HMServiceTypeOccupancySensor](hmservicetypeoccupancysensor.md): An occupancy sensor service.
- [HMServiceTypeSecuritySystem](hmservicetypesecuritysystem.md): A security system service.
- [HMServiceTypeContactSensor](hmservicetypecontactsensor.md): A contact sensor service.

### Video and Audio

- [HMServiceTypeCameraControl](hmservicetypecameracontrol.md): A camera control service.
- [HMServiceTypeCameraRTPStreamManagement](hmservicetypecamerartpstreammanagement.md): A stream management service.
- [HMServiceTypeMicrophone](hmservicetypemicrophone.md): A microphone service.
- [HMServiceTypeSpeaker](hmservicetypespeaker.md): An audio speaker service.
- [HMServiceTypeInputSource](hmservicetypeinputsource.md): An accessory input source service.
- [HMServiceTypeTelevision](hmservicetypetelevision.md): A television service.

### Network

- [HMServiceTypeWiFiRouter](hmservicetypewifirouter.md): A WiFi router service.
- [HMServiceTypeWiFiSatellite](hmservicetypewifisatellite.md): A Satellite WiFi router service.

### Information

- [HMServiceTypeLabel](hmservicetypelabel.md): A label namespace service used when an accessory supports multiple services of the same type.
- [HMServiceTypeAccessoryInformation](hmservicetypeaccessoryinformation.md): An accessory information service.

## See Also

### Getting the service type

- [serviceType](hmservice/servicetype.md): The type of the service.
- [localizedDescription](hmservice/localizeddescription.md): The localized description of the service.
