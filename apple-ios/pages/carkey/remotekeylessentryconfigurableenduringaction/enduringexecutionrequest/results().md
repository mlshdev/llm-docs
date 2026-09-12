> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/results()](https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/results())

# results()

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Returns the results of a preceding action request.

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
