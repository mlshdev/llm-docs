> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getclockdomain

# GetClockDomain

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetClockDomain](setclockdomain.md): Beta. Sets the clock domain value of the clock device.
