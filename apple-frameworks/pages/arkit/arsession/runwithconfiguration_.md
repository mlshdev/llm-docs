> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/runwithconfiguration:](https://developer.apple.com/documentation/arkit/arsession/runwithconfiguration:)

# runWithConfiguration:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Starts AR processing for the session with the specified configuration.

## Declaration

```objectivec
- (void) runWithConfiguration:(ARConfiguration *) configuration;
```

## Parameters

- `configuration`: An object that defines motion and scene tracking behaviors for the session.

<a id="Discussion"></a>

## Discussion

The session tracks device motion, captures and processes scene imagery from the device camera, and coordinates with your [delegate](delegate.md) object or [ARSCNView](../arscnview.md) or [ARSKView](../arskview.md) view only when running.

Calling this method on a session that has already started transitions immediately to the new session configuration. After you call this method, the session runs asynchronously.

To determine how existing session state transitions to the new configuration, use the [runWithConfiguration:options:](run%28__options_%29.md) method instead. Calling [runWithConfiguration:](runwithconfiguration_.md) is equivalent to calling [runWithConfiguration:options:](run%28__options_%29.md) with no options enabled.

## See Also

### Configuring and running a session

- [runWithConfiguration:options:](run%28__options_%29.md): Starts AR processing for the session with the specified configuration and options.
- [identifier](identifier.md): A unique identifier of the running session.
- [ARSessionRunOptions](runoptions.md): Options for transitioning an AR session’s current state when you change its configuration.
- [configuration](configuration.md): An object that defines motion and scene tracking behaviors for the session.
- [pause](pause%28%29.md): Pauses processing in the session.
