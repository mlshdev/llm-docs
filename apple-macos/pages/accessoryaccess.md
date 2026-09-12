> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess](https://developer.apple.com/documentation/accessoryaccess)

# Accessory Access (Swift)

**Framework:** Accessory Access  
**Kind:** Framework  
**Availability:** macOS 27.0+

Manage access to connected USB accessories.

<a id="Discussion"></a>

## Discussion

The AccessoryAccess framework provides access to connected USB devices that use the [IOUSBHost](iousbhost.md) framework, allowing clients to express interest through one or more registered accessory listeners.

## Topics

### Managing accessories

- [AAUSBAccessoryManager](accessoryaccess/aausbaccessorymanager.md): A class your app uses to manage USB accessories and the listener objects for those accessories.
- [AAUSBAccessory](accessoryaccess/aausbaccessory.md): A class that represents a USB accessory.

### Identifying specific USB accessories

- [AAUSBAccessoryMatchingCriteria](accessoryaccess/aausbaccessorymatchingcriteria.md): A class that represents the accessory matching criteria for a USB accessory.

### Responding to changes in accessory status

- [AAUSBAccessoryListener](accessoryaccess/aausbaccessorylistener.md): A class that conforms to the framework’s USB accessory listener protocol can listen to the accessory events.

### Errors

- [AAError](accessoryaccess/aaerror.md): Values that describe errors the AccessoryAccess framework returns.
- [AAErrorDomain](accessoryaccess/aaerrordomain.md): The string that represents the framework’s error domain.

# Accessory Access (Objective-C)

**Framework:** Accessory Access  
**Kind:** Framework  
**Availability:** macOS 27.0+

Manage access to connected USB accessories.

<a id="Discussion"></a>

## Discussion

The AccessoryAccess framework provides access to connected USB devices that use the [IOUSBHost](iousbhost.md) framework, allowing clients to express interest through one or more registered accessory listeners.

## Topics

### Managing accessories

- [AAUSBAccessoryManager](accessoryaccess/aausbaccessorymanager.md): A class your app uses to manage USB accessories and the listener objects for those accessories.
- [AAUSBAccessory](accessoryaccess/aausbaccessory.md): A class that represents a USB accessory.

### Identifying specific USB accessories

- [AAUSBAccessoryMatchingCriteria](accessoryaccess/aausbaccessorymatchingcriteria.md): A class that represents the accessory matching criteria for a USB accessory.

### Responding to changes in accessory status

- [AAUSBAccessoryListener](accessoryaccess/aausbaccessorylistener.md): A class that conforms to the framework’s USB accessory listener protocol can listen to the accessory events.

### Errors

- [AAErrorDomain](accessoryaccess/aaerrordomain.md): The string that represents the framework’s error domain.

### Macros

- [AA_EXPORT](accessoryaccess/aa_export.md)
