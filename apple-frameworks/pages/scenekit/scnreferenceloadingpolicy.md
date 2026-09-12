> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnreferenceloadingpolicy](https://developer.apple.com/documentation/scenekit/scnreferenceloadingpolicy)

# SCNReferenceLoadingPolicy (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for when to load the reference node’s content, used by the [loadingPolicy](scnreferencenode/loadingpolicy.md) property.

## Declaration

```swift
enum SCNReferenceLoadingPolicy
```

## Topics

### Constants

- [SCNReferenceLoadingPolicy.immediate](scnreferenceloadingpolicy/immediate.md): Load the node’s external content immediately when the reference node is unarchived.
- [SCNReferenceLoadingPolicy.onDemand](scnreferenceloadingpolicy/ondemand.md): Load the node’s external comment only when the [load()](scnreferencenode/load%28%29.md) method is called.

### Initializers

- [init(rawValue:)](scnreferenceloadingpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCNReferenceLoadingPolicy (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for when to load the reference node’s content, used by the [loadingPolicy](scnreferencenode/loadingpolicy.md) property.

## Declaration

```objectivec
enum SCNReferenceLoadingPolicy : NSInteger;
```

## Topics

### Constants

- [SCNReferenceLoadingPolicyImmediate](scnreferenceloadingpolicy/immediate.md): Load the node’s external content immediately when the reference node is unarchived.
- [SCNReferenceLoadingPolicyOnDemand](scnreferenceloadingpolicy/ondemand.md): Load the node’s external comment only when the [load](scnreferencenode/load%28%29.md) method is called.
