> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/getvalue()](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/getvalue())

# getValue() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object value of the data element.

## Declaration

```swift
func getValue() -> NSObject!
```

<a id="return-value"></a>

## Return Value

Returns the object value of the target data element.

<a id="Discussion"></a>

## Discussion

The value returned may be an NSNumber, NSString, NSData, NSArray or IOBluetoothSDPDataElement depending on the type of the data element.

# getValue (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object value of the data element.

## Declaration

```objectivec
- (NSObject *) getValue;
```

<a id="return-value"></a>

## Return Value

Returns the object value of the target data element.

<a id="Discussion"></a>

## Discussion

The value returned may be an NSNumber, NSString, NSData, NSArray or IOBluetoothSDPDataElement depending on the type of the data element.
