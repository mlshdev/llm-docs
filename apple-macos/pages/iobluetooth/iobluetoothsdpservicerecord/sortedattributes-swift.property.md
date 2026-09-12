> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/sortedattributes-swift.property](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/sortedattributes-swift.property)

# sortedAttributes (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns a sorted array of SDP attributes

## Declaration

```swift
var sortedAttributes: [Any]! { get }
```

<a id="return-value"></a>

## Return Value

Returns a sorted array of SDP attributes

<a id="Discussion"></a>

## Discussion

This method will walk all the elements of the service record and return an array of IOBluetoothSDPServiceAttribute objects sorted by attributeID

# sortedAttributes (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns a sorted array of SDP attributes

## Declaration

```objectivec
@property (copy, readonly) NSArray * sortedAttributes;
```

<a id="return-value"></a>

## Return Value

Returns a sorted array of SDP attributes

<a id="Discussion"></a>

## Discussion

This method will walk all the elements of the service record and return an array of IOBluetoothSDPServiceAttribute objects sorted by attributeID
