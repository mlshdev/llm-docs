> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentinstancenew(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentinstancenew(_:_:))

# AudioComponentInstanceNew(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a new instance of an audio component.

## Declaration

```swift
func AudioComponentInstanceNew(_ inComponent: AudioComponent, _ outInstance: UnsafeMutablePointer<AudioComponentInstance?>) -> OSStatus
```

## Parameters

- `inComponent`: The audio component that you want to create a new instance of.
- `outInstance`: On output, the new audio component instance.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Hosting Audio Unit Extensions Using the AUv2 API](hosting-audio-unit-extensions-using-the-auv2-api.md)

## See Also

### Creating an Audio Component Instance

- [AudioComponentInstantiate(\_:\_:\_:)](audiocomponentinstantiate%28______%29.md)
- [AudioComponentInstanceDispose(\_:)](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)

# AudioComponentInstanceNew (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a new instance of an audio component.

## Declaration

```objectivec
extern OSStatus AudioComponentInstanceNew(AudioComponent inComponent, AudioComponentInstance*outInstance);
```

## Parameters

- `inComponent`: The audio component that you want to create a new instance of.
- `outInstance`: On output, the new audio component instance.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Hosting Audio Unit Extensions Using the AUv2 API](hosting-audio-unit-extensions-using-the-auv2-api.md)

## See Also

### Creating an Audio Component Instance

- [AudioComponentInstantiate](audiocomponentinstantiate%28______%29.md)
- [AudioComponentInstanceDispose](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)
