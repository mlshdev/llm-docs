> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentmethod](https://developer.apple.com/documentation/audiotoolbox/audiocomponentmethod)

# AudioComponentMethod (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AudioComponentMethod = OpaquePointer
```

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName(\_:\_:)](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion(\_:\_:)](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon(\_:)](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo(\_:\_:)](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)

# AudioComponentMethod (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (*)(void *, ...) AudioComponentMethod;
```

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
