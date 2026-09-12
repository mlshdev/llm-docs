> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwconfiguration/isequal(to:)](https://developer.apple.com/documentation/corewlan/cwconfiguration/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Determine CWConfiguration object equality.

## Declaration

```swift
func isEqual(to configuration: CWConfiguration) -> Bool
```

## Parameters

- `configuration`: The CWConfiguration object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

CWConfiguration objects are considered equal if all their corresponding properties are equal.

# isEqualToConfiguration: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Determine CWConfiguration object equality.

## Declaration

```objectivec
- (BOOL) isEqualToConfiguration:(CWConfiguration *) configuration;
```

## Parameters

- `configuration`: The CWConfiguration object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

*YES* if the objects are equal.

<a id="Discussion"></a>

## Discussion

CWConfiguration objects are considered equal if all their corresponding properties are equal.
