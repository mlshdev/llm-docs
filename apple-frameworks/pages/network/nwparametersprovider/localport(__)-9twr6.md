> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/localport(_:)-9twr6](https://developer.apple.com/documentation/network/nwparametersprovider/localport(_:)-9twr6)

# localPort(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specify a specific port to use as the local endpoint, letting the system select the address.

## Declaration

```swift
func localPort(_ port: NWEndpoint.Port) -> Self
```

## Parameters

- `port`: The local port to require. Force a specific local port to be used.

<a id="discussion"></a>

## Discussion

For connections, this will be used to initiate traffic; for listeners, this will be used for receiving incoming connections.
