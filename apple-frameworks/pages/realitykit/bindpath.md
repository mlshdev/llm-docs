> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindpath](https://developer.apple.com/documentation/realitykit/bindpath)

# BindPath

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The components of a target’s path that refer to the animation properties of a nested scene or entity.

## Declaration

```swift
struct BindPath
```

<a id="overview"></a>

## Overview

The following code demonstrates bind target paths with varying numbers of elements. For a multicomponent target, call the [BindPath.Part](bindpath/part.md) enumeration for each component. The individual elements form the path’s resulting [parts](bindpath/parts.md) array.

```swift
// Single-component paths:
let target0: BindTarget = .transform
let target1: BindTarget = .jointTransforms
let target2: BindTarget = .parameter("myInt")

// Relative entity path:
let target3: BindTarget = .entity("entityA").entity("entityB").parameter("myInt")

// Root entity path:
let target4: BindTarget = .anchorEntity("entityA").entity("entityB").transform

// Scene path:
let target5: BindTarget = .scene("sceneA").anchorEntity("entityA").entity("entityB").jointTransforms
```

## Topics

### Composing a property identifier

- [parts](bindpath/parts.md): An array of the individual components of a complete bind path.
- [BindPath.Part](bindpath/part.md): An individual piece of a larger path that refers to the target of an animation.

## See Also

### Bindable animation targets

- [BindTarget](bindtarget.md): A reference to a particular scene, entity, or property that animates.
- [BindableValue](bindablevalue.md): The value of a bindable target.
- [BindableValuesReference](bindablevaluesreference.md): A reference to a bindable value of an animation.
- [ParameterSet](parameterset.md): A reference to general-purpose entity parameters for animations.
- [InternalBindPath](internalbindpath.md): A bind target for framework-provided properties.
