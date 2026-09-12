> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject](https://developer.apple.com/documentation/phase/phaseobject)

# PHASEObject (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object in the scene.

## Declaration

```swift
class PHASEObject
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class models a member of your app’s scene by defining a 3D position and orientation.

The following subclasses derive from this class:

- **[PHASESource](phasesource.md)**: An object that plays audio from a 3D location and orientation in a scene.
- **[PHASEListener](phaselistener.md)**: A central point of reference that defines the area within the scene that’s most audible to the user.
- **[PHASEOccluder](phaseoccluder.md)**: An object with a shape and position that blocks audio from reaching the listener.

The [children](phaseobject/children.md) array holds instances of this class to position and orient them relatively.

## Topics

### Creating an Object

- [init(engine:)](phaseobject/init%28engine_%29.md): Creates an object in the scene.

### Managing the Hierarchy

- [children](phaseobject/children.md): Objects that position and orient in the scene relative to the given object.
- [parent](phaseobject/parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild(\_:)](phaseobject/addchild%28__%29.md): Adds the given object as a child.
- [removeChild(\_:)](phaseobject/removechild%28__%29.md): Removes the given object as a child.
- [removeChildren()](phaseobject/removechildren%28%29.md): Removes all child objects from the given object.

### Defining a Pose

- [transform](phaseobject/transform.md): A matrix, in local coordinates, that determines the object’s pose in the scene.
- [worldTransform](phaseobject/worldtransform.md): A matrix, in scene coordinates, that determines the object’s pose in the scene.

### Inspecting the Orientation

- [forward](phaseobject/forward.md): A vector that points forward in the local coordinate space.
- [right](phaseobject/right.md): A vector that points right in the local coordinate space.
- [up](phaseobject/up.md): A vector that points up in the local coordinate space.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEListener](phaselistener.md)
- [PHASEOccluder](phaseoccluder.md)
- [PHASESource](phasesource.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Soundscape Creation

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShape.Element](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

# PHASEObject (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object in the scene.

## Declaration

```objectivec
@interface PHASEObject : NSObject
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class models a member of your app’s scene by defining a 3D position and orientation.

The following subclasses derive from this class:

- **[PHASESource](phasesource.md)**: An object that plays audio from a 3D location and orientation in a scene.
- **[PHASEListener](phaselistener.md)**: A central point of reference that defines the area within the scene that’s most audible to the user.
- **[PHASEOccluder](phaseoccluder.md)**: An object with a shape and position that blocks audio from reaching the listener.

The [children](phaseobject/children.md) array holds instances of this class to position and orient them relatively.

## Topics

### Creating an Object

- [initWithEngine:](phaseobject/init%28engine_%29.md): Creates an object in the scene.

### Managing the Hierarchy

- [children](phaseobject/children.md): Objects that position and orient in the scene relative to the given object.
- [parent](phaseobject/parent.md): The object that this instance positions and orients relative to in the scene.
- [addChild:error:](phaseobject/addchild%28__%29.md): Adds the given object as a child.
- [removeChild:](phaseobject/removechild%28__%29.md): Removes the given object as a child.
- [removeChildren](phaseobject/removechildren%28%29.md): Removes all child objects from the given object.

### Defining a Pose

- [transform](phaseobject/transform.md): A matrix, in local coordinates, that determines the object’s pose in the scene.
- [worldTransform](phaseobject/worldtransform.md): A matrix, in scene coordinates, that determines the object’s pose in the scene.

### Inspecting the Orientation

- [forward](phaseobject/forward.md): A vector that points forward in the local coordinate space.
- [right](phaseobject/right.md): A vector that points right in the local coordinate space.
- [up](phaseobject/up.md): A vector that points up in the local coordinate space.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEListener](phaselistener.md)
- [PHASEOccluder](phaseoccluder.md)
- [PHASESource](phasesource.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Soundscape Creation

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShapeElement](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.
