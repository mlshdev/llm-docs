> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/service-swift.struct/init(name:type:domain:txtrecord:)-8qh5](https://developer.apple.com/documentation/network/nwlistener/service-swift.struct/init(name:type:domain:txtrecord:)-8qh5)

# init(name:type:domain:txtRecord:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a Bonjour service to advertise with a TXT record.

## Declaration

```swift
init(name: String? = nil, type: String, domain: String? = nil, txtRecord: NWTXTRecord)
```

<a id="Discussion"></a>

## Discussion

Advertised services are primarily defined by their types. If you do not specify a service name, the device name will be chosen. You should not specify a Bonjour domain unless you know you need to advertise only on a particular domain.

## See Also

### Defining Services

- [init(name:type:domain:txtRecord:)](init%28name_type_domain_txtrecord_%29-1lb30.md): Initializes a Bonjour service to advertise.
- [noAutoRename](noautorename.md): A Boolean that indicates whether the service prohibits automatic renaming in the event of a name conflict.
