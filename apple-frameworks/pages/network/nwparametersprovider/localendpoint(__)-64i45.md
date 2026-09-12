> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/localendpoint(_:)-64i45](https://developer.apple.com/documentation/network/nwparametersprovider/localendpoint(_:)-64i45)

# localEndpoint(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specify a specific endpoint to use as the local endpoint.

## Declaration

```swift
func localEndpoint(_ endpoint: NWEndpoint?) -> Self
```

## Parameters

- `endpoint`: The local endpoint to require, or `nil` if none.

<a id="discussion"></a>

## Discussion

For connections, this will be used to initiate traffic; for listeners, this will be used for receiving incoming connections.
