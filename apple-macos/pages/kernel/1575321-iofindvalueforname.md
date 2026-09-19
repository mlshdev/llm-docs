> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1575321-iofindvalueforname

# IOFindValueForName

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
IOReturn IOFindValueForName(const char *string, const IONamedValue *regValueArray, int *value);
```

## See Also

### Helpers

- [OSPrintMemory](1543117-osprintmemory.md)
- [IOFindNameForValue](1575325-iofindnameforvalue.md)
