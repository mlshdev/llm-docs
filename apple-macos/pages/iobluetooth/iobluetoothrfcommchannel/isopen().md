> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/isopen()

# isOpen() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the state of the channel.

## Declaration

```swift
func isOpen() -> Bool
```

<a id="return-value"></a>

## Return Value

TRUE if the channel state is open, FALSE otherwise.

<a id="Discussion"></a>

## Discussion

note that “not open” means closed, opening and closing.

# isOpen (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the state of the channel.

## Declaration

```objectivec
- (BOOL) isOpen;
```

<a id="return-value"></a>

## Return Value

TRUE if the channel state is open, FALSE otherwise.

<a id="Discussion"></a>

## Discussion

note that “not open” means closed, opening and closing.
