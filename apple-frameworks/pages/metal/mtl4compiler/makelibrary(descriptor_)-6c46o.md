> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makelibrary(descriptor:)-6c46o](https://developer.apple.com/documentation/metal/mtl4compiler/makelibrary(descriptor:)-6c46o)

# makeLibrary(descriptor:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new Metal library asynchronously.

## Declaration

```swift
func makeLibrary(descriptor: MTL4LibraryDescriptor) async throws -> any MTLLibrary
```

## Parameters

- `descriptor`: A description of the library to create.

<a id="return-value"></a>

## Return Value

A Metal library instance upon success, otherwise this function throws.
