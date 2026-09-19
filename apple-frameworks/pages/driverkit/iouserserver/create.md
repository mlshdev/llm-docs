> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iouserserver/create

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t Create(const char name[64], uint64_t tag, uint64_t options, OSString *bundleID, IOUserServer **server);
```

## See Also

### Configuring the User Server

- [init](init.md)
- [free](free.md)
