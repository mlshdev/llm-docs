> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionkeycreaterequest/data-data.dictionary/attributes-data.dictionary

# AlternativeDistributionKeyCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The attributes you set that describe the public key used to create a new resource.

## Declaration

```
object AlternativeDistributionKeyCreateRequest.Data.Attributes
```

## Properties

- `publicKey` — `string` (required): To learn more about creating this `publicKey` see, [Creating keys and establishing alternative marketplace connections](../../creating-keys-and-establishing-alternative-marketplace-connections.md) or [Creating and configuring keys for web distribution](../../creating-and-configuring-keys-for-web-distribution.md).

## See Also

### Objects

- [AlternativeDistributionKeyCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
