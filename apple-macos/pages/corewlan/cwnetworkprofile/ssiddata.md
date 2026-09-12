> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetworkprofile/ssiddata](https://developer.apple.com/documentation/corewlan/cwnetworkprofile/ssiddata)

# ssidData (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The service set identifier (SSID) for the network profile, returned as data.

## Declaration

```swift
var ssidData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The SSID is 1-32 octets.

## See Also

### Instance Properties

- [security](security.md): The security mode for the network profile.
- [ssid](ssid.md): The service set identifier (SSID) for the network profile, encoded as a string.

# ssidData (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The service set identifier (SSID) for the network profile, returned as data.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * ssidData;
```

<a id="Discussion"></a>

## Discussion

The SSID is 1-32 octets.

## See Also

### Instance Properties

- [security](security.md): The security mode for the network profile.
- [ssid](ssid.md): The service set identifier (SSID) for the network profile, encoded as a string.
