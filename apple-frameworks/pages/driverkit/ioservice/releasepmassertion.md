> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/releasepmassertion](https://developer.apple.com/documentation/driverkit/ioservice/releasepmassertion)

# ReleasePMAssertion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t ReleasePMAssertion(uint64_t assertionID);
```

## Parameters

- `assertionID`: The assertion ID returned by CreatePMAssertion.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Release a previously created power management assertion.
