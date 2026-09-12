> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseautomaticheadtrackingflags](https://developer.apple.com/documentation/phase/phaseautomaticheadtrackingflags)

# PHASEAutomaticHeadTrackingFlags (Swift)

**Framework:** PHASE  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 26.0+

## Declaration

```swift
struct PHASEAutomaticHeadTrackingFlags
```

<a id="overview"></a>

## Overview

Automatic Head-Tracking flags.

```
On capable devices, listener orientation will be automatically rotated based on user's head-orientation.
```

```
On capable devices, listener position will be automatically set based on user's position.
```

## Topics

### Initializers

- [init(rawValue:)](phaseautomaticheadtrackingflags/init%28rawvalue_%29.md)

### Type Properties

- [orientation](phaseautomaticheadtrackingflags/orientation.md)
- [position](phaseautomaticheadtrackingflags/position.md)

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

# PHASEAutomaticHeadTrackingFlags (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 26.0+

## Declaration

```objectivec
enum PHASEAutomaticHeadTrackingFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

Automatic Head-Tracking flags.

```
On capable devices, listener orientation will be automatically rotated based on user's head-orientation.
```

```
On capable devices, listener position will be automatically set based on user's position.
```

## Topics

### Enumeration Cases

- [PHASEAutomaticHeadTrackingFlagOrientation](phaseautomaticheadtrackingflags/orientation.md)
- [PHASEAutomaticHeadTrackingFlagPosition](phaseautomaticheadtrackingflags/position.md)
