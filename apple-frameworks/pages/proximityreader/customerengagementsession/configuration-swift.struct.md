> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/configuration-swift.struct](https://developer.apple.com/documentation/proximityreader/customerengagementsession/configuration-swift.struct)

# CustomerEngagementSession.Configuration

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A set of configuration options for a customer engagement session.

## Declaration

```swift
struct Configuration
```

## Topics

### Initializers

- [init(currency:region:privacyPolicyURL:websiteURL:storeName:deviceName:passTypeIdentifiers:)](configuration-swift.struct/init%28currency_region_privacypolicyurl_websiteurl_storename_devicename_passtypeidentifiers_%29.md)

### Instance Properties

- [currency](configuration-swift.struct/currency.md): The currency to localize the amounts in the shopping cart.
- [deviceName](configuration-swift.struct/devicename.md): The device name or sales staff name to identify the merchant device.
- [passTypeIdentifiers](configuration-swift.struct/passtypeidentifiers.md): An array of pass type identifiers for the your passes.
- [privacyPolicyURL](configuration-swift.struct/privacypolicyurl.md): A URL for your privacy policy.
- [region](configuration-swift.struct/region.md): The region to localize the amounts in the shopping cart.
- [storeName](configuration-swift.struct/storename.md): The store name or location to identify the specific store.
- [websiteURL](configuration-swift.struct/websiteurl.md): The merchant website URL.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a session

- [configuration](configuration-swift.property.md): Configuration for this session.
- [open(using:)](open%28using_%29.md): Opens the engagement session.
- [close()](close%28%29.md): Closes the engagement session.
- [CustomerEngagementSession.Token](token-swift.struct.md): A session token.
