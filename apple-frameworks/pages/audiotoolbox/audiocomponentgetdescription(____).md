> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentgetdescription(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentgetdescription(_:_:))

# AudioComponentGetDescription(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Gets the class description, as an `AudioComponentDescription` structure, of an audio component.

## Declaration

```swift
func AudioComponentGetDescription(_ inComponent: AudioComponent, _ outDesc: UnsafeMutablePointer<AudioComponentDescription>) -> OSStatus
```

## Parameters

- `inComponent`: The audio component that you want a description of.
- `outDesc`: The description of the specified audio component.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentCopyName(\_:\_:)](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion(\_:\_:)](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon(\_:)](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo(\_:\_:)](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)

# AudioComponentGetDescription (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Gets the class description, as an `AudioComponentDescription` structure, of an audio component.

## Declaration

```objectivec
extern OSStatus AudioComponentGetDescription(AudioComponent inComponent, AudioComponentDescription *outDesc);
```

## Parameters

- `inComponent`: The audio component that you want a description of.
- `outDesc`: The description of the specified audio component.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentCopyName](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)
