> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotevaluationprovider/stop(reason:)](https://developer.apple.com/documentation/networkextension/nehotspotevaluationprovider/stop(reason:))

# stop(reason:)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Tells the exension to stop the evaluation provider, in response to a request from the framework.

## Declaration

```swift
func stop(reason: NEProviderStopReason) async
```

## Parameters

- `reason`: The reason for stopping the provider.

<a id="discussion"></a>

## Discussion

Perform any needed cleanup tasks in your implementation of this method. After stopping, the provider receives no further commands from the framework.

## See Also

### Managing provider life cycle

- [start()](start%28%29.md): Tells the extension to start the evaluation provider, in response to a request from the framework.
- [NEProviderStopReason](../neproviderstopreason.md): Reasons why the provider extension was stopped.
