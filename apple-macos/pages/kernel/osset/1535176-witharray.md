> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osset/1535176-witharray](https://developer.apple.com/documentation/kernel/osset/1535176-witharray)

# withArray

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 21.0+ · macOS 10.11.4+

## Declaration

```objectivec
static OSSetPtr withArray(const OSArray *array, uint32_t capacity);
```

```objectivec
static OSPtr<OSSet> withArray(const OSArray *array, unsigned int capacity);
```
