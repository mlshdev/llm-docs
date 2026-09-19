> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlpredictionoptions/usescpuonly

# usesCPUOnly (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.13+ (deprecated in 12.0) · tvOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A Boolean value that indicates whether a prediction is computed using only the CPU.

## Declaration

```swift
var usesCPUOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Your model should be restricted to the CPU if it might run in the background or if your app has other GPU intensive tasks.

# usesCPUOnly (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.13+ (deprecated in 12.0) · tvOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A Boolean value that indicates whether a prediction is computed using only the CPU.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL usesCPUOnly;
```

<a id="Discussion"></a>

## Discussion

Your model should be restricted to the CPU if it might run in the background or if your app has other GPU intensive tasks.
