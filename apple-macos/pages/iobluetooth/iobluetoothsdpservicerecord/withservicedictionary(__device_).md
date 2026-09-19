> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/withservicedictionary(_:device:)

# withServiceDictionary(\_:device:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns an IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.

## Declaration

```swift
class func withServiceDictionary(_ serviceDict: [AnyHashable : Any]!, device: IOBluetoothDevice!) -> Self!
```

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothSDPServiceRecord \* with the attributes specified in the provided dictionary.

# withServiceDictionary:device: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns an IOBluetoothSDPServiceRecord \* with the attributes specified in the provided service dictionary. Provide a pointer to an IOBlueotothDevice if you wish to associate the record to a specific IOBluetoothDevice.

## Declaration

```objectivec
+ (instancetype) withServiceDictionary:(NSDictionary *) serviceDict device:(IOBluetoothDevice *) device;
```

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothSDPServiceRecord \* with the attributes specified in the provided dictionary.
