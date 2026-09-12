> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/makefunction(name:)](https://developer.apple.com/documentation/metal/mtllibrary/makefunction(name:))

# makeFunction(name:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates an instance that represents a shader function in the library.

## Declaration

```swift
func makeFunction(name functionName: String) -> (any MTLFunction)?
```

## Parameters

- `functionName`: The name of the function.

<a id="return-value"></a>

## Return Value

An [MTLFunction](../mtlfunction.md), or `nil` if the named function isn’t found in the library.

<a id="discussion"></a>

## Discussion

If you call this method to retrieve a function that doesn’t use function constants, it returns an [MTLFunction](../mtlfunction.md) instance that you can use to build a render or compute pipeline.

If you call this method to retrieve a function that uses function constants to specialize its behavior, you can only use the returned instance to query the `functionConstants` property for the list of function constants. You can’t use to create a render or compute pipeline. To get a specialized instance that you can use to create a pipeline instance, call the [makeFunction(name:constantValues:completionHandler:)](makefunction%28name_constantvalues_completionhandler_%29.md) method or [makeFunction(name:constantValues:)](makefunction%28name_constantvalues_%29.md) to generate a specialized function.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Creating shader function instances

- [makeFunction(name:constantValues:completionHandler:)](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [makeFunction(name:constantValues:)](makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [makeFunction(descriptor:completionHandler:)](makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [makeFunction(descriptor:)](makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.

# newFunctionWithName: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates an instance that represents a shader function in the library.

## Declaration

```objectivec
- (id<MTLFunction>) newFunctionWithName:(NSString *) functionName;
```

## Parameters

- `functionName`: The name of the function.

<a id="return-value"></a>

## Return Value

An [MTLFunction](../mtlfunction.md), or `nil` if the named function isn’t found in the library.

<a id="discussion"></a>

## Discussion

If you call this method to retrieve a function that doesn’t use function constants, it returns an [MTLFunction](../mtlfunction.md) instance that you can use to build a render or compute pipeline.

If you call this method to retrieve a function that uses function constants to specialize its behavior, you can only use the returned instance to query the `functionConstants` property for the list of function constants. You can’t use to create a render or compute pipeline. To get a specialized instance that you can use to create a pipeline instance, call the [newFunctionWithName:constantValues:completionHandler:](makefunction%28name_constantvalues_completionhandler_%29.md) method or [newFunctionWithName:constantValues:error:](makefunction%28name_constantvalues_%29.md) to generate a specialized function.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Creating shader function instances

- [newFunctionWithName:constantValues:completionHandler:](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [newFunctionWithName:constantValues:error:](makefunction%28name_constantvalues_%29.md): Synchronously creates a specialized shader function.
- [newFunctionWithDescriptor:completionHandler:](makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [newFunctionWithDescriptor:error:](makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.
