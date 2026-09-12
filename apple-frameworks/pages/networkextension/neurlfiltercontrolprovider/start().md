> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltercontrolprovider/start()](https://developer.apple.com/documentation/networkextension/neurlfiltercontrolprovider/start())

# start()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Prepares the filter to start, in response to a call from the framework.

## Declaration

```swift
func start() async throws
```

<a id="discussion"></a>

## Discussion

Override this method in your conformance to [NEURLFilterControlProvider](../neurlfiltercontrolprovider.md) and perform whatever steps are necessary to prepare for fetching pre-filter data.

## See Also

### Starting and stopping the provider

- [stop(reason:)](stop%28reason_%29.md): Prepares the filter to stop, in response to a call from the framework.
