> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1537630-audio-graph-errors](https://developer.apple.com/documentation/audiotoolbox/1537630-audio-graph-errors)

# Audio Graph Errors

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

## Topics

### Constants

- [kAUGraphErr_CannotDoInCurrentContext](kaugrapherr_cannotdoincurrentcontext.md): To avoid spinning or waiting in the render thread (a bad idea!), many of the calls to AUGraph can return: `kAUGraphErr_CannotDoInCurrentContext`. This result is only generated when you call an AUGraph API from its render callback. It means that the lock that it required was held at that time, by another thread. If you see this result code, you can generally attempt the action again - typically the NEXT render cycle (so in the mean time the lock can be cleared), or you can delegate that call to another thread in your app. You should not spin or put-to-sleep the render thread.
- [kAUGraphErr_InvalidAudioUnit](kaugrapherr_invalidaudiounit.md)
- [kAUGraphErr_InvalidConnection](kaugrapherr_invalidconnection.md): The attempted connection between two nodes cannot be made.
- [kAUGraphErr_NodeNotFound](kaugrapherr_nodenotfound.md): The specified node cannot be found.
- [kAUGraphErr_OutputNodeErr](kaugrapherr_outputnodeerr.md): Audio processing graphs can only contain one output unit. This error is returned if trying to add a second output unit or if the graph’s output unit is removed while the graph is running.

## See Also

### Constants

- [Audio Unit Attenuation Properties](1534112-audio-unit-attenuation-propertie.md)
- [Audio Unit Instrument Errors](1584141-audio-unit-instrument-errors.md)
- [Anonymous](1534019-anonymous.md)
- [Anonymous](1534074-anonymous.md)
- [Audio Converter Property ID](1624333-audio-converter-property-id.md)
- [Anonymous](1621044-anonymous.md)
- [Anonymous](1618426-anonymous.md)
- [Anonymous](1618742-anonymous.md)
- [Anonymous](1619479-anonymous.md)
- [Anonymous](1619504-anonymous.md)
- [Anonymous](1533960-anonymous.md)
- [Anonymous](1534225-anonymous.md)
- [Music Device Properties](1534089-music-device-properties.md)
- [3D Mixer Audio Unit Properties](1534063-3d_mixer_audio_unit_properties.md): Properties for the Apple 3D Mixer audio unit.
- [kAudioSession_AudioRouteChangeKey_OldRoute](kaudiosession_audioroutechangekey_oldroute.md)
