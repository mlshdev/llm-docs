> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryenduringaction/enduringexecutionrequest/results()](https://developer.apple.com/documentation/carkey/remotekeylessentryenduringaction/enduringexecutionrequest/results())

# results()

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.3+ (deprecated in 15.0) · watchOS 9.0+ (deprecated in 11.0)

Returns the results of a preceding action request.

> Use [perform(\_:continuationStrategy:)](../../carkeyremotecontrolsession/perform%28__continuationstrategy_%29.md) instead.

## Declaration

```swift
final func results() async throws -> ExecutionStatus
```

<a id="return-value"></a>

## Return Value

A structure that contains the vehicle-specific status code from the vehicle.

<a id="discussion"></a>

## Discussion

After you call your session’s [perform(\_:)](../../carkeyremotecontrolsession/perform%28__%29-7mpsy.md) method to send an action request to a vehicle, call this method to await the results of that request. Upon the successful completion of the request, this method returns the vehicle-provided status code. If an error occurs, this method throws the error instead.

## See Also

### Getting the Vehicle’s Response

- [ExecutionStatus](../../executionstatus.md): A type that contains the status code a vehicle returns after executing an action.
