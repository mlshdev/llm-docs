> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/bonjourlistenerprovider/init(name:type:domain:txtrecord:)](https://developer.apple.com/documentation/network/bonjourlistenerprovider/init(name:type:domain:txtrecord:))

# init(name:type:domain:txtRecord:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a Bonjour service to advertise.

## Declaration

```swift
init(name: String? = nil, type: String, domain: String? = nil, txtRecord: NWTXTRecord? = nil)
```

## Parameters

- `name`: The name to advertise. Defaults to `nil`, which allows the system to provide the name.
- `type`: The Bonjour service type to advertise.
- `domain`: The domain to advertise. Defaults to `nil`, which allows Bonjour to register in all default registration domains.
- `txtRecord`: An optional text record to advertise. If not provided, Bonjour will not register any text record associated with this service. Later, a text record can be advertised by setting `service` on `NetworkListener` with a TXT record.

<a id="discussion"></a>

## Discussion

> **Note**

> You can use `.bonjour()` as a convenience initializer.

Advertised services should be registered with IANA.
