> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/createpmassertion](https://developer.apple.com/documentation/driverkit/ioservice/createpmassertion)

# CreatePMAssertion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CreatePMAssertion(uint32_t assertionBits, uint64_t *assertionID, bool synced);
```

## Parameters

- `assertionBits`: Bit masks including all the flavors that require to be asserted.
- `assertionID`: Pointer that will contain the unique identifier of the created power assertion.
- `synced`: Indicates if the assertion must prevent an imminent sleep transition. When set to true, and if a system sleep is irreversible, the call will return kIOReturnBusy, in which case the assertion is not created. Only kIOServicePMAssertionCPUBit is valid for assertionBits if sleepSafe is set to true.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Create a power management assertion.
