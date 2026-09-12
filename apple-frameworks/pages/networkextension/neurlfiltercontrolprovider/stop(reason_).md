> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltercontrolprovider/stop(reason:)](https://developer.apple.com/documentation/networkextension/neurlfiltercontrolprovider/stop(reason:))

# stop(reason:)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Prepares the filter to stop, in response to a call from the framework.

## Declaration

```swift
func stop(reason: NEProviderStopReason) async throws
```

## Parameters

- `reason`: An [NEProviderStopReason](../neproviderstopreason.md) that indicates why the framework is stopping the filter.

<a id="discussion"></a>

## Discussion

Override this method in your conformance to [NEURLFilterControlProvider](../neurlfiltercontrolprovider.md) and perform whatever steps are necessary to prepare for the URL filter stopping.

## See Also

### Starting and stopping the provider

- [start()](start%28%29.md): Prepares the filter to start, in response to a call from the framework.
