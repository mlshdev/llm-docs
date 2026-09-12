> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/dnssecvalidationrequired(_:)-6re5y](https://developer.apple.com/documentation/network/nwparametersprovider/dnssecvalidationrequired(_:)-6re5y)

# dnssecValidationRequired(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Require DNSSEC validation when resolving an endpoint before making a connection.

## Declaration

```swift
func dnssecValidationRequired(_ required: Bool) -> Self
```

## Parameters

- `required`: True if DNSSEC validation is required, false otherwise.

<a id="discussion"></a>

## Discussion

DNSSEC validation only takes effect if making a connection to an endpoint that requires domain name resolution, such as a host or URL endpoint.

- If this is not set or is set to `false`, DNSSEC validation will not be required.
- If this is set to `true` and no additional DNSSEC configuration is set, the default behavior will be followed: Only DNSSEC secure and DNSSEC insecure resolved results will be used to establish a connection.
- If this is set to `true` and additional DNSSEC configuration is set on the parameters, the behavior specified by that configuration will be used.
