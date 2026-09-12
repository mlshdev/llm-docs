> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osset/withcapacity](https://developer.apple.com/documentation/driverkit/osset/withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static OSSetPtr withCapacity(uint32_t capacity);
```

## Parameters

- `capacity`: Count of allocated capacity for members in array.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSSet with reference count 1 to be released by the caller.

<a id="discussion"></a>

## Discussion

Allocates an OSSet object with preallocated capacity.
