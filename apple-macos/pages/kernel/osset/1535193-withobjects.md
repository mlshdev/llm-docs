> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osset/1535193-withobjects

# withObjects

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 21.0+ · macOS 10.11.4+

## Declaration

```objectivec
static OSSetPtr withObjects(const OSObject **values, uint32_t count, uint32_t capacity);
```

```objectivec
static OSPtr<OSSet> withObjects(const OSObject *objects[], unsigned int count, unsigned int capacity);
```
