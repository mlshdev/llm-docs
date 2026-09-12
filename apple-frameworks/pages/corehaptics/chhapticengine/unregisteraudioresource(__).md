> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/unregisteraudioresource(_:)](https://developer.apple.com/documentation/corehaptics/chhapticengine/unregisteraudioresource(_:))

# unregisterAudioResource(\_:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Unregisters an external audio file that you previously registered with the engine.

## Declaration

```swift
func unregisterAudioResource(_ resourceID: CHHapticAudioResourceID) throws
```

## Parameters

- `resourceID`: The ID of the audio resource you’d like to unregister.

## See Also

### Registering Audio Resources

- [registerAudioResource(\_:options:)](registeraudioresource%28__options_%29.md): Registers an external audio to use as a custom waveform.
- [CHHapticAudioResourceID](../chhapticaudioresourceid.md): A type that identifies a custom audio resource.

# unregisterAudioResource:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Unregisters an external audio file that you previously registered with the engine.

## Declaration

```objectivec
- (BOOL) unregisterAudioResource:(CHHapticAudioResourceID) resourceID error:(NSError **) outError;
```

## Parameters

- `resourceID`: The ID of the audio resource you’d like to unregister.
- `outError`: An error in Objective-C that contains information about failed resource unregistration, or `nil` if no error occurred.

## See Also

### Registering Audio Resources

- [registerAudioResource:options:error:](registeraudioresource%28__options_%29.md): Registers an external audio to use as a custom waveform.
- [CHHapticAudioResourceID](../chhapticaudioresourceid.md): A type that identifies a custom audio resource.
