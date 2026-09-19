> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocomponentinstancedispose(_:)

# AudioComponentInstanceDispose(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an audio component instance.

## Declaration

```swift
func AudioComponentInstanceDispose(_ inInstance: AudioComponentInstance) -> OSStatus
```

## Parameters

- `inInstance`: The audio component instance that you want to dispose of.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Creating an Audio Component Instance

- [AudioComponentInstanceNew(\_:\_:)](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstantiate(\_:\_:\_:)](audiocomponentinstantiate%28______%29.md)
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)

# AudioComponentInstanceDispose (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Disposes of an audio component instance.

## Declaration

```objectivec
extern OSStatus AudioComponentInstanceDispose(AudioComponentInstance inInstance);
```

## Parameters

- `inInstance`: The audio component instance that you want to dispose of.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Creating an Audio Component Instance

- [AudioComponentInstanceNew](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstantiate](audiocomponentinstantiate%28______%29.md)
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)
