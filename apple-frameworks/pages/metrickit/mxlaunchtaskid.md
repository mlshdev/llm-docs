> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxlaunchtaskid](https://developer.apple.com/documentation/metrickit/mxlaunchtaskid)

# MXLaunchTaskID (Swift)

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The task identifier to track launch measurements.

> Use [LaunchTaskID](launchtaskid.md) instead.

## Declaration

```swift
struct MXLaunchTaskID
```

## Topics

### Creating a task identifier

- [init(\_:)](mxlaunchtaskid/init%28__%29.md): Deprecated. Creates a task identifer from a string.
- [init(rawValue:)](mxlaunchtaskid/init%28rawvalue_%29.md): Deprecated. Creates a task identifer from a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responsiveness metrics

- [MXAnimationMetric](mxanimationmetric.md): Deprecated. An object representing metrics about the responsiveness of animation in the app.
- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.

# MXLaunchTaskID (Objective-C)

**Framework:** MetricKit  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The task identifier to track launch measurements.

> Use [LaunchTaskID](launchtaskid.md) instead.

## Declaration

```objectivec
typedef const NSString * const MXLaunchTaskID;
```

## See Also

### Responsiveness metrics

- [MXAnimationMetric](mxanimationmetric.md): Deprecated. An object representing metrics about the responsiveness of animation in the app.
- [MXAppLaunchMetric](mxapplaunchmetric.md): Deprecated. An object representing metrics about app launch time.
- [MXAppResponsivenessMetric](mxappresponsivenessmetric.md): Deprecated. An object representing metrics about the responsiveness of the app to user interaction.
