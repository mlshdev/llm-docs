> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotevaluationprovider/start()](https://developer.apple.com/documentation/networkextension/nehotspotevaluationprovider/start())

# start()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Tells the extension to start the evaluation provider, in response to a request from the framework.

## Declaration

```swift
func start() async -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the provider started successfully; `false`, otherwise.

<a id="discussion"></a>

## Discussion

Use this method to prepare your provider to handle future calls to [handleCommand(\_:)](handlecommand%28__%29.md).

## See Also

### Managing provider life cycle

- [stop(reason:)](stop%28reason_%29.md): Tells the exension to stop the evaluation provider, in response to a request from the framework.
- [NEProviderStopReason](../neproviderstopreason.md): Reasons why the provider extension was stopped.
