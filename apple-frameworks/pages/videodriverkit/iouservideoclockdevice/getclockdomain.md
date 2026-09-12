> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getclockdomain](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getclockdomain)

# GetClockDomain

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the clock domain value of the clock device.

## Declaration

```objectivec
uint32_t GetClockDomain();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with the clock domain

- [SetClockDomain](setclockdomain.md): Sets the clock domain value of the clock device.
