> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsseekregionresult/init(returnedoffset:)](https://developer.apple.com/documentation/fskit/fsseekregionresult/init(returnedoffset:))

# init(returnedOffset:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for a region-seeking operation.

## Declaration

```swift
init(returnedOffset: off_t)
```

## Parameters

- `returnedOffset`: The offset of the requested region, greater than or equal to the supplied offset.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

# initWithReturnedOffset: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for a region-seeking operation.

## Declaration

```objectivec
- (instancetype) initWithReturnedOffset:(off_t) returnedOffset;
```

## Parameters

- `returnedOffset`: The offset of the requested region, greater than or equal to the supplied offset.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.
