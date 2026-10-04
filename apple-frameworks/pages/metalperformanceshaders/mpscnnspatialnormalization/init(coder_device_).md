> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnspatialnormalization/init(coder:device:)

# init(coder:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a spatial normalization kernel.

## Declaration

```swift
init?(coder aDecoder: NSCoder, device: any MTLDevice)
```

## See Also

### Initializers

- [init(device:kernelWidth:kernelHeight:)](init%28device_kernelwidth_kernelheight_%29.md): Initializes a spatial normalization kernel.

# initWithCoder:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a spatial normalization kernel.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder device:(id<MTLDevice>) device;
```

## See Also

### Initializers

- [initWithDevice:kernelWidth:kernelHeight:](init%28device_kernelwidth_kernelheight_%29.md): Initializes a spatial normalization kernel.
