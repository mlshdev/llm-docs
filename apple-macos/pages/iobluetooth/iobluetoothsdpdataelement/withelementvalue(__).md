> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/withelementvalue(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/withelementvalue(_:))

# withElementValue(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new IOBluetoothSDPDataElement with the given value.

## Declaration

```swift
class func withElementValue(_ element: NSObject!) -> Self!
```

## Parameters

- `element`: The data element value of one of the specified types.

<a id="return-value"></a>

## Return Value

Returns the newly allocated data element object. Returns nil if there was an error parsing the element value. The returned IOBluetoothSDPDataElement object has been autoreleased, so it is not necessary for the caller to release it. If the object is to be referenced and kept around, retain should be called.

<a id="Discussion"></a>

## Discussion

The value must follow the format listed above and must be an instance of NSData, NSString, NSNumber, NSArray, NSDictionary, IOBluetoothSDPUUID.

# withElementValue: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new IOBluetoothSDPDataElement with the given value.

## Declaration

```objectivec
+ (instancetype) withElementValue:(NSObject *) element;
```

## Parameters

- `element`: The data element value of one of the specified types.

<a id="return-value"></a>

## Return Value

Returns the newly allocated data element object. Returns nil if there was an error parsing the element value. The returned IOBluetoothSDPDataElement object has been autoreleased, so it is not necessary for the caller to release it. If the object is to be referenced and kept around, retain should be called.

<a id="Discussion"></a>

## Discussion

The value must follow the format listed above and must be an instance of NSData, NSString, NSNumber, NSArray, NSDictionary, IOBluetoothSDPUUID.
