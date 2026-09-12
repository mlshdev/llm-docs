> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/containsvalue(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/containsvalue(_:))

# containsValue(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Checks to see if the target data element’s value is the same as the value parameter or if it contains the value parameter.

## Declaration

```swift
func containsValue(_ cmpValue: NSObject!) -> Bool
```

## Parameters

- `cmpValue`: The value to compare with (and search for).

<a id="return-value"></a>

## Return Value

Returns TRUE if the target’s value either matches the given value or if it contains the given value.

<a id="Discussion"></a>

## Discussion

This method works just like -containsDataElement: except that it is comparing the value objects directly.

# containsValue: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Checks to see if the target data element’s value is the same as the value parameter or if it contains the value parameter.

## Declaration

```objectivec
- (BOOL) containsValue:(NSObject *) cmpValue;
```

## Parameters

- `cmpValue`: The value to compare with (and search for).

<a id="return-value"></a>

## Return Value

Returns TRUE if the target’s value either matches the given value or if it contains the given value.

<a id="Discussion"></a>

## Discussion

This method works just like -containsDataElement: except that it is comparing the value objects directly.
