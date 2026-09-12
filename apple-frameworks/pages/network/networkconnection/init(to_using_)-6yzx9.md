> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkconnection/init(to:using:)-6yzx9](https://developer.apple.com/documentation/network/networkconnection/init(to:using:)-6yzx9)

# init(to:using:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a new outbound connection to an endpoint, with parameters. The parameters determine the protocols to be used for the connection, and their options.

## Declaration

```swift
convenience init(to provider: any Connectable, using builder: NWParametersBuilder<ApplicationProtocol>)
```
