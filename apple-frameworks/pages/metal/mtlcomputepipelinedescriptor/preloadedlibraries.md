> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor/preloadedlibraries](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/preloadedlibraries)

# preloadedLibraries (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The dynamic libraries that contain precompiled shader functions you want to link.

## Declaration

```swift
var preloadedLibraries: [any MTLDynamicLibrary] { get set }
```

## See Also

### Loading dynamic libraries to link at runtime

- [insertLibraries](insertlibraries.md): Deprecated. The dynamic libraries that contain precompiled shader functions you want to link.

# preloadedLibraries (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The dynamic libraries that contain precompiled shader functions you want to link.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<id<MTLDynamicLibrary>> * preloadedLibraries;
```

## See Also

### Loading dynamic libraries to link at runtime

- [insertLibraries](insertlibraries.md): Deprecated. The dynamic libraries that contain precompiled shader functions you want to link.
