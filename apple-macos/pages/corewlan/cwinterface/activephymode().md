> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/activephymode()](https://developer.apple.com/documentation/corewlan/cwinterface/activephymode())

# activePHYMode() (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

The current active PHY modes for the interface.

## Declaration

```swift
func activePHYMode() -> CWPHYMode
```

<a id="Discussion"></a>

## Discussion

Dynamically queries the interface for the current active PHY mode. Returns *kCWPHYModeNone* in the case of an error, or if the interface is not participating in a network.

## See Also

### Instance Methods

- [bssid()](bssid%28%29.md): The current basic service set identifier (BSSID) for the interface, returned as a UTF-8 string.
- [cachedScanResults()](cachedscanresults%28%29.md): The networks currently in the scan cache for the WLAN interface.
- [configuration()](configuration%28%29.md): The current configuration for the given WLAN interface.
- [countryCode()](countrycode%28%29.md): The current country code (ISO/IEC 3166-1:1997) for the interface.
- [hardwareAddress()](hardwareaddress%28%29.md): The hardware media access control (MAC) address for the interface, returned as a UTF-8 string.
- [interfaceMode()](interfacemode%28%29.md): The current mode for the interface.
- [noiseMeasurement()](noisemeasurement%28%29.md): The current aggregate noise measurement (dBm) for the interface.
- [powerOn()](poweron%28%29.md): The interface power state is set to “ON”.
- [rssiValue()](rssivalue%28%29.md): The current aggregate received signal strength indication (RSSI) measurement (dBm) for the interface.
- [scanForNetworks(withName:includeHidden:)](scanfornetworks%28withname_includehidden_%29.md): Scans for networks with the name you specify, optionally including hidden networks.
- [scanForNetworks(withSSID:includeHidden:)](scanfornetworks%28withssid_includehidden_%29.md): Scans for networks with the SSID you specify, optionally including hidden networks.
- [security()](security%28%29.md): The current security mode for the interface.
- [serviceActive()](serviceactive%28%29.md): The interface has its corresponding network service enabled.
- [ssid()](ssid%28%29.md): The current service set identifier (SSID) for the interface, encoded as a string.
- [ssidData()](ssiddata%28%29.md): The current service set identifier (SSID) for the interface, returned as data.

# activePHYMode (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

The current active PHY modes for the interface.

## Declaration

```objectivec
- (CWPHYMode) activePHYMode;
```

<a id="Discussion"></a>

## Discussion

Dynamically queries the interface for the current active PHY mode. Returns *kCWPHYModeNone* in the case of an error, or if the interface is not participating in a network.

## See Also

### Instance Methods

- [bssid](bssid%28%29.md): The current basic service set identifier (BSSID) for the interface, returned as a UTF-8 string.
- [cachedScanResults](cachedscanresults%28%29.md): The networks currently in the scan cache for the WLAN interface.
- [configuration](configuration%28%29.md): The current configuration for the given WLAN interface.
- [countryCode](countrycode%28%29.md): The current country code (ISO/IEC 3166-1:1997) for the interface.
- [hardwareAddress](hardwareaddress%28%29.md): The hardware media access control (MAC) address for the interface, returned as a UTF-8 string.
- [interfaceMode](interfacemode%28%29.md): The current mode for the interface.
- [noiseMeasurement](noisemeasurement%28%29.md): The current aggregate noise measurement (dBm) for the interface.
- [powerOn](poweron%28%29.md): The interface power state is set to “ON”.
- [rssiValue](rssivalue%28%29.md): The current aggregate received signal strength indication (RSSI) measurement (dBm) for the interface.
- [scanForNetworksWithName:includeHidden:error:](scanfornetworks%28withname_includehidden_%29.md): Scans for networks with the name you specify, optionally including hidden networks.
- [scanForNetworksWithSSID:includeHidden:error:](scanfornetworks%28withssid_includehidden_%29.md): Scans for networks with the SSID you specify, optionally including hidden networks.
- [security](security%28%29.md): The current security mode for the interface.
- [serviceActive](serviceactive%28%29.md): The interface has its corresponding network service enabled.
- [ssid](ssid%28%29.md): The current service set identifier (SSID) for the interface, encoded as a string.
- [ssidData](ssiddata%28%29.md): The current service set identifier (SSID) for the interface, returned as data.
