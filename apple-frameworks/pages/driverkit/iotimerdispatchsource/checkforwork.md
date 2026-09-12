> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/checkforwork](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/checkforwork)

# CheckForWork

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Checks for events to handle.

## Declaration

```objectivec
virtual kern_return_t CheckForWork(bool synchronous);
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

Don’t override this method or call it from your own code. The dispatch source uses this method internally to check for events.

## See Also

### Declaring Actions

- [TimerOccurred](timeroccurred.md): Executes custom code when the timer fires.
