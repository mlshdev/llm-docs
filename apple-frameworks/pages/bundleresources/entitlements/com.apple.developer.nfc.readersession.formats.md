> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats)

# Near Field Communication Tag Reader Session Formats Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The Near Field Communication data formats an app can read.

## Details

`com.apple.developer.nfc.readersession.formats`

## Possible Values

- `TAG`: Allows read and write access to a tag using [NFCTagReaderSession](https://developer.apple.com/documentation/corenfc/nfctagreadersession).

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app, enable the Near Field Communication Tag Reading capability in Xcode.

## See Also

### Wireless interfaces

- [Access Wi-Fi Information Entitlement](com.apple.developer.networking.wifi-info.md): A Boolean value indicating whether your app can access information about the connected Wi-Fi network.
- [Wireless Accessory Configuration Entitlement](com.apple.external-accessory.wireless-configuration.md): A Boolean value that indicates whether your app may configure MFi Wi-Fi accessories.
- [Multipath Entitlement](com.apple.developer.networking.multipath.md): A Boolean value indicating whether your app may use Multipath protocols to seamlessly transition between Wi-Fi and cellular networks.
- [Hotspot Configuration Entitlement](com.apple.developer.networking.hotspotconfiguration.md): A Boolean value indicating whether your app can use the hotspot manager to configure Wi-Fi networks.
- [HotSpot Helper](com.apple.developer.networking.hotspothelper.md): An entitlement that permits an app to participate in navigating Wi-Fi network hotspots.
- [ISO18092 system codes for NFC Tag Reader Session](com.apple.developer.nfc.readersession.felica.systemcodes.md): A list of FeliCa system codes that the app supports.
- [ISO7816 application identifiers for NFC Tag Reader Session](com.apple.developer.nfc.readersession.iso7816.select-identifiers.md): A list of application identifiers that the app supports.
- [com.apple.developer.nfc.hce](com.apple.developer.nfc.hce.md): A Boolean value indicating whether your app can use the card session API.
- [com.apple.developer.nfc.hce.iso7816.select-identifier-prefixes](com.apple.developer.nfc.hce.iso7816.select-identifier-prefixes.md): An array of identifier strings the app handles with the card session API.
- [com.apple.developer.nfc.hce.default-contactless-app](com.apple.developer.nfc.hce.default-contactless-app.md): A Boolean value indicating whether your app can be a default app for contactless NFC with the card session API.
