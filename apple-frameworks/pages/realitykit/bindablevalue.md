> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindablevalue](https://developer.apple.com/documentation/realitykit/bindablevalue)

# BindableValue

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The value of a bindable target.

## Declaration

```swift
struct BindableValue<T> where T : BindableData
```

<a id="overview"></a>

## Overview

This structure holds the value of an animatable property ([animatedValue](bindablevalue/animatedvalue.md)), that is, the target property that animates. In addition, the structure stores the property’s original value ([baseValue](bindablevalue/basevalue.md)), which represents the property’s value before a running animation starts. The [value](bindablevalue/value.md) property returns the animated value when an animation runs; when the animation isn’t running, it returns the base value.

## Topics

### Creating a value

- [init(\_:animatedValue:)](bindablevalue/init%28__animatedvalue_%29.md): Creates a bindable value.

### Accessing the value

- [value](bindablevalue/value.md): The main accessor for the bind value.
- [baseValue](bindablevalue/basevalue.md): A value that reflects the state of the animated property before or after an animation.
- [animatedValue](bindablevalue/animatedvalue.md): A value that represents the state of the animated property as an animation progresses.

## See Also

### Bindable animation targets

- [BindPath](bindpath.md): The components of a target’s path that refer to the animation properties of a nested scene or entity.
- [BindTarget](bindtarget.md): A reference to a particular scene, entity, or property that animates.
- [BindableValuesReference](bindablevaluesreference.md): A reference to a bindable value of an animation.
- [ParameterSet](parameterset.md): A reference to general-purpose entity parameters for animations.
- [InternalBindPath](internalbindpath.md): A bind target for framework-provided properties.
