> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getclockdomain

# GetClockDomain

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the clock domain value of the clock device.

## Declaration

```objectivec
uint32_t GetClockDomain();
```

<a id="return-value"></a>

## Return Value

The clock domain value of the clock device.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Clock Domain

- [SetClockDomain](setclockdomain.md): Sets the clock domain value of the clock device.
