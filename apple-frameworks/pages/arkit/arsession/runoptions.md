> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/runoptions](https://developer.apple.com/documentation/arkit/arsession/runoptions)

# ARSession.RunOptions (Swift)

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Options for transitioning an AR session’s current state when you change its configuration.

## Declaration

```swift
struct RunOptions
```

## Topics

### Creating Run Options

- [init(rawValue:)](runoptions/init%28rawvalue_%29.md): Creates a run options.

### Run Options

- [resetTracking](runoptions/resettracking.md): An option to reset the device’s position from the session’s previous run.
- [removeExistingAnchors](runoptions/removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [stopTrackedRaycasts](runoptions/stoptrackedraycasts.md): An option to stop all active tracked raycasts.
- [resetSceneReconstruction](runoptions/resetscenereconstruction.md): An option to reset the scene mesh.

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

## See Also

### Configuring and running a session

- [run(\_:options:)](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [identifier](identifier.md): A unique identifier of the running session.
- [configuration](configuration.md): An object that defines motion and scene tracking behaviors for the session.
- [pause()](pause%28%29.md): Pauses processing in the session.

# ARSessionRunOptions (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Options for transitioning an AR session’s current state when you change its configuration.

## Declaration

```objectivec
enum ARSessionRunOptions : NSUInteger;
```

## Topics

### Run Options

- [ARSessionRunOptionResetTracking](runoptions/resettracking.md): An option to reset the device’s position from the session’s previous run.
- [ARSessionRunOptionRemoveExistingAnchors](runoptions/removeexistinganchors.md): An option to remove any anchor objects associated with the session’s previous run.
- [ARSessionRunOptionStopTrackedRaycasts](runoptions/stoptrackedraycasts.md): An option to stop all active tracked raycasts.
- [ARSessionRunOptionResetSceneReconstruction](runoptions/resetscenereconstruction.md): An option to reset the scene mesh.

## See Also

### Configuring and running a session

- [runWithConfiguration:options:](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [runWithConfiguration:](runwithconfiguration_.md): Starts AR processing for the session with the specified configuration.
- [identifier](identifier.md): A unique identifier of the running session.
- [configuration](configuration.md): An object that defines motion and scene tracking behaviors for the session.
- [pause](pause%28%29.md): Pauses processing in the session.
