> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osaction/3438207-getreference](https://developer.apple.com/documentation/kernel/osaction/3438207-getreference)

# GetReference

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Returns a pointer to any additional memory allocated by the action object on your behalf.

## Declaration

```objectivec
void * GetReference(void);
```

<a id="return_value"></a>

## Return Value

A pointer to the additional storage you requested at creation time. This method returns `NULL` if you passed `0` to the `referenceSize` parameter of the [Create](3438206-create.md) method. It also returns `NULL` if the action object doesn't belong to the current process.

<a id="discussion"></a>

## Discussion

The action object zero-initializes the memory it allocates. Only the process that owns the action object may access the memory.
