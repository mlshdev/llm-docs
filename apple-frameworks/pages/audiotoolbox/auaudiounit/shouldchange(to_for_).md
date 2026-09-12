> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/shouldchange(to:for:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/shouldchange(to:for:))

# shouldChange(to:for:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

This is called when you set the format on a bus.

## Declaration

```swift
func shouldChange(to format: AVAudioFormat, for bus: AUAudioUnitBus) -> Bool
```

## Parameters

- `format`: The proposed new format.
- `bus`: The bus on which the format will be changed.

<a id="return-value"></a>

## Return Value

\- [true](https://developer.apple.com/documentation/swift/true) if the new format will be set on the bus.

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the new format will not be set on the bus.

<a id="Discussion"></a>

## Discussion

The bus has already checked that the format meets its channel constraints. The audio unit can override this method to check the format before allowing it to be set on the bus.

The default implementation returns [false](https://developer.apple.com/documentation/swift/false) if the audio unit’s [renderResourcesAllocated](renderresourcesallocated.md) value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass(\_:as:name:version:)](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [setRenderResourcesAllocated(\_:)](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [midiOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.

# shouldChangeToFormat:forBus: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

This is called when you set the format on a bus.

## Declaration

```objectivec
- (BOOL) shouldChangeToFormat:(AVAudioFormat *) format forBus:(AUAudioUnitBus *) bus;
```

## Parameters

- `format`: The proposed new format.
- `bus`: The bus on which the format will be changed.

<a id="return-value"></a>

## Return Value

\- [true](https://developer.apple.com/documentation/swift/true) if the new format will be set on the bus.

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the new format will not be set on the bus.

<a id="Discussion"></a>

## Discussion

The bus has already checked that the format meets its channel constraints. The audio unit can override this method to check the format before allowing it to be set on the bus.

The default implementation returns [false](https://developer.apple.com/documentation/swift/false) if the audio unit’s [renderResourcesAllocated](renderresourcesallocated.md) value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Customizing the Audio Unit Behavior

- [registerSubclass:asComponentDescription:name:version:](registersubclass%28__as_name_version_%29.md): Registers an audio unit subclass.
- [setRenderResourcesAllocated:](setrenderresourcesallocated%28__%29.md): Sets the Boolean value of the [renderResourcesAllocated](renderresourcesallocated.md) property.
- [internalRenderBlock](internalrenderblock.md): The block which you must provide, via a getter, in order to implement rendering.
- [MIDIOutputBufferSizeHint](midioutputbuffersizehint.md)
- [AUInternalRenderBlock](../auinternalrenderblock.md): A block to render the audio unit.
