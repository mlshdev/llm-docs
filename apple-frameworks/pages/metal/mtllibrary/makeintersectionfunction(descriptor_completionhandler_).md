> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/makeintersectionfunction(descriptor:completionhandler:)](https://developer.apple.com/documentation/metal/mtllibrary/makeintersectionfunction(descriptor:completionhandler:))

# makeIntersectionFunction(descriptor:completionHandler:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Asynchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

## Declaration

```swift
func makeIntersectionFunction(descriptor: MTLIntersectionFunctionDescriptor, completionHandler: @escaping @Sendable ((any MTLFunction)?, (any Error)?) -> Void)
```

```swift
func makeIntersectionFunction(descriptor: MTLIntersectionFunctionDescriptor) async throws -> any MTLFunction
```

## See Also

### Creating intersection function instances

- [makeIntersectionFunction(descriptor:)](makeintersectionfunction%28descriptor_%29.md): Synchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

# newIntersectionFunctionWithDescriptor:completionHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Asynchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.

## Declaration

```objectivec
- (void) newIntersectionFunctionWithDescriptor:(MTLIntersectionFunctionDescriptor *) descriptor completionHandler:(void (^)(id<MTLFunction>function, NSError *error)) completionHandler;
```

## See Also

### Creating intersection function instances

- [newIntersectionFunctionWithDescriptor:error:](makeintersectionfunction%28descriptor_%29.md): Synchronously creates an object representing a ray-tracing intersection function, using the specified descriptor.
