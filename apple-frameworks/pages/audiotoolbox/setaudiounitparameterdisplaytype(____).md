> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/setaudiounitparameterdisplaytype(_:_:)](https://developer.apple.com/documentation/audiotoolbox/setaudiounitparameterdisplaytype(_:_:))

# SetAudioUnitParameterDisplayType(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
func SetAudioUnitParameterDisplayType(_ flags: AudioUnitParameterOptions, _ displayType: AudioUnitParameterOptions) -> AudioUnitParameterOptions
```

## See Also

### Configuring the Audio Unit UI

- [AudioUnitCocoaViewInfo](audiounitcocoaviewinfo.md): The name and number of custom Cocoa views for an audio unit.
- [GetAudioUnitParameterDisplayType(\_:)](getaudiounitparameterdisplaytype%28__%29.md)

# SetAudioUnitParameterDisplayType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
static AudioUnitParameterOptions SetAudioUnitParameterDisplayType(AudioUnitParameterOptions flags, AudioUnitParameterOptions displayType);
```

## See Also

### Configuring the Audio Unit UI

- [AudioUnitCocoaViewInfo](audiounitcocoaviewinfo.md): The name and number of custom Cocoa views for an audio unit.
- [AUCocoaUIBase](aucocoauibase.md)
- [AudioUnitCarbonView](audiounitcarbonview.md)
- [AudioUnitCarbonViewEventID](audiounitcarbonvieweventid.md)
- [Audio Unit Carbon View Events](1579365-audio_unit_carbon_view_events.md)
- [Audio Unit Carbon View Selectors](1579372-audio_unit_carbon_view_selectors.md)
- [Audio Unit Carbon View Component Types](1579363-audio_unit_carbon_view_component.md)
- [GetAudioUnitParameterDisplayType](getaudiounitparameterdisplaytype%28__%29.md)
