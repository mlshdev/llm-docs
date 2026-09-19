> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/setenable-76sm5

# SetEnable

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Enables or disables the queue.

## Declaration

```objectivec
virtual kern_return_t SetEnable(bool isEnable);
```

## Parameters

- `isEnable`: If `YES`, prepare the queue to run.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.
