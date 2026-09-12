> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetwork/bssid](https://developer.apple.com/documentation/corewlan/cwnetwork/bssid)

# bssid (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The basic service set identifier (BSSID) for the network, returned as UTF-8 string.

## Declaration

```swift
var bssid: String? { get }
```

<a id="Discussion"></a>

## Discussion

Returns a UTF-8 string formatted as \<00:00:00:00:00:00\>.

## See Also

### Instance Properties

- [beaconInterval](beaconinterval.md): The beacon interval (ms) for the network.
- [countryCode](countrycode.md): The country code (ISO/IEC 3166-1:1997) for the network.
- [ibss](ibss.md): The network is an IBSS network.
- [informationElementData](informationelementdata.md): Information element data included in beacon or probe response frames.
- [noiseMeasurement](noisemeasurement.md): The aggregate noise measurement (dBm) for the network.
- [rssiValue](rssivalue.md): The aggregate received signal strength indication (RSSI) measurement (dBm) for the network.
- [ssid](ssid.md): The service set identifier (SSID) for the network, encoded as a string.
- [ssidData](ssiddata.md): The service set identifier (SSID) for the network, returned as data.
- [wlanChannel](wlanchannel.md): The channel for the network.

# bssid (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The basic service set identifier (BSSID) for the network, returned as UTF-8 string.

## Declaration

```objectivec
@property (readonly, nullable) NSString * bssid;
```

<a id="Discussion"></a>

## Discussion

Returns a UTF-8 string formatted as \<00:00:00:00:00:00\>.

## See Also

### Instance Properties

- [beaconInterval](beaconinterval.md): The beacon interval (ms) for the network.
- [countryCode](countrycode.md): The country code (ISO/IEC 3166-1:1997) for the network.
- [ibss](ibss.md): The network is an IBSS network.
- [informationElementData](informationelementdata.md): Information element data included in beacon or probe response frames.
- [noiseMeasurement](noisemeasurement.md): The aggregate noise measurement (dBm) for the network.
- [rssiValue](rssivalue.md): The aggregate received signal strength indication (RSSI) measurement (dBm) for the network.
- [ssid](ssid.md): The service set identifier (SSID) for the network, encoded as a string.
- [ssidData](ssiddata.md): The service set identifier (SSID) for the network, returned as data.
- [wlanChannel](wlanchannel.md): The channel for the network.
