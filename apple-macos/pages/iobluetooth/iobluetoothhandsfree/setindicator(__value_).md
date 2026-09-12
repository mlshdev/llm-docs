> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree/setindicator(_:value:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/setindicator(_:value:))

# setIndicator(\_:value:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Set an indicator’s value

## Declaration

```swift
func setIndicator(_ indicatorName: String!, value indicatorValue: Int32)
```

## Parameters

- `indicatorName`: See “Hands free indicator constants,” for standard indicator names.
- `indicatorValue`: Will set the indicator value as long as it is within the min and max values allowed.

<a id="Discussion"></a>

## Discussion

Sets an indicator’s value.

# setIndicator:value: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Set an indicator’s value

## Declaration

```objectivec
- (void) setIndicator:(NSString *) indicatorName value:(int) indicatorValue;
```

## Parameters

- `indicatorName`: See “Hands free indicator constants,” for standard indicator names.
- `indicatorValue`: Will set the indicator value as long as it is within the min and max values allowed.

<a id="Discussion"></a>

## Discussion

Sets an indicator’s value.
