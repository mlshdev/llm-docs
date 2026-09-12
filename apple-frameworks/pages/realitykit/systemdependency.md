> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/systemdependency](https://developer.apple.com/documentation/realitykit/systemdependency)

# SystemDependency

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Defines update order relative to other systems. An object that specifies the update order between multiple systems.

## Declaration

```swift
enum SystemDependency
```

<a id="overview"></a>

## Overview

Add instances of `SystemDependency` to your system’s [dependencies](system/dependencies.md) array to indicate whether RealityKit updates another specified system before or after this system.

## Topics

### Update order

- [SystemDependency.before(\_:)](systemdependency/before%28__%29.md): An update order that requests RealityKit update this system before it updates another specified system.
- [SystemDependency.after(\_:)](systemdependency/after%28__%29.md): An update order that requests RealityKit update this system after it updates another specified system.

### Operators

- [==(\_:\_:)](systemdependency/==%28____%29.md): Returns a Boolean value that indicates whether two dependencies are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying dependencies

- [dependencies](system/dependencies.md): An array of dependencies for this system.
