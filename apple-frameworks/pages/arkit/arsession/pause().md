> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/pause()](https://developer.apple.com/documentation/arkit/arsession/pause())

# pause() (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Pauses processing in the session.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

While paused, the session doesn’t track device motion or capture scene imagery, nor does it coordinate with its [delegate](delegate.md) object or update any associated [RealityView](../../realitykit/realityview.md) or [ARView](../../realitykit/arview.md) object.

## See Also

### Configuring and running a session

- [run(\_:options:)](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [identifier](identifier.md): A unique identifier of the running session.
- [ARSession.RunOptions](runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [configuration](configuration.md): An object that defines motion and scene tracking behaviors for the session.

# pause (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Pauses processing in the session.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

While paused, the session doesn’t track device motion or capture scene imagery, nor does it coordinate with its [delegate](delegate.md) object or update any associated [RealityView](../../realitykit/realityview.md) or [ARView](../../realitykit/arview.md) object.

## See Also

### Configuring and running a session

- [runWithConfiguration:options:](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [runWithConfiguration:](runwithconfiguration_.md): Starts AR processing for the session with the specified configuration.
- [identifier](identifier.md): A unique identifier of the running session.
- [ARSessionRunOptions](runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [configuration](configuration.md): An object that defines motion and scene tracking behaviors for the session.
