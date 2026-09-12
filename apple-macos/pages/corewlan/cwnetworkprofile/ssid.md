> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetworkprofile/ssid](https://developer.apple.com/documentation/corewlan/cwnetworkprofile/ssid)

# ssid (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The service set identifier (SSID) for the network profile, encoded as a string.

## Declaration

```swift
var ssid: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the SSID can not be encoded as a valid UTF-8 or WinLatin1 string, this method returns *nil*.

## See Also

### Instance Properties

- [security](security.md): The security mode for the network profile.
- [ssidData](ssiddata.md): The service set identifier (SSID) for the network profile, returned as data.

# ssid (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The service set identifier (SSID) for the network profile, encoded as a string.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * ssid;
```

<a id="Discussion"></a>

## Discussion

If the SSID can not be encoded as a valid UTF-8 or WinLatin1 string, this method returns *nil*.

## See Also

### Instance Properties

- [security](security.md): The security mode for the network profile.
- [ssidData](ssiddata.md): The service set identifier (SSID) for the network profile, returned as data.
