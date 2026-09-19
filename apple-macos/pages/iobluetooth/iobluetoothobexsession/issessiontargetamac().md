> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/issessiontargetamac()

# isSessionTargetAMac() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tells whether the target device is a Mac by checking its service record.

## Declaration

```swift
func isSessionTargetAMac() -> Bool
```

<a id="return-value"></a>

## Return Value

TRUE only if device service record has Mac entry, FALSE for all else.

<a id="Discussion"></a>

## Discussion

Tells whether the target device is a Mac by checking its service record.

# isSessionTargetAMac (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Tells whether the target device is a Mac by checking its service record.

## Declaration

```objectivec
- (BOOL) isSessionTargetAMac;
```

<a id="return-value"></a>

## Return Value

TRUE only if device service record has Mac entry, FALSE for all else.

<a id="Discussion"></a>

## Discussion

Tells whether the target device is a Mac by checking its service record.
