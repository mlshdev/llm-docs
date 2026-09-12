> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticaudioresourceid](https://developer.apple.com/documentation/corehaptics/chhapticaudioresourceid)

# CHHapticAudioResourceID (Swift)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A type that identifies a custom audio resource.

## Declaration

```swift
typealias CHHapticAudioResourceID = Int
```

## See Also

### Registering Audio Resources

- [registerAudioResource(\_:options:)](chhapticengine/registeraudioresource%28__options_%29.md): Registers an external audio to use as a custom waveform.
- [unregisterAudioResource(\_:)](chhapticengine/unregisteraudioresource%28__%29.md): Unregisters an external audio file that you previously registered with the engine.

# CHHapticAudioResourceID (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A type that identifies a custom audio resource.

## Declaration

```objectivec
typedef NSUInteger CHHapticAudioResourceID;
```

## See Also

### Registering Audio Resources

- [registerAudioResource:options:error:](chhapticengine/registeraudioresource%28__options_%29.md): Registers an external audio to use as a custom waveform.
- [unregisterAudioResource:error:](chhapticengine/unregisteraudioresource%28__%29.md): Unregisters an external audio file that you previously registered with the engine.
