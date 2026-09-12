> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/scanfornetworks(withname:includehidden:)](https://developer.apple.com/documentation/corewlan/cwinterface/scanfornetworks(withname:includehidden:))

# scanForNetworks(withName:includeHidden:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Scans for networks with the name you specify, optionally including hidden networks.

## Declaration

```swift
func scanForNetworks(withName networkName: String?, includeHidden: Bool) throws -> Set<CWNetwork>
```

## See Also

### Instance Methods

- [activePHYMode()](activephymode%28%29.md): The current active PHY modes for the interface.
- [bssid()](bssid%28%29.md): The current basic service set identifier (BSSID) for the interface, returned as a UTF-8 string.
- [cachedScanResults()](cachedscanresults%28%29.md): The networks currently in the scan cache for the WLAN interface.
- [configuration()](configuration%28%29.md): The current configuration for the given WLAN interface.
- [countryCode()](countrycode%28%29.md): The current country code (ISO/IEC 3166-1:1997) for the interface.
- [hardwareAddress()](hardwareaddress%28%29.md): The hardware media access control (MAC) address for the interface, returned as a UTF-8 string.
- [interfaceMode()](interfacemode%28%29.md): The current mode for the interface.
- [noiseMeasurement()](noisemeasurement%28%29.md): The current aggregate noise measurement (dBm) for the interface.
- [powerOn()](poweron%28%29.md): The interface power state is set to “ON”.
- [rssiValue()](rssivalue%28%29.md): The current aggregate received signal strength indication (RSSI) measurement (dBm) for the interface.
- [scanForNetworks(withSSID:includeHidden:)](scanfornetworks%28withssid_includehidden_%29.md): Scans for networks with the SSID you specify, optionally including hidden networks.
- [security()](security%28%29.md): The current security mode for the interface.
- [serviceActive()](serviceactive%28%29.md): The interface has its corresponding network service enabled.
- [ssid()](ssid%28%29.md): The current service set identifier (SSID) for the interface, encoded as a string.
- [ssidData()](ssiddata%28%29.md): The current service set identifier (SSID) for the interface, returned as data.

# scanForNetworksWithName:includeHidden:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Scans for networks with the name you specify, optionally including hidden networks.

## Declaration

```objectivec
- (NSSet<CWNetwork *> *) scanForNetworksWithName:(NSString *) networkName includeHidden:(BOOL) includeHidden error:(NSError **) error;
```

## See Also

### Instance Methods

- [activePHYMode](activephymode%28%29.md): The current active PHY modes for the interface.
- [bssid](bssid%28%29.md): The current basic service set identifier (BSSID) for the interface, returned as a UTF-8 string.
- [cachedScanResults](cachedscanresults%28%29.md): The networks currently in the scan cache for the WLAN interface.
- [configuration](configuration%28%29.md): The current configuration for the given WLAN interface.
- [countryCode](countrycode%28%29.md): The current country code (ISO/IEC 3166-1:1997) for the interface.
- [hardwareAddress](hardwareaddress%28%29.md): The hardware media access control (MAC) address for the interface, returned as a UTF-8 string.
- [interfaceMode](interfacemode%28%29.md): The current mode for the interface.
- [noiseMeasurement](noisemeasurement%28%29.md): The current aggregate noise measurement (dBm) for the interface.
- [powerOn](poweron%28%29.md): The interface power state is set to “ON”.
- [rssiValue](rssivalue%28%29.md): The current aggregate received signal strength indication (RSSI) measurement (dBm) for the interface.
- [scanForNetworksWithSSID:includeHidden:error:](scanfornetworks%28withssid_includehidden_%29.md): Scans for networks with the SSID you specify, optionally including hidden networks.
- [security](security%28%29.md): The current security mode for the interface.
- [serviceActive](serviceactive%28%29.md): The interface has its corresponding network service enabled.
- [ssid](ssid%28%29.md): The current service set identifier (SSID) for the interface, encoded as a string.
- [ssidData](ssiddata%28%29.md): The current service set identifier (SSID) for the interface, returned as data.
