> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine](https://developer.apple.com/documentation/phase/phaseengine)

# PHASEEngine (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that manages audio assets, controls playback, and configures environmental effects.

## Declaration

```swift
class PHASEEngine
```

<a id="overview"></a>

## Overview

Before using PHASE, an app creates an instance of this object. Apps access all of the framework’s functionality through engine functions or properties, or through other PHASE classes into which you pass the engine object.

> **Important**

>  You can create multiple engine instances, but normally, apps create only one.

<a id="Create-and-Start-the-Engine"></a>

### Create and Start the Engine

To create an engine object, choose a value for the [init(updateMode:)](phaseengine/init%28updatemode_%29.md) argument that selects the desired control over scene setup and playback timing.

```swift
// Apps that need precise audio synchronization and 
// synchronized dynamic mix control pass in `.manual`.
engine = PHASEEngine(updateMode: .automatic) 
```

Then, load your sound assets, sound event assets, and shapes for sound occlusion. Before your app attempts to play sounds, start the engine object.

```swift
do { try engine.start() } 
catch { /* Handle the error. */ }
```

To stop audio playback and enable the engine to deallocate system resources, call the [stop()](phaseengine/stop%28%29.md) function.

```swift
engine.stop()
```

## Topics

### Creating an Engine

- [init(updateMode:)](phaseengine/init%28updatemode_%29.md): Creates an engine updated by the app or framework.
- [init(updateMode:renderingMode:)](phaseengine/init%28updatemode_renderingmode_%29.md): Creates a new engine that has both update and rendering modes.
- [PHASEEngine.UpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.

### Registering Audio Resources

- [assetRegistry](phaseengine/assetregistry.md): An object that loads and unloads audio resources.

### Accessing Scene Hierarchy

- [rootObject](phaseengine/rootobject.md): The main object to which the app adds child objects.

### Defining Environmental Effects

- [defaultReverbPreset](phaseengine/defaultreverbpreset.md): The environmental surroundings that determine how sound resonates.
- [defaultMedium](phaseengine/defaultmedium.md): The physical matter through which sound travels.
- [outputSpatializationMode](phaseengine/outputspatializationmode.md): The mode the engine implements to create a 3D sound experience.

### Controlling and Inspecting Playback State

- [pause()](phaseengine/pause%28%29.md): Pauses all audio playback.
- [start()](phaseengine/start%28%29.md): Starts or resumes all audio playback.
- [stop()](phaseengine/stop%28%29.md): Stops all audio playback.
- [update()](phaseengine/update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](phaseengine/renderingstate.md): The status of the engine’s audio playback.
- [lastRenderTime](phaseengine/lastrendertime.md)

### Managing Groups of Sounds

- [groups](phaseengine/groups.md): A list of named groups that contain sounds the app operates on collectively.
- [activeGroupPreset](phaseengine/activegrouppreset.md): The settings that define playback for a group of sounds.
- [duckers](phaseengine/duckers.md): An array of objects that reduce the volume of simultaneously playing sounds.

### Accessing In-Flight Audio

- [soundEvents](phaseengine/soundevents.md): A collection of the sounds that play under various runtime circumstances.

### Measuring Units

- [unitsPerMeter](phaseengine/unitspermeter.md): A conversion factor from meters to your app’s preferred unit of measurement.
- [unitsPerSecond](phaseengine/unitspersecond.md): A conversion factor from seconds to your app’s preferred unit of time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setup

- [PHASEEngine.UpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.

# PHASEEngine (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that manages audio assets, controls playback, and configures environmental effects.

## Declaration

```objectivec
@interface PHASEEngine : NSObject
```

<a id="overview"></a>

## Overview

Before using PHASE, an app creates an instance of this object. Apps access all of the framework’s functionality through engine functions or properties, or through other PHASE classes into which you pass the engine object.

> **Important**

>  You can create multiple engine instances, but normally, apps create only one.

<a id="Create-and-Start-the-Engine"></a>

### Create and Start the Engine

To create an engine object, choose a value for the [initWithUpdateMode:](phaseengine/init%28updatemode_%29.md) argument that selects the desired control over scene setup and playback timing.

```swift
// Apps that need precise audio synchronization and 
// synchronized dynamic mix control pass in `.manual`.
engine = PHASEEngine(updateMode: .automatic) 
```

Then, load your sound assets, sound event assets, and shapes for sound occlusion. Before your app attempts to play sounds, start the engine object.

```swift
do { try engine.start() } 
catch { /* Handle the error. */ }
```

To stop audio playback and enable the engine to deallocate system resources, call the [stop](phaseengine/stop%28%29.md) function.

```swift
engine.stop()
```

## Topics

### Creating an Engine

- [initWithUpdateMode:](phaseengine/init%28updatemode_%29.md): Creates an engine updated by the app or framework.
- [initWithUpdateMode:renderingMode:](phaseengine/init%28updatemode_renderingmode_%29.md): Creates a new engine that has both update and rendering modes.
- [PHASEUpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.

### Registering Audio Resources

- [assetRegistry](phaseengine/assetregistry.md): An object that loads and unloads audio resources.

### Accessing Scene Hierarchy

- [rootObject](phaseengine/rootobject.md): The main object to which the app adds child objects.

### Defining Environmental Effects

- [defaultReverbPreset](phaseengine/defaultreverbpreset.md): The environmental surroundings that determine how sound resonates.
- [defaultMedium](phaseengine/defaultmedium.md): The physical matter through which sound travels.
- [outputSpatializationMode](phaseengine/outputspatializationmode.md): The mode the engine implements to create a 3D sound experience.

### Controlling and Inspecting Playback State

- [pause](phaseengine/pause%28%29.md): Pauses all audio playback.
- [startAndReturnError:](phaseengine/start%28%29.md): Starts or resumes all audio playback.
- [stop](phaseengine/stop%28%29.md): Stops all audio playback.
- [update](phaseengine/update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](phaseengine/renderingstate.md): The status of the engine’s audio playback.
- [lastRenderTime](phaseengine/lastrendertime.md)

### Managing Groups of Sounds

- [groups](phaseengine/groups.md): A list of named groups that contain sounds the app operates on collectively.
- [activeGroupPreset](phaseengine/activegrouppreset.md): The settings that define playback for a group of sounds.
- [duckers](phaseengine/duckers.md): An array of objects that reduce the volume of simultaneously playing sounds.

### Accessing In-Flight Audio

- [soundEvents](phaseengine/soundevents.md): A collection of the sounds that play under various runtime circumstances.

### Measuring Units

- [unitsPerMeter](phaseengine/unitspermeter.md): A conversion factor from meters to your app’s preferred unit of measurement.
- [unitsPerSecond](phaseengine/unitspersecond.md): A conversion factor from seconds to your app’s preferred unit of time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Setup

- [PHASEUpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.
