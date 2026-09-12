> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/makefunction(descriptor:)](https://developer.apple.com/documentation/metal/mtllibrary/makefunction(descriptor:))

# makeFunction(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Synchronously creates an object representing a shader function, using the specified descriptor.

## Declaration

```swift
func makeFunction(descriptor: MTLFunctionDescriptor) throws -> any MTLFunction
```

## Parameters

- `descriptor`: The description of the function object to create.

<a id="return-value"></a>

## Return Value

A new [MTLFunction](../mtlfunction.md) instance if the method finds the function in the library; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating shader function instances

- [makeFunction(name:)](makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [makeFunction(name:constantValues:completionHandler:)](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [makeFunction(name:constantValues:)](makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [makeFunction(descriptor:completionHandler:)](makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.

# newFunctionWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Synchronously creates an object representing a shader function, using the specified descriptor.

## Declaration

```objectivec
- (id<MTLFunction>) newFunctionWithDescriptor:(MTLFunctionDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: The description of the function object to create.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A new [MTLFunction](../mtlfunction.md) instance if the method finds the function in the library; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating shader function instances

- [newFunctionWithName:](makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [newFunctionWithName:constantValues:completionHandler:](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [newFunctionWithName:constantValues:error:](makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [newFunctionWithDescriptor:completionHandler:](makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
