> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/midioutputbuffersizehint](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/midioutputbuffersizehint)

# midiOutputBufferSizeHint (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
var midiOutputBufferSizeHint: Int { get set }
```

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass(\_:as:name:version:)](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChange(to:for:)](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated(\_:)](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.

# MIDIOutputBufferSizeHint (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic) NSInteger MIDIOutputBufferSizeHint;
```

```objectivec
@property (atomic) NSInteger MIDIOutputBufferSizeHint;
```

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass:asComponentDescription:name:version:](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChangeToFormat:forBus:](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated:](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.
