> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsvector/init(buffer:offset:descriptor:)

# init(buffer:offset:descriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
init(buffer: any MTLBuffer, offset: Int, descriptor: MPSVectorDescriptor)
```

## See Also

### Initializers

- [init(buffer:descriptor:)](init%28buffer_descriptor_%29.md)
- [init(device:descriptor:)](init%28device_descriptor_%29.md)

# initWithBuffer:offset:descriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset descriptor:(MPSVectorDescriptor *) descriptor;
```

## See Also

### Initializers

- [initWithBuffer:descriptor:](init%28buffer_descriptor_%29.md)
- [initWithDevice:descriptor:](init%28device_descriptor_%29.md)
