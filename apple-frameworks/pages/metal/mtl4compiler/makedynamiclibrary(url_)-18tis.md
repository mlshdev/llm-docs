> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makedynamiclibrary(url:)-18tis](https://developer.apple.com/documentation/metal/mtl4compiler/makedynamiclibrary(url:)-18tis)

# makeDynamicLibrary(url:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new dynamic library from the contents of a file at an URL location synchronously.

## Declaration

```swift
func makeDynamicLibrary(url: URL) async throws -> any MTLDynamicLibrary
```

## Parameters

- `url`: An URL referencing a file whose contents this compiler uses to build a dynamic library.

<a id="return-value"></a>

## Return Value

A dynamic metal library upon success, otherwise this function throws.
