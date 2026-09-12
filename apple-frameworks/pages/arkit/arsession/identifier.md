> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/identifier](https://developer.apple.com/documentation/arkit/arsession/identifier)

# identifier (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A unique identifier of the running session.

## Declaration

```swift
var identifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

This property might change after you call the run function, but not immediately. Therefore, to get the new value, listen for its change using key-value observation.

```swift
// Use key-value observation to monitor my ARSession's identifier.
var sessionIDObservation: NSKeyValueObservation?
...
sessionIDObservation = observe(
    .arView.session.identifier,
    options: [.old, .new]) { 
        object, change in
        print("SessionID changed to: \(change.newValue!)")
    }
```

## See Also

### Configuring and running a session

- [run(\_:options:)](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [ARSession.RunOptions](runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [configuration](configuration.md): An object that defines motion and scene tracking behaviors for the session.
- [pause()](pause%28%29.md): Pauses processing in the session.

# identifier (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A unique identifier of the running session.

## Declaration

```objectivec
@property (atomic, strong, readonly) NSUUID * identifier;
```

<a id="Discussion"></a>

## Discussion

This property might change after you call the run function, but not immediately. Therefore, to get the new value, listen for its change using key-value observation.

```swift
// Use key-value observation to monitor my ARSession's identifier.
var sessionIDObservation: NSKeyValueObservation?
...
sessionIDObservation = observe(
    .arView.session.identifier,
    options: [.old, .new]) { 
        object, change in
        print("SessionID changed to: \(change.newValue!)")
    }
```

## See Also

### Configuring and running a session

- [runWithConfiguration:options:](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [runWithConfiguration:](runwithconfiguration_.md): Starts AR processing for the session with the specified configuration.
- [ARSessionRunOptions](runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [configuration](configuration.md): An object that defines motion and scene tracking behaviors for the session.
- [pause](pause%28%29.md): Pauses processing in the session.
