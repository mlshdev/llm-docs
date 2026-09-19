> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corewlan/cwnetworkprofile/isequal(to:)

# isEqual(to:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Determine CWNetworkProfile object equality.

## Declaration

```swift
func isEqual(to networkProfile: CWNetworkProfile) -> Bool
```

## Parameters

- `networkProfile`: The CWNetworkProfile object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

CWNetwork objects are considered equal if their corresponding *ssidData* and *securityType* properties are equal.

# isEqualToNetworkProfile: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Determine CWNetworkProfile object equality.

## Declaration

```objectivec
- (BOOL) isEqualToNetworkProfile:(CWNetworkProfile *) networkProfile;
```

## Parameters

- `networkProfile`: The CWNetworkProfile object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

CWNetwork objects are considered equal if their corresponding *ssidData* and *securityType* properties are equal.
