> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osbundle/loadresource

# loadResource

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t loadResource(const char *name, uint64_t options, size_t minGuardSize, OSMappedFile **outputMap);
```

## See Also

### Instance Methods

- [free](free.md)
- [init](init.md)
