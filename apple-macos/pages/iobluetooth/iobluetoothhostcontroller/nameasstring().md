> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/nameasstring()

# nameAsString() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Gets the “friendly” name of HCI controller.

## Declaration

```swift
func nameAsString() -> String!
```

<a id="return-value"></a>

## Return Value

Returns NSString with the device name, nil if there is not one or it cannot be read.

# nameAsString (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Gets the “friendly” name of HCI controller.

## Declaration

```objectivec
- (NSString *) nameAsString;
```

<a id="return-value"></a>

## Return Value

Returns NSString with the device name, nil if there is not one or it cannot be read.
