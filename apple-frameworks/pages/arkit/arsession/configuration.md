> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/configuration](https://developer.apple.com/documentation/arkit/arsession/configuration)

# configuration (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object that defines motion and scene tracking behaviors for the session.

## Declaration

```swift
@NSCopying var configuration: ARConfiguration? { get }
```

## See Also

### Configuring and running a session

- [run(\_:options:)](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [identifier](identifier.md): A unique identifier of the running session.
- [ARSession.RunOptions](runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [pause()](pause%28%29.md): Pauses processing in the session.

# configuration (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object that defines motion and scene tracking behaviors for the session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) ARConfiguration * configuration;
```

## See Also

### Configuring and running a session

- [runWithConfiguration:options:](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [runWithConfiguration:](runwithconfiguration_.md): Starts AR processing for the session with the specified configuration.
- [identifier](identifier.md): A unique identifier of the running session.
- [ARSessionRunOptions](runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [pause](pause%28%29.md): Pauses processing in the session.
