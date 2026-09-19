> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/bindablevaluesreference

# BindableValuesReference

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A reference to a bindable value of an animation.

## Declaration

```swift
struct BindableValuesReference
```

<a id="overview"></a>

## Overview

As the name indicates, this structure doesn’t exhibit copy-on-write behavior because it’s a reference. This is in contrast to the [BindableValue](bindablevalue.md) structure.

## Topics

### Accessing values

- [subscript(\_:\_:)](bindablevaluesreference/subscript%28____%29.md): Returns the bindable value at the subscripted index.

## See Also

### Bindable animation targets

- [BindPath](bindpath.md): The components of a target’s path that refer to the animation properties of a nested scene or entity.
- [BindTarget](bindtarget.md): A reference to a particular scene, entity, or property that animates.
- [BindableValue](bindablevalue.md): The value of a bindable target.
- [ParameterSet](parameterset.md): A reference to general-purpose entity parameters for animations.
- [InternalBindPath](internalbindpath.md): A bind target for framework-provided properties.
