> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/getstringvalue()](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/getstringvalue())

# getStringValue() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by a string object, it returns the value as an NSString.

## Declaration

```swift
func getStringValue() -> String!
```

<a id="return-value"></a>

## Return Value

Returns an NSString representation of the data element if it is a text or URL type.

<a id="Discussion"></a>

## Discussion

The data types represented by a string object are 4 (text string) and 8 (URL).

# getStringValue (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is represented by a string object, it returns the value as an NSString.

## Declaration

```objectivec
- (NSString *) getStringValue;
```

<a id="return-value"></a>

## Return Value

Returns an NSString representation of the data element if it is a text or URL type.

<a id="Discussion"></a>

## Discussion

The data types represented by a string object are 4 (text string) and 8 (URL).
