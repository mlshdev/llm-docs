> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinestagedynamiclinkingdescriptor/preloadedlibraries](https://developer.apple.com/documentation/metal/mtl4pipelinestagedynamiclinkingdescriptor/preloadedlibraries)

# preloadedLibraries (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides an array of dynamic libraries the compiler loads when it builds the pipeline.

## Declaration

```swift
var preloadedLibraries: [any MTLDynamicLibrary] { get set }
```

# preloadedLibraries (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides an array of dynamic libraries the compiler loads when it builds the pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<id<MTLDynamicLibrary>> * preloadedLibraries;
```
