> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwlistener/service-swift.struct/init(name:type:domain:txtrecord:)-1lb30](https://developer.apple.com/documentation/network/nwlistener/service-swift.struct/init(name:type:domain:txtrecord:)-1lb30)

# init(name:type:domain:txtRecord:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a Bonjour service to advertise.

## Declaration

```swift
init(name: String? = nil, type: String, domain: String? = nil, txtRecord: Data? = nil)
```

<a id="Discussion"></a>

## Discussion

Advertised services are primarily defined by their types. If you do not specify a service name, the device name will be chosen. You should not specify a Bonjour domain unless you know you need to advertise only on a particular domain.

## See Also

### Defining Services

- [init(name:type:domain:txtRecord:)](init%28name_type_domain_txtrecord_%29-8qh5.md): Initializes a Bonjour service to advertise with a TXT record.
- [noAutoRename](noautorename.md): A Boolean that indicates whether the service prohibits automatic renaming in the event of a name conflict.
