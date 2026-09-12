> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4visibilityoptions/resourcealias](https://developer.apple.com/documentation/metal/mtl4visibilityoptions/resourcealias)

# resourceAlias (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Flushes caches to ensure that aliased virtual addresses are memory consistent.

## Declaration

```swift
static var resourceAlias: MTL4VisibilityOptions { get }
```

<a id="discussion"></a>

## Discussion

On some systems this may be the GPU+CPU (system) memory coherence point and on other systems it may be the GPU (device) memory coherence point.

# MTL4VisibilityOptionResourceAlias (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Flushes caches to ensure that aliased virtual addresses are memory consistent.

## Declaration

```objectivec
MTL4VisibilityOptionResourceAlias
```

<a id="discussion"></a>

## Discussion

On some systems this may be the GPU+CPU (system) memory coherence point and on other systems it may be the GPU (device) memory coherence point.
