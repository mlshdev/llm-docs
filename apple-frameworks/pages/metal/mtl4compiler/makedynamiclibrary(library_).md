> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makedynamiclibrary(library:)](https://developer.apple.com/documentation/metal/mtl4compiler/makedynamiclibrary(library:))

# makeDynamicLibrary(library:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new dynamic library from a library containing Metal IR code synchronously.

## Declaration

```swift
func makeDynamicLibrary(library: any MTLLibrary) throws -> any MTLDynamicLibrary
```

## Parameters

- `library`: A library from which this compiler creates the new a dynamic library

<a id="return-value"></a>

## Return Value

A new dynamic Metal library upon success, `nil` otherwise.

## Default Implementations

### MTL4Compiler Implementations

- [makeDynamicLibrary(library:)](makedynamiclibrary%28library_%29-7f4yz.md): Creates a new Metal library instance asynchronously.

# newDynamicLibrary:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new dynamic library from a library containing Metal IR code synchronously.

## Declaration

```objectivec
- (id<MTLDynamicLibrary>) newDynamicLibrary:(id<MTLLibrary>) library error:(NSError **) error;
```

## Parameters

- `library`: A library from which this compiler creates the new a dynamic library
- `error`: An optional parameter into which Metal stores information in case of an error.

<a id="return-value"></a>

## Return Value

A new dynamic Metal library upon success, `nil` otherwise.

## Default Implementations

### MTL4Compiler Implementations

- [makeDynamicLibrary(library:)](makedynamiclibrary%28library_%29-7f4yz.md): Creates a new Metal library instance asynchronously.
