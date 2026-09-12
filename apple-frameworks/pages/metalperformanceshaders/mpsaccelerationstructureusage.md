> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsaccelerationstructureusage](https://developer.apple.com/documentation/metalperformanceshaders/mpsaccelerationstructureusage)

# MPSAccelerationStructureUsage (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Options that describe how an acceleration structure will be used.

## Declaration

```swift
struct MPSAccelerationStructureUsage
```

## Topics

### Initializers

- [init(rawValue:)](mpsaccelerationstructureusage/init%28rawvalue_%29.md): Deprecated.

### Type Properties

- [frequentRebuild](mpsaccelerationstructureusage/frequentrebuild.md): Deprecated. Option indicating that the acceleration structure will be rebuilt frequently.
- [preferCPUBuild](mpsaccelerationstructureusage/prefercpubuild.md): Deprecated.
- [preferGPUBuild](mpsaccelerationstructureusage/prefergpubuild.md): Deprecated.
- [refit](mpsaccelerationstructureusage/refit.md): Deprecated. Option that enables support for refitting the acceleration structure after it has been built.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# MPSAccelerationStructureUsage (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Options that describe how an acceleration structure will be used.

## Declaration

```objectivec
enum MPSAccelerationStructureUsage : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSAccelerationStructureUsageNone](mpsaccelerationstructureusage/mpsaccelerationstructureusagenone.md): Deprecated.
- [MPSAccelerationStructureUsageFrequentRebuild](mpsaccelerationstructureusage/frequentrebuild.md): Deprecated. Option indicating that the acceleration structure will be rebuilt frequently.
- [MPSAccelerationStructureUsagePreferCPUBuild](mpsaccelerationstructureusage/prefercpubuild.md): Deprecated.
- [MPSAccelerationStructureUsagePreferGPUBuild](mpsaccelerationstructureusage/prefergpubuild.md): Deprecated.
- [MPSAccelerationStructureUsageRefit](mpsaccelerationstructureusage/refit.md): Deprecated. Option that enables support for refitting the acceleration structure after it has been built.
