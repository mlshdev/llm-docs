> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor/insertlibraries](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/insertlibraries)

# insertLibraries (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · tvOS 14.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The dynamic libraries that contain precompiled shader functions you want to link.

> Use the [preloadedLibraries](preloadedlibraries.md) property instead.

## Declaration

```swift
var insertLibraries: [any MTLDynamicLibrary]? { get set }
```

## See Also

### Loading dynamic libraries to link at runtime

- [preloadedLibraries](preloadedlibraries.md): The dynamic libraries that contain precompiled shader functions you want to link.

# insertLibraries (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · tvOS 14.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The dynamic libraries that contain precompiled shader functions you want to link.

> Use the [preloadedLibraries](preloadedlibraries.md) property instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLDynamicLibrary>> * insertLibraries;
```

## See Also

### Loading dynamic libraries to link at runtime

- [preloadedLibraries](preloadedlibraries.md): The dynamic libraries that contain precompiled shader functions you want to link.
