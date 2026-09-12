> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networklistener/init(for:using:)-2vh87](https://developer.apple.com/documentation/network/networklistener/init(for:using:)-2vh87)

# init(for:using:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a listener that advertises a service with a protocol stack and parameters to use for listening.

## Declaration

```swift
convenience init(for provider: (any ListenerProvider)? = nil, using builder: NWParametersBuilder<ApplicationProtocol>) throws
```

## Parameters

- `provider`: The listener provider to use for advertising the service.
- `builder`: The builder to use for constructing the protocol stack and parameters.
