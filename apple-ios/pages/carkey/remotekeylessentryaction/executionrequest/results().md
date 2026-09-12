> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryaction/executionrequest/results()](https://developer.apple.com/documentation/carkey/remotekeylessentryaction/executionrequest/results())

# results()

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

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

After you call your session’s [perform(\_:)](../../carkeyremotecontrolsession/perform%28__%29-8ac0c.md) method to send an action request to a vehicle, call this method and await the results of that request. Upon the successful completion of the request, this method returns the vehicle-provided status code. If an error occurs, this method throws the error instead.

## See Also

### Getting the Vehicle’s Response

- [ExecutionStatus](../../executionstatus.md): A type that contains the status code a vehicle returns after executing an action.
