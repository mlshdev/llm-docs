> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/init(servicedictionary:device:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/init(servicedictionary:device:))

# init(serviceDictionary:device:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Returns an initialized IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.

## Declaration

```swift
init!(serviceDictionary serviceDict: [AnyHashable : Any]!, device: IOBluetoothDevice!)
```

# initWithServiceDictionary:device: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns an initialized IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.

## Declaration

```objectivec
- (instancetype) initWithServiceDictionary:(NSDictionary *) serviceDict device:(IOBluetoothDevice *) device;
```
