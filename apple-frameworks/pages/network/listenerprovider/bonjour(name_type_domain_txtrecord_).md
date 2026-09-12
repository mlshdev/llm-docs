> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/listenerprovider/bonjour(name:type:domain:txtrecord:)](https://developer.apple.com/documentation/network/listenerprovider/bonjour(name:type:domain:txtrecord:))

# bonjour(name:type:domain:txtRecord:)

**Framework:** Network  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a Bonjour service to advertise.

## Declaration

```swift
static func bonjour(name: String? = nil, type: String, domain: String? = nil, txtRecord: NWTXTRecord? = nil) -> BonjourListenerProvider
```

## Parameters

- `name`: The name to advertise. Defaults to `nil`, which allows the system to provide the name.
- `type`: The Bonjour service type to advertise.
- `domain`: The domain to advertise. Defaults to `nil`, which allows Bonjour to register in all default registration domains.
- `txtRecord`: An optional text record to advertise. If not provided, Bonjour will not register any text record associated with this service. Later, a text record can be advertised by setting `service` on `NetworkListener` with a TXT record.

<a id="discussion"></a>

## Discussion

Advertised services should be registered with IANA.
