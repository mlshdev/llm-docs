> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetwork/informationelementdata](https://developer.apple.com/documentation/corewlan/cwnetwork/informationelementdata)

# informationElementData (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Information element data included in beacon or probe response frames.

## Declaration

```swift
var informationElementData: Data? { get }
```

## See Also

### Instance Properties

- [beaconInterval](beaconinterval.md): The beacon interval (ms) for the network.
- [bssid](bssid.md): The basic service set identifier (BSSID) for the network, returned as UTF-8 string.
- [countryCode](countrycode.md): The country code (ISO/IEC 3166-1:1997) for the network.
- [ibss](ibss.md): The network is an IBSS network.
- [noiseMeasurement](noisemeasurement.md): The aggregate noise measurement (dBm) for the network.
- [rssiValue](rssivalue.md): The aggregate received signal strength indication (RSSI) measurement (dBm) for the network.
- [ssid](ssid.md): The service set identifier (SSID) for the network, encoded as a string.
- [ssidData](ssiddata.md): The service set identifier (SSID) for the network, returned as data.
- [wlanChannel](wlanchannel.md): The channel for the network.

# informationElementData (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Information element data included in beacon or probe response frames.

## Declaration

```objectivec
@property (readonly, nullable) NSData * informationElementData;
```

## See Also

### Instance Properties

- [beaconInterval](beaconinterval.md): The beacon interval (ms) for the network.
- [bssid](bssid.md): The basic service set identifier (BSSID) for the network, returned as UTF-8 string.
- [countryCode](countrycode.md): The country code (ISO/IEC 3166-1:1997) for the network.
- [ibss](ibss.md): The network is an IBSS network.
- [noiseMeasurement](noisemeasurement.md): The aggregate noise measurement (dBm) for the network.
- [rssiValue](rssivalue.md): The aggregate received signal strength indication (RSSI) measurement (dBm) for the network.
- [ssid](ssid.md): The service set identifier (SSID) for the network, encoded as a string.
- [ssidData](ssiddata.md): The service set identifier (SSID) for the network, returned as data.
- [wlanChannel](wlanchannel.md): The channel for the network.
