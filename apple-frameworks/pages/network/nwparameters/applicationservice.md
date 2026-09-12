> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/applicationservice](https://developer.apple.com/documentation/network/nwparameters/applicationservice)

# applicationService

**Framework:** Network  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The default parameters for connecting with other, local devices that are running your app.

## Declaration

```swift
final class var applicationService: NWParameters { get }
```

<a id="Discussion"></a>

## Discussion

The default parameters set up an encrypted connection with another device on the local network. You can use these parameters as-is, or you can add a [NWProtocolFramer](../nwprotocolframer.md) to provide application-level messaging support.
