> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/indicator(_:)

# indicator(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Return an indicator’s value

## Declaration

```swift
func indicator(_ indicatorName: String!) -> Int32
```

## Parameters

- `indicatorName`: See “Hands free indicator constants,” for standard indicator names.

<a id="Discussion"></a>

## Discussion

Returns an indicator’s value.

# indicator: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Return an indicator’s value

## Declaration

```objectivec
- (int) indicator:(NSString *) indicatorName;
```

## Parameters

- `indicatorName`: See “Hands free indicator constants,” for standard indicator names.

<a id="Discussion"></a>

## Discussion

Returns an indicator’s value.
