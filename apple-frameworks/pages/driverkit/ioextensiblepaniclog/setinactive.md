> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioextensiblepaniclog/setinactive](https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/setinactive)

# SetInactive

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t SetInactive();
```

<a id="return-value"></a>

## Return Value

True in case of success. False in case of an error.

<a id="discussion"></a>

## Discussion

This function is called to set the IOExtensiblePaniclog object inactive.

When it is set inactive, this buffer is not picked up in case of a panic
