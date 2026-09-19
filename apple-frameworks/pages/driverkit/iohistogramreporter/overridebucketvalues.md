> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iohistogramreporter/overridebucketvalues

# overrideBucketValues

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
IOReturn overrideBucketValues(unsigned int index, uint64_t bucket_hits, int64_t bucket_min, int64_t bucket_max, int64_t bucket_sum);
```

## See Also

### Instance Methods

- [addChannel](addchannel.md)
- [initWith](initwith.md)
- [tallyValue](tallyvalue.md)
