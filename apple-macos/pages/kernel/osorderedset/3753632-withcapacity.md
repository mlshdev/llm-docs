> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osorderedset/3753632-withcapacity

# withCapacity

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 21.0+ · macOS 12.0+

## Declaration

```objectivec
static OSOrderedSetPtr withCapacity(uint32_t capacity, OSOrderBlock orderBlock);
```

```objectivec
static OSPtr<OSOrderedSet> withCapacity(unsigned int capacity, OSOrderBlock orderBlock);
```
