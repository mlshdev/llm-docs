> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makedynamiclibrary(url:)](https://developer.apple.com/documentation/metal/mtl4compiler/makedynamiclibrary(url:))

# makeDynamicLibrary(url:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new dynamic library from the contents of a file at an URL location synchronously.

## Declaration

```swift
func makeDynamicLibrary(url: URL) throws -> any MTLDynamicLibrary
```

## Parameters

- `url`: An URL referencing a file whose contents this compiler uses to build a dynamic library.

<a id="return-value"></a>

## Return Value

A new dynamic Metal library upon success, `nil` otherwise.

## Default Implementations

### MTL4Compiler Implementations

- [makeDynamicLibrary(url:)](makedynamiclibrary%28url_%29-18tis.md): Creates a new dynamic library from the contents of a file at an URL location synchronously.

# newDynamicLibraryWithURL:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new dynamic library from the contents of a file at an URL location synchronously.

## Declaration

```objectivec
- (id<MTLDynamicLibrary>) newDynamicLibraryWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: An URL referencing a file whose contents this compiler uses to build a dynamic library.
- `error`: An optional parameter into which Metal stores information in case of an error.

<a id="return-value"></a>

## Return Value

A new dynamic Metal library upon success, `nil` otherwise.

## Default Implementations

### MTL4Compiler Implementations

- [makeDynamicLibrary(url:)](makedynamiclibrary%28url_%29-18tis.md): Creates a new dynamic library from the contents of a file at an URL location synchronously.
