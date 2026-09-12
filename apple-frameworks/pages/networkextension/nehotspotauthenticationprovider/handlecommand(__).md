> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotauthenticationprovider/handlecommand(_:)](https://developer.apple.com/documentation/networkextension/nehotspotauthenticationprovider/handlecommand(_:))

# handleCommand(\_:)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Handles a given hotspot command, in response to a request from the framework.

## Declaration

```swift
func handleCommand(_ command: NEHotspotHelperCommand) async -> NEHotspotHelperResponse
```

<a id="return-value"></a>

## Return Value

An [NEHotspotHelperResponse](../nehotspothelperresponse.md) with the result of the call.

<a id="discussion"></a>

## Discussion

In your implementation, handle the specified command and return an appropriate [NEHotspotHelperResponse](../nehotspothelperresponse.md). The framework is responsible for delivering this response to the system; don’t invoke the [deliver()](../nehotspothelperresponse/deliver%28%29.md) method of [NEHotspotHelperResponse](../nehotspothelperresponse.md) manually.

## See Also

### Sending commands to the provider

- [NEHotspotHelperCommand](../nehotspothelpercommand.md): A command for the hotspot helper to handle.
