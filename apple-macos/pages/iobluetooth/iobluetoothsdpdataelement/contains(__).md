> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/contains(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/contains(_:))

# contains(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Checks to see if the target data element is the same as the dataElement parameter or if it contains the dataElement parameter (if its a sequence type).

## Declaration

```swift
func contains(_ dataElement: IOBluetoothSDPDataElement!) -> Bool
```

## Parameters

- `dataElement`: The data element to compare with (and search for).

<a id="return-value"></a>

## Return Value

Returns TRUE if the target either matches the given data element or if it contains the given data element.

<a id="Discussion"></a>

## Discussion

If the target data element is not a sequence type, this method simply compares the two data elements. If it is a sequence type, it will search through the sequence (and sub-sequences) for the dataElement parameter.

# containsDataElement: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Checks to see if the target data element is the same as the dataElement parameter or if it contains the dataElement parameter (if its a sequence type).

## Declaration

```objectivec
- (BOOL) containsDataElement:(IOBluetoothSDPDataElement *) dataElement;
```

## Parameters

- `dataElement`: The data element to compare with (and search for).

<a id="return-value"></a>

## Return Value

Returns TRUE if the target either matches the given data element or if it contains the given data element.

<a id="Discussion"></a>

## Discussion

If the target data element is not a sequence type, this method simply compares the two data elements. If it is a sequence type, it will search through the sequence (and sub-sequences) for the dataElement parameter.
