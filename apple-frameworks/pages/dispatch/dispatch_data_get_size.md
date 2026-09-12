> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_data_get_size](https://developer.apple.com/documentation/dispatch/dispatch_data_get_size)

# dispatch_data_get_size

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the logical size of the memory managed by a dispatch data object

## Declaration

```objectivec
extern size_t dispatch_data_get_size(dispatch_data_t data);
```

## Parameters

- `data`: The dispatch data object to query

<a id="return-value"></a>

## Return Value

The number of bytes represented by the data object.

<a id="Discussion"></a>

## Discussion

For data objects that represent multiple noncontiguous memory regions, the size reported by this function is the sum of the sizes of the individual regions.
