> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wapaireddevice/pairinginfo-swift.struct/pairingname](https://developer.apple.com/documentation/wifiaware/wapaireddevice/pairinginfo-swift.struct/pairingname)

# pairingName

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The human-readable name of the physical device as a person sees it during initial pairing.

## Declaration

```swift
let pairingName: String
```

<a id="discussion"></a>

## Discussion

The system receives this data from the device within an DNS-SD TXT record. The value set in the `pairingName` property is the  value that follows the DNS-SD TXT record key:

```
pairingName=
```

The system interprets the value as an \<= 63-byte UTF-8 string and may truncate it if it’s longer than 63 bytes. Refer to [RFC 6763](https://datatracker.ietf.org/doc/html/rfc6763#section-6.3) for more information on the over-the-air encoding.

## See Also

### Receiving device information

- [vendorName](vendorname.md): The human-readable name of the manufacturer or vendor of the physical device as a person would understand it.
- [modelName](modelname.md): The human-readable model name of the physical device as a person can understand it.
