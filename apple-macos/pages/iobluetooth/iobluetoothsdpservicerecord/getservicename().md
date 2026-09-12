> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/getservicename()](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/getservicename())

# getServiceName() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the name of the service.

## Declaration

```swift
func getServiceName() -> String!
```

<a id="return-value"></a>

## Return Value

Returns the name of the target service.

<a id="Discussion"></a>

## Discussion

This is currently implemented to simply return the attribute with an id of 0x0100. In the future, it will be extended to allow name localization based on the user’s chosen language or other languages.

# getServiceName (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the name of the service.

## Declaration

```objectivec
- (NSString *) getServiceName;
```

<a id="return-value"></a>

## Return Value

Returns the name of the target service.

<a id="Discussion"></a>

## Discussion

This is currently implemented to simply return the attribute with an id of 0x0100. In the future, it will be extended to allow name localization based on the user’s chosen language or other languages.
