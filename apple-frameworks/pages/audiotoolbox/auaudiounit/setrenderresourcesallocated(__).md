> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/setrenderresourcesallocated(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/setrenderresourcesallocated(_:))

# setRenderResourcesAllocated(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.

## Declaration

```swift
func setRenderResourcesAllocated(_ flag: Bool)
```

## Parameters

- `flag`: A Boolean value that determines whether the audio unit has allocated its required rendering resources..

<a id="Discussion"></a>

## Discussion

In the base class implementation of the [allocateRenderResources()](allocaterenderresources%28%29.md) method, the value of the [renderResourcesAllocated](renderresourcesallocated.md) property is set to [true](https://developer.apple.com/documentation/swift/true). If the [allocateRenderResources()](allocaterenderresources%28%29.md) method fails in a subclass, you must use this method to set the value of the [renderResourcesAllocated](renderresourcesallocated.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass(\_:as:name:version:)](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChange(to:for:)](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [midiOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.

# setRenderResourcesAllocated: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.

## Declaration

```objectivec
- (void) setRenderResourcesAllocated:(BOOL) flag;
```

## Parameters

- `flag`: A Boolean value that determines whether the audio unit has allocated its required rendering resources..

<a id="Discussion"></a>

## Discussion

In the base class implementation of the [allocateRenderResourcesAndReturnError:](allocaterenderresources%28%29.md) method, the value of the [renderResourcesAllocated](renderresourcesallocated.md) property is set to [true](https://developer.apple.com/documentation/swift/true). If the [allocateRenderResourcesAndReturnError:](allocaterenderresources%28%29.md) method fails in a subclass, you must use this method to set the value of the [renderResourcesAllocated](renderresourcesallocated.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass:asComponentDescription:name:version:](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [shouldChangeToFormat:forBus:](shouldchange%28to_for_%29.md): This is called when you set the format on a bus.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [MIDIOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.
