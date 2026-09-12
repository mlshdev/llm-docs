> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/parameterset](https://developer.apple.com/documentation/realitykit/parameterset)

# ParameterSet

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A reference to general-purpose entity parameters for animations.

## Declaration

```swift
struct ParameterSet
```

<a id="overview"></a>

## Overview

Subscript this structure to access a particular property by name. The return value is [BindableValue](bindablevalue.md) `<T>`, where `T` is one of the adopting [BindableData](bindabledata.md) types.

As a reference, this structure doesn’t exhibit copy-on-write behavior.

## Topics

### Accessing a parameter by name

- [subscript(\_:\_:)](parameterset/subscript%28____%29.md): Provides a bindable value for the given name.

## See Also

### Bindable animation targets

- [BindPath](bindpath.md): The components of a target’s path that refer to the animation properties of a nested scene or entity.
- [BindTarget](bindtarget.md): A reference to a particular scene, entity, or property that animates.
- [BindableValue](bindablevalue.md): The value of a bindable target.
- [BindableValuesReference](bindablevaluesreference.md): A reference to a bindable value of an animation.
- [InternalBindPath](internalbindpath.md): A bind target for framework-provided properties.
