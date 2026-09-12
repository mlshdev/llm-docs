> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/registersubclass(_:as:name:version:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/registersubclass(_:as:name:version:))

# registerSubclass(\_:as:name:version:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Registers an audio unit subclass.

## Declaration

```swift
class func registerSubclass(_ cls: AnyClass, as componentDescription: AudioComponentDescription, name: String, version: UInt32)
```

## Parameters

- `cls`: An [AUAudioUnit](../auaudiounit.md) subclass.
- `componentDescription`: The component to register.
- `name`: The component’s name, using the convention `<manufacturer name>:<audio unit name>`.
- `version`: The component’s version.

<a id="Discussion"></a>

## Discussion

This method dynamically registers the supplied [AUAudioUnit](../auaudiounit.md) subclass with the Audio Component system, in the context of the current process only. After you’ve registered the subclass, instantiate it by calling one of the following:

- The [init(componentDescription:)](init%28componentdescription_%29.md) method.
- The [init(componentDescription:options:)](init%28componentdescription_options_%29.md) method.
- The [AVAudioUnit](../../avfaudio/avaudiounit.md) [instantiate(with:options:completionHandler:)](../../avfaudio/avaudiounit/instantiate%28with_options_completionhandler_%29.md) method.
- The [AudioComponentInstanceNew(\_:\_:)](../audiocomponentinstancenew%28____%29.md) function.

## See Also

### Customizing the Audio Unit Behavior

- [shouldChange(to:for:)](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated(\_:)](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [midiOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.

# registerSubclass:asComponentDescription:name:version: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Registers an audio unit subclass.

## Declaration

```objectivec
+ (void) registerSubclass:(Class) cls asComponentDescription:(AudioComponentDescription) componentDescription name:(NSString *) name version:(UInt32) version;
```

## Parameters

- `cls`: An [AUAudioUnit](../auaudiounit.md) subclass.
- `componentDescription`: The component to register.
- `name`: The component’s name, using the convention `<manufacturer name>:<audio unit name>`.
- `version`: The component’s version.

<a id="Discussion"></a>

## Discussion

This method dynamically registers the supplied [AUAudioUnit](../auaudiounit.md) subclass with the Audio Component system, in the context of the current process only. After you’ve registered the subclass, instantiate it by calling one of the following:

- The [initWithComponentDescription:error:](init%28componentdescription_%29.md) method.
- The [initWithComponentDescription:options:error:](init%28componentdescription_options_%29.md) method.
- The [AVAudioUnit](../../avfaudio/avaudiounit.md) [instantiateWithComponentDescription:options:completionHandler:](../../avfaudio/avaudiounit/instantiate%28with_options_completionhandler_%29.md) method.
- The [AudioComponentInstanceNew](../audiocomponentinstancenew%28____%29.md) function.

## See Also

### Customizing the Audio Unit Behavior

- [shouldChangeToFormat:forBus:](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated:](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [MIDIOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.
