> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsession/perform(_:)-7mpsy](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsession/perform(_:)-7mpsy)

# perform(\_:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.3+ (deprecated in 15.0) · watchOS 9.0+ (deprecated in 11.0)

Sends a request to the vehicle to start an action that has a separate stopping point.

> Use perform(enduringAction:continuationStrategy:) instead

## Declaration

```swift
func perform(_ enduringAction: RemoteKeylessEntryEnduringAction) throws -> RemoteKeylessEntryEnduringAction.EnduringExecutionRequest
```

<a id="return-value"></a>

## Return Value

An object you use to get the results of the initial request and stop the action.

<a id="discussion"></a>

## Discussion

Call this method for vehicle features that that have both a start and stop point. For example, use it to start raising or lowering the top of a convertible. This method sends the request to the vehicle asynchronously.

Use the returned object to get the execution status of the initial request, and to optionally stop the action.

## See Also

### Performing Vehicle-Related Actions

- [perform(\_:)](perform%28__%29-8ac0c.md): Sends a request to the vehicle to perform a one-time action.
