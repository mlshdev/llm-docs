> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalkit/mtkmeshbufferallocator/init(device:)

# init(device:) (Swift)

**Framework:** MetalKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new allocator object.

## Declaration

```swift
init(device: any MTLDevice)
```

## Parameters

- `device`: The Metal device on which to create buffers.

<a id="return-value"></a>

## Return Value

An initialized allocator object.

# initWithDevice: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new allocator object.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device on which to create buffers.

<a id="return-value"></a>

## Return Value

An initialized allocator object.
