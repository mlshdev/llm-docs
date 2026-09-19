> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/sortedattributes-swift.property

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
