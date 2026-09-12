> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/getarrayvalue()](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/getarrayvalue())

# getArrayValue() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by an array object, it returns the value as an NSArray.

## Declaration

```swift
func getArrayValue() -> [Any]!
```

<a id="return-value"></a>

## Return Value

Returns an NSArray representation of the data element if it is a sequence type.

<a id="Discussion"></a>

## Discussion

The data types represented by an array object are 6 (data element sequence) and 7 (data element alternative).

# getArrayValue (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by an array object, it returns the value as an NSArray.

## Declaration

```objectivec
- (NSArray *) getArrayValue;
```

<a id="return-value"></a>

## Return Value

Returns an NSArray representation of the data element if it is a sequence type.

<a id="Discussion"></a>

## Discussion

The data types represented by an array object are 6 (data element sequence) and 7 (data element alternative).
