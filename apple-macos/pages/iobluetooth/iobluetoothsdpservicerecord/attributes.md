> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/attributes](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/attributes)

# attributes (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns an NSDictionary containing the attributes for the service.

## Declaration

```swift
var attributes: [AnyHashable : Any]! { get }
```

<a id="return-value"></a>

## Return Value

Returns an NSDictionary containing the attributes for the target service.

<a id="Discussion"></a>

## Discussion

The attribute dictionary is keyed off of the attribute id represented as an NSNumber. The values in the NSDictionary are IOBluetoothSDPDataElement objects representing the data element for the given attribute.

# attributes (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns an NSDictionary containing the attributes for the service.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary * attributes;
```

<a id="return-value"></a>

## Return Value

Returns an NSDictionary containing the attributes for the target service.

<a id="Discussion"></a>

## Discussion

The attribute dictionary is keyed off of the attribute id represented as an NSNumber. The values in the NSDictionary are IOBluetoothSDPDataElement objects representing the data element for the given attribute.
