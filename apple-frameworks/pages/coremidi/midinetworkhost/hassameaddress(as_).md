> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworkhost/hassameaddress(as:)](https://developer.apple.com/documentation/coremidi/midinetworkhost/hassameaddress(as:))

# hasSameAddress(as:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Compares this host instance with another to see if they share the same address value.

## Declaration

```swift
func hasSameAddress(as other: MIDINetworkHost) -> Bool
```

## Parameters

- `other`: The other host instance to compare.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the hosts have the same address value.

# hasSameAddressAs: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Compares this host instance with another to see if they share the same address value.

## Declaration

```objectivec
- (BOOL) hasSameAddressAs:(MIDINetworkHost *) other;
```

## Parameters

- `other`: The other host instance to compare.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the hosts have the same address value.
