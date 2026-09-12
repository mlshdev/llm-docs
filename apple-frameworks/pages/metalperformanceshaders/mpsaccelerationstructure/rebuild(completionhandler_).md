> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsaccelerationstructure/rebuild(completionhandler:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsaccelerationstructure/rebuild(completionhandler:))

# rebuild(completionHandler:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```swift
func rebuild(completionHandler: @escaping @Sendable (MPSAccelerationStructure?) -> Void)
```

```swift
func rebuild() async -> MPSAccelerationStructure?
```

# rebuildWithCompletionHandler: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

## Declaration

```objectivec
- (void) rebuildWithCompletionHandler:(MPSAccelerationStructureCompletionHandler) completionHandler;
```
