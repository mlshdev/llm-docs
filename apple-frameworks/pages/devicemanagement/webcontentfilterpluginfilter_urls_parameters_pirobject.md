> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/webcontentfilterpluginfilter_urls_parameters_pirobject](https://developer.apple.com/documentation/devicemanagement/webcontentfilterpluginfilter_urls_parameters_pirobject)

# WebContentFilterPluginFilter_URLs_Parameters_PIRObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A dictionary containing Private Information Retrieval server settings.

## Declaration

```
object WebContentFilterPluginFilter_URLs_Parameters_PIRObject
```

## Properties

- `AuthenticationTokenAssetReference` — `string`: The identifier of an asset declaration containing the HTTP bearer token required to authenticate with the service. The bearer token is provided in the `Password` field of the asset data. The system uses this token to attest that it’s a valid user when requesting anonymous authentication tokens for PIR exchanges.
- `PrivacyPassIssuerURL` — `string` (required): The URL containing the domain name of Privacy Pass Issuer.
- `ServerURL` — `string` (required): The URL containing the domain name of the private information retrieval server.
