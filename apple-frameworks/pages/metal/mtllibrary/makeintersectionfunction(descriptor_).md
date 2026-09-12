> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/makeintersectionfunction(descriptor:)](https://developer.apple.com/documentation/metal/mtllibrary/makeintersectionfunction(descriptor:))

# makeIntersectionFunction(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Synchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

## Declaration

```swift
func makeIntersectionFunction(descriptor: MTLIntersectionFunctionDescriptor) throws -> any MTLFunction
```

## See Also

### Creating intersection function instances

- [makeIntersectionFunction(descriptor:completionHandler:)](makeintersectionfunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

# newIntersectionFunctionWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Synchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

## Declaration

```objectivec
- (id<MTLFunction>) newIntersectionFunctionWithDescriptor:(MTLIntersectionFunctionDescriptor *) descriptor error:(NSError **) error;
```

## See Also

### Creating intersection function instances

- [newIntersectionFunctionWithDescriptor:completionHandler:](makeintersectionfunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.
