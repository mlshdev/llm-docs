> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/rootobject](https://developer.apple.com/documentation/phase/phaseengine/rootobject)

# rootObject (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The main object to which the app adds child objects.

## Declaration

```swift
var rootObject: PHASEObject { get }
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

The framework creates and sets the root object at engine instantiation.

Avoid executing the following actions in your app; these actions cause the engine to generate a runtime error:

- Adding this object as a child.
- Altering the transform of this object.
- Copying this object.

# rootObject (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The main object to which the app adds child objects.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASEObject * rootObject;
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

The framework creates and sets the root object at engine instantiation.

Avoid executing the following actions in your app; these actions cause the engine to generate a runtime error:

- Adding this object as a child.
- Altering the transform of this object.
- Copying this object.
