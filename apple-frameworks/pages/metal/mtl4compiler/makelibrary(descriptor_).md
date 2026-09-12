> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makelibrary(descriptor:)](https://developer.apple.com/documentation/metal/mtl4compiler/makelibrary(descriptor:))

# makeLibrary(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new Metal library synchronously.

## Declaration

```swift
func makeLibrary(descriptor: MTL4LibraryDescriptor) throws -> any MTLLibrary
```

## Parameters

- `descriptor`: A description of the library to create.

<a id="return-value"></a>

## Return Value

A Metal library instance upon success, `nil` otherwise.

## Default Implementations

### MTL4Compiler Implementations

- [makeLibrary(descriptor:)](makelibrary%28descriptor_%29-6c46o.md): Creates a new Metal library asynchronously.

# newLibraryWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new Metal library synchronously.

## Declaration

```objectivec
- (id<MTLLibrary>) newLibraryWithDescriptor:(MTL4LibraryDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A description of the library to create.
- `error`: An optional parameter into which Metal stores information in case of an error.

<a id="return-value"></a>

## Return Value

A Metal library instance upon success, `nil` otherwise.

## Default Implementations

### MTL4Compiler Implementations

- [makeLibrary(descriptor:)](makelibrary%28descriptor_%29-6c46o.md): Creates a new Metal library asynchronously.
