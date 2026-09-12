> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/getdatavalue()](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/getdatavalue())

# getDataValue() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by a data object, it returns the value as an NSData.

## Declaration

```swift
func getDataValue() -> Data!
```

<a id="return-value"></a>

## Return Value

Returns an NSData representation of the data element if it is a 128-bit number.

<a id="Discussion"></a>

## Discussion

The data types represented by a data object are 128-bit versions of 1 (unsigned int) and 2 (signed int).

# getDataValue (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by a data object, it returns the value as an NSData.

## Declaration

```objectivec
- (NSData *) getDataValue;
```

<a id="return-value"></a>

## Return Value

Returns an NSData representation of the data element if it is a 128-bit number.

<a id="Discussion"></a>

## Discussion

The data types represented by a data object are 128-bit versions of 1 (unsigned int) and 2 (signed int).
