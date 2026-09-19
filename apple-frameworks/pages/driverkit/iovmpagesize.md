> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iovmpagesize

# IOVMPageSize

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit · iOS · iPadOS · macOS

The number of bytes in a virtual memory page.

## Declaration

```objectivec
extern uint64_t IOVMPageSize;
```

<a id="Discussion"></a>

## Discussion

Use this constant in places where you want to specify the size of a virtual memory page.
