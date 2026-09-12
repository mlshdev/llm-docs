> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/internalrenderblock](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/internalrenderblock)

# internalRenderBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The block which you must provide, via a getter, in order to implement rendering.

## Declaration

```swift
var internalRenderBlock: AUInternalRenderBlock { get }
```

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass(\_:as:name:version:)](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChange(to:for:)](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated(\_:)](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [midiOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.

# internalRenderBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The block which you must provide, via a getter, in order to implement rendering.

## Declaration

```objectivec
@property (nonatomic, readonly) AUInternalRenderBlock internalRenderBlock;
```

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass:asComponentDescription:name:version:](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChangeToFormat:forBus:](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [setRenderResourcesAllocated:](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [MIDIOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.
