> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4archive/makebinaryfunction(descriptor:)](https://developer.apple.com/documentation/metal/mtl4archive/makebinaryfunction(descriptor:))

# makeBinaryFunction(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Synchronously creates a binary version of a GPU visible function or GPU intersection function.

## Declaration

```swift
func makeBinaryFunction(descriptor: MTL4BinaryFunctionDescriptor) throws -> any MTL4BinaryFunction
```

## Parameters

- `descriptor`: A configuration that tells the method which GPU function to make into a binary function and which options to apply when compiling it.

<a id="return-value"></a>

## Return Value

A new GPU binary function instance if the method succeeds; otherwise `nil`.

# newBinaryFunctionWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Synchronously creates a binary version of a GPU visible function or GPU intersection function.

## Declaration

```objectivec
- (id<MTL4BinaryFunction>) newBinaryFunctionWithDescriptor:(MTL4BinaryFunctionDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A configuration that tells the method which GPU function to make into a binary function and which options to apply when compiling it.
- `error`: An optional pointer to an error pointer where the method returns the problem details when it can’t create a binary GPU function.

<a id="return-value"></a>

## Return Value

A new GPU binary function instance if the method succeeds; otherwise `nil`.
