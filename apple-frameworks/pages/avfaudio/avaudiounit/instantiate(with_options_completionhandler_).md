> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounit/instantiate(with:options:completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudiounit/instantiate(with:options:completionhandler:))

# instantiate(with:options:completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates an instance of an audio unit component asynchronously and wraps it in an audio unit class.

## Declaration

```swift
class func instantiate(with audioComponentDescription: AudioComponentDescription, options: AudioComponentInstantiationOptions = [], completionHandler: @escaping @Sendable (AVAudioUnit?, (any Error)?) -> Void)
```

```swift
class func instantiate(with audioComponentDescription: AudioComponentDescription, options: AudioComponentInstantiationOptions = []) async throws -> AVAudioUnit
```

## Parameters

- `audioComponentDescription`: The component to create.
- `options`: The options the method uses to create the component.
- `completionHandler`: A handler the framework calls in an arbitrary thread context when creation completes. Retain the [AVAudioUnit](../avaudiounit.md) this handler provides.

<a id="discussion"></a>

## Discussion

You must create components with flags that include [requiresAsyncInstantiation](../../audiotoolbox/audiocomponentflags/requiresasyncinstantiation.md) asynchronously through this method if they’re for use with [AVAudioEngine](../avaudioengine.md).

The [AVAudioUnit](../avaudiounit.md) instance is usually a subclass that the method selects according to the components type. For example, [AVAudioUnitEffect](../avaudiouniteffect.md), [AVAudioUnitGenerator](../avaudiounitgenerator.md), [AVAudioUnitMIDIInstrument](../avaudiounitmidiinstrument.md), or [AVAudioUnitTimeEffect](../avaudiounittimeeffect.md).

# instantiateWithComponentDescription:options:completionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates an instance of an audio unit component asynchronously and wraps it in an audio unit class.

## Declaration

```objectivec
+ (void) instantiateWithComponentDescription:(AudioComponentDescription) audioComponentDescription options:(AudioComponentInstantiationOptions) options completionHandler:(void (^)(AVAudioUnit *audioUnit, NSError *error)) completionHandler;
```

## Parameters

- `audioComponentDescription`: The component to create.
- `options`: The options the method uses to create the component.
- `completionHandler`: A handler the framework calls in an arbitrary thread context when creation completes. Retain the [AVAudioUnit](../avaudiounit.md) this handler provides.

<a id="discussion"></a>

## Discussion

You must create components with flags that include [kAudioComponentFlag_RequiresAsyncInstantiation](../../audiotoolbox/audiocomponentflags/requiresasyncinstantiation.md) asynchronously through this method if they’re for use with [AVAudioEngine](../avaudioengine.md).

The [AVAudioUnit](../avaudiounit.md) instance is usually a subclass that the method selects according to the components type. For example, [AVAudioUnitEffect](../avaudiouniteffect.md), [AVAudioUnitGenerator](../avaudiounitgenerator.md), [AVAudioUnitMIDIInstrument](../avaudiounitmidiinstrument.md), or [AVAudioUnitTimeEffect](../avaudiounittimeeffect.md).
