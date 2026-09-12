> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/getnumbervalue()](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/getnumbervalue())

# getNumberValue() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by a number, it returns the value as an NSNumber.

## Declaration

```swift
func getNumberValue() -> NSNumber!
```

<a id="return-value"></a>

## Return Value

Returns an NSNumber representation of the data element if it is a numeric type.

<a id="Discussion"></a>

## Discussion

The data types represented by a number are 1 (unsigned int), 2 (signed int) and 5 (boolean) except for 128-bit versions of 1 and 2.

# getNumberValue (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by a number, it returns the value as an NSNumber.

## Declaration

```objectivec
- (NSNumber *) getNumberValue;
```

<a id="return-value"></a>

## Return Value

Returns an NSNumber representation of the data element if it is a numeric type.

<a id="Discussion"></a>

## Discussion

The data types represented by a number are 1 (unsigned int), 2 (signed int) and 5 (boolean) except for 128-bit versions of 1 and 2.
