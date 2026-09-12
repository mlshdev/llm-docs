> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.wifi-infrastructure](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.wifi-infrastructure)

# com.apple.developer.wifi-infrastructure

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.2+ · iPadOS 26.2+

The entitlement the system requires for an app to use the Wi-Fi Infrastructure framework.

## Details

`com.apple.developer.wifi-infrastructure`

## Possible Values

- `WiFiNetworkSharing`: A string that states your app’s intent to share Wi-Fi network data to an accessory.

<a id="Discussion"></a>

## Discussion

This entitlement works with the Wi-Fi Infrastructure framework, which enables your app and accessory to share Wi-Fi networks from the host device.

To use Wi-Fi Infrastructure, add this entitlement to your app by enabling the Wi-Fi Infrastructure capability on your target in Xcode. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

<a id="Transport-Security"></a>

### Transport Security

To use Wi-Fi network sharing, an accessory must be paired and use Bluetooth Secure Connections, as defined in Bluetooth 4.2 from 2014. This involves a Bluetooth connection using:

- Secure Simple Pairing
- Encryption of all data with AES-128

For information on Bluetooth security modes, see [NIST Special Publication 800-121: Guide to Bluetooth Security](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-121r2-upd1.pdf).
