> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/makefunction(descriptor:completionhandler:)](https://developer.apple.com/documentation/metal/mtllibrary/makefunction(descriptor:completionhandler:))

# makeFunction(descriptor:completionHandler:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Asynchronously creates an object representing a shader function, using the specified descriptor.

## Declaration

```swift
func makeFunction(descriptor: MTLFunctionDescriptor, completionHandler: @escaping @Sendable ((any MTLFunction)?, (any Error)?) -> Void)
```

```swift
func makeFunction(descriptor: MTLFunctionDescriptor) async throws -> any MTLFunction
```

## Parameters

- `descriptor`: The description of the function object to create.
- `completionHandler`: A Swift closure or an Objective-C block that Metal calls after it creates the function.

## See Also

### Creating shader function instances

- [makeFunction(name:)](makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [makeFunction(name:constantValues:completionHandler:)](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [makeFunction(name:constantValues:)](makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [makeFunction(descriptor:)](makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.

# newFunctionWithDescriptor:completionHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Asynchronously creates an object representing a shader function, using the specified descriptor.

## Declaration

```objectivec
- (void) newFunctionWithDescriptor:(MTLFunctionDescriptor *) descriptor completionHandler:(void (^)(id<MTLFunction>function, NSError *error)) completionHandler;
```

## Parameters

- `descriptor`: The description of the function object to create.
- `completionHandler`: A Swift closure or an Objective-C block that Metal calls after it creates the function.

## See Also

### Creating shader function instances

- [newFunctionWithName:](makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [newFunctionWithName:constantValues:completionHandler:](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [newFunctionWithName:constantValues:error:](makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [newFunctionWithDescriptor:error:](makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.
