> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osorderedset/3753632-withcapacity](https://developer.apple.com/documentation/kernel/osorderedset/3753632-withcapacity)

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
