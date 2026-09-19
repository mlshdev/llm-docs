> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1575325-iofindnameforvalue

# IOFindNameForValue

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
const char * IOFindNameForValue(int value, const IONamedValue *namedValueArray);
```

## See Also

### Helpers

- [OSPrintMemory](1543117-osprintmemory.md)
- [IOFindValueForName](1575321-iofindvalueforname.md)
