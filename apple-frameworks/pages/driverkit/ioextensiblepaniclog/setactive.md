> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/setactive

# SetActive

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t SetActive();
```

<a id="return-value"></a>

## Return Value

0 on success, negative value in case of failure.

<a id="discussion"></a>

## Discussion

This function is called to set the IOExtensiblePaniclog object active.

When it is set active, it is picked up and added to the extensible paniclog in case of a panic.
