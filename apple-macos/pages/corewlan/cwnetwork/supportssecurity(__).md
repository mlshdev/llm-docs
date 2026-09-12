> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetwork/supportssecurity(_:)](https://developer.apple.com/documentation/corewlan/cwnetwork/supportssecurity(_:))

# supportsSecurity(\_:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Method for determining which security types a network supports.

## Declaration

```swift
func supportsSecurity(_ security: CWSecurity) -> Bool
```

## Parameters

- `security`: The security type.

<a id="return-value"></a>

## Return Value

*YES* if the network supports the specified security type.

# supportsSecurity: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Method for determining which security types a network supports.

## Declaration

```objectivec
- (BOOL) supportsSecurity:(CWSecurity) security;
```

## Parameters

- `security`: The security type.

<a id="return-value"></a>

## Return Value

*YES* if the network supports the specified security type.
