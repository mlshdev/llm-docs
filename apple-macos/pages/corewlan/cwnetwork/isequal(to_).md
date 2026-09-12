> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetwork/isequal(to:)](https://developer.apple.com/documentation/corewlan/cwnetwork/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Method for determining CWNetwork object equality.

## Declaration

```swift
func isEqual(to network: CWNetwork) -> Bool
```

## Parameters

- `network`: The CWNetwork object for which to test equality.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

Two CWNetwork objects are considered equal if their corresponding *ssidData*, *securityType*, and *networkType* properties are equal.

# isEqualToNetwork: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Method for determining CWNetwork object equality.

## Declaration

```objectivec
- (BOOL) isEqualToNetwork:(CWNetwork *) network;
```

## Parameters

- `network`: The CWNetwork object for which to test equality.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

Two CWNetwork objects are considered equal if their corresponding *ssidData*, *securityType*, and *networkType* properties are equal.
