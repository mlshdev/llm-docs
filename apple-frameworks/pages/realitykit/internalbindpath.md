> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/internalbindpath](https://developer.apple.com/documentation/realitykit/internalbindpath)

# InternalBindPath

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS

A bind target for framework-provided properties.

## Declaration

```swift
struct InternalBindPath
```

<a id="overview"></a>

## Overview

This structure defines a bind path for the [BindTarget.internal(\_:)](bindtarget/internal%28__%29.md) case. As a reference to framework properties, this bind target hides its path. You can, however, store and assign instances of this structure.

## See Also

### Bindable animation targets

- [BindPath](bindpath.md): The components of a target’s path that refer to the animation properties of a nested scene or entity.
- [BindTarget](bindtarget.md): A reference to a particular scene, entity, or property that animates.
- [BindableValue](bindablevalue.md): The value of a bindable target.
- [BindableValuesReference](bindablevaluesreference.md): A reference to a bindable value of an animation.
- [ParameterSet](parameterset.md): A reference to general-purpose entity parameters for animations.
