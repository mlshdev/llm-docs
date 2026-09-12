> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osaction/getreference](https://developer.apple.com/documentation/driverkit/osaction/getreference)

# GetReference

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns a pointer to any additional memory allocated by the action object on your behalf.

## Declaration

```objectivec
void * GetReference();
```

<a id="return-value"></a>

## Return Value

A pointer to the additional storage you requested at creation time. This method returns `NULL` if you passed `0` to the `referenceSize` parameter of the [Create](https://developer.apple.com/documentation/kernel/osaction/3438206-create) method. It also returns `NULL` if the action object doesn’t belong to the current process.

## Mentioned In

- [Creating a Driver Using the DriverKit SDK](../creating-a-driver-using-the-driverkit-sdk.md)

<a id="Discussion"></a>

## Discussion

The action object zero-initializes the memory it allocates. Only the process that owns the action object may access the memory.
