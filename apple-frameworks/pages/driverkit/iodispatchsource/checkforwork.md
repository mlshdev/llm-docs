> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchsource/checkforwork

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

Don’t override this method or call it from your own code. Existing dispatch source objects implement this method internally and use it to generate new events.
