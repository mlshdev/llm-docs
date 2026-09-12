> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentcopyconfigurationinfo(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentcopyconfigurationinfo(_:_:))

# AudioComponentCopyConfigurationInfo(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.7+ · visionOS 1.0+

## Declaration

```swift
func AudioComponentCopyConfigurationInfo(_ inComponent: AudioComponent, _ outConfigurationInfo: UnsafeMutablePointer<Unmanaged<CFDictionary>?>) -> OSStatus
```

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName(\_:\_:)](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion(\_:\_:)](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon(\_:)](audiocomponentcopyicon%28__%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)

# AudioComponentCopyConfigurationInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.7+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioComponentCopyConfigurationInfo(AudioComponent inComponent, CFDictionaryRef*outConfigurationInfo);
```

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon](audiocomponentcopyicon%28__%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)
