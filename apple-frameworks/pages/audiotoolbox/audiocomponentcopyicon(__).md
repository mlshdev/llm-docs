> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentcopyicon(_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentcopyicon(_:))

# AudioComponentCopyIcon(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```swift
func AudioComponentCopyIcon(_ comp: AudioComponent) -> UIImage?
```

```swift
func AudioComponentCopyIcon(_ comp: AudioComponent) -> NSImage?
```

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName(\_:\_:)](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion(\_:\_:)](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyConfigurationInfo(\_:\_:)](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)

# AudioComponentCopyIcon (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```objectivec
extern UIImage *AudioComponentCopyIcon(AudioComponent comp);
```

```objectivec
extern NSImage *AudioComponentCopyIcon(AudioComponent comp);
```

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyConfigurationInfo](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)
