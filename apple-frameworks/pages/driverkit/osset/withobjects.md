> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osset/withobjects](https://developer.apple.com/documentation/driverkit/osset/withobjects)

# withObjects

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Creates and initializes an OSSet populated with objects provided.

## Declaration

```objectivec
static OSSetPtr withObjects(const OSObject **values, uint32_t count, uint32_t capacity);
```

## Parameters

- `values`: A C array of OSMetaClassBase-derived objects.
- `count`: The number of objects to be placed into the set.
- `capacity`: The initial storage capacity of the new set object. If 0, `count` is used; otherwise this value must be greater than or equal to `count`.

<a id="return-value"></a>

## Return Value

An instance of OSSet containing the objects provided, with a retain count of 1; `NULL` on failure.

<a id="discussion"></a>

## Discussion

`objects` must be non-`NULL`, and `count` must be nonzero. If `capacity` is nonzero, it must be greater than or equal to `count`. The new OSSet will grow as needed to accommodate more objects (*unlike*[CFMutableSetRef](../../corefoundation/cfmutableset.md), for which the initial capacity is a hard limit).

The objects in `objects` are retained for storage in the new set, not copied.
