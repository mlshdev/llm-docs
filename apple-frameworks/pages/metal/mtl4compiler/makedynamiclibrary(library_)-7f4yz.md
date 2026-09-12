> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makedynamiclibrary(library:)-7f4yz](https://developer.apple.com/documentation/metal/mtl4compiler/makedynamiclibrary(library:)-7f4yz)

# makeDynamicLibrary(library:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new Metal library instance asynchronously.

## Declaration

```swift
func makeDynamicLibrary(library: any MTLLibrary) async throws -> any MTLDynamicLibrary
```

<a id="return-value"></a>

## Return Value

A dynamic metal library upon success, otherwise this function throws.
