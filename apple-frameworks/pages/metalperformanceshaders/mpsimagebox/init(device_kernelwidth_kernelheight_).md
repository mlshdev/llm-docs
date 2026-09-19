> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsimagebox/init(device:kernelwidth:kernelheight:)

# init(device:kernelWidth:kernelHeight:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a box filter.

## Declaration

```swift
init(device: any MTLDevice, kernelWidth: Int, kernelHeight: Int)
```

## Parameters

- `device`: The Metal device the filter will run on.
- `kernelWidth`: The width of the kernel. Must be an odd number.
- `kernelHeight`: The height of the kernel. Must be an odd number.

<a id="return-value"></a>

## Return Value

An initialized box filter object.

# initWithDevice:kernelWidth:kernelHeight: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a box filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device kernelWidth:(NSUInteger) kernelWidth kernelHeight:(NSUInteger) kernelHeight;
```

## Parameters

- `device`: The Metal device the filter will run on.
- `kernelWidth`: The width of the kernel. Must be an odd number.
- `kernelHeight`: The height of the kernel. Must be an odd number.

<a id="return-value"></a>

## Return Value

An initialized box filter object.
