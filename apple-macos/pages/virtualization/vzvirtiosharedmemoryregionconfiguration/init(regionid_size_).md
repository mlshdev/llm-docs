> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosharedmemoryregionconfiguration/init(regionid:size:)](https://developer.apple.com/documentation/virtualization/vzvirtiosharedmemoryregionconfiguration/init(regionid:size:))

# init(regionID:size:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a shared memory region with a shared memory region ID and size.

## Declaration

```swift
init(regionID: UInt8, size: UInt64)
```

## Parameters

- `regionID`: Shared memory region ID.
- `size`: Shared memory region size.

<a id="return-value"></a>

## Return Value

An initialized [VZVirtioSharedMemoryRegionConfiguration](../vzvirtiosharedmemoryregionconfiguration.md).

# initWithRegionID:size: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Initializes a shared memory region with a shared memory region ID and size.

## Declaration

```objectivec
- (instancetype) initWithRegionID:(uint8_t) regionID size:(uint64_t) size;
```

## Parameters

- `regionID`: Shared memory region ID.
- `size`: Shared memory region size.

<a id="return-value"></a>

## Return Value

An initialized [VZVirtioSharedMemoryRegionConfiguration](../vzvirtiosharedmemoryregionconfiguration.md).
