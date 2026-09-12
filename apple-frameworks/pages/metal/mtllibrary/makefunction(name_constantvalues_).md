> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/makefunction(name:constantvalues:)](https://developer.apple.com/documentation/metal/mtllibrary/makefunction(name:constantvalues:))

# makeFunction(name:constantValues:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously creates a specialized shader function.

## Declaration

```swift
func makeFunction(name: String, constantValues: MTLFunctionConstantValues) throws -> any MTLFunction
```

## Parameters

- `name`: The name of the specialized function.
- `constantValues`: The set of constant values for the function constants. The compiler can’t compile the function if any value is invalid for the function constants it requires.

<a id="return-value"></a>

## Return Value

A new [MTLFunction](../mtlfunction.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

Function constant values are first looked up by their index, then by their name. The compiler ignores any values that don’t correspond to a function constant in the named function, and doesn’t generate errors or warnings.

## See Also

### Creating shader function instances

- [makeFunction(name:)](makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [makeFunction(name:constantValues:completionHandler:)](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [makeFunction(descriptor:completionHandler:)](makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [makeFunction(descriptor:)](makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.

# newFunctionWithName:constantValues:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously creates a specialized shader function.

## Declaration

```objectivec
- (id<MTLFunction>) newFunctionWithName:(NSString *) name constantValues:(MTLFunctionConstantValues *) constantValues error:(NSError **) error;
```

## Parameters

- `name`: The name of the specialized function.
- `constantValues`: The set of constant values for the function constants. The compiler can’t compile the function if any value is invalid for the function constants it requires.
- `error`: A pointer to an error instance that describes compilation problems, if any. The error contains compiler errors if the specialized function is `nil`, and warnings if the compiler creates a specialized function with warnings. The error instance is `nil` if the compiler creates the specialized function successfully, without any errors or warnings.

<a id="return-value"></a>

## Return Value

A new [MTLFunction](../mtlfunction.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

Function constant values are first looked up by their index, then by their name. The compiler ignores any values that don’t correspond to a function constant in the named function, and doesn’t generate errors or warnings.

## See Also

### Creating shader function instances

- [newFunctionWithName:](makefunction%28name_%29.md): Creates an instance that represents a shader function in the library.
- [newFunctionWithName:constantValues:completionHandler:](makefunction%28name_constantvalues_completionhandler_%29.md): Asynchronously creates a specialized shader function.
- [newFunctionWithDescriptor:completionHandler:](makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [newFunctionWithDescriptor:error:](makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.
