> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsbonjourservices](https://developer.apple.com/documentation/bundleresources/information-property-list/nsbonjourservices)

# NSBonjourServices

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Bonjour service types browsed by the app.

## Details

`NSBonjourServices`

<a id="Discussion"></a>

## Discussion

The value associated with this key is an array of strings that represent Bonjour service types. Include all service types that your app expects to use. Bonjour service type strings look like `_ipp._tcp`, and `_myservice._udp`, where the first substring identifies the application protocol and the second identifies the transport protocol.

## See Also

### Network

- [NSAdvertisingAttributionReportEndpoint](nsadvertisingattributionreportendpoint.md): The URL where Private Click Measurement and SKAdNetwork send attribution information.
- [NSAppTransportSecurity](nsapptransportsecurity.md): A description of changes made to the default security for HTTP connections.
- [CKSharingSupported](cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.
