> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getuid](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getuid)

# GetUID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the unique identifier of the clock device.

## Declaration

```objectivec
OSSharedPtr<OSString> GetUID();
```

<a id="return-value"></a>

## Return Value

The unique identifier.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.
