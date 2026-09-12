> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentplugininterface](https://developer.apple.com/documentation/audiotoolbox/audiocomponentplugininterface)

# AudioComponentPlugInInterface (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct AudioComponentPlugInInterface
```

## Topics

### Initializers

- [init(Open:Close:Lookup:reserved:)](audiocomponentplugininterface/init%28open_close_lookup_reserved_%29-1bmzd.md)
- [init(Open:Close:Lookup:reserved:)](audiocomponentplugininterface/init%28open_close_lookup_reserved_%29-1hqa3.md)

### Instance Properties

- [Close](audiocomponentplugininterface/close.md)
- [Lookup](audiocomponentplugininterface/lookup.md)
- [Open](audiocomponentplugininterface/open.md)
- [reserved](audiocomponentplugininterface/reserved.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName(\_:\_:)](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion(\_:\_:)](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon(\_:)](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo(\_:\_:)](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentMethod](audiocomponentmethod.md)

# AudioComponentPlugInInterface (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
struct AudioComponentPlugInInterface;
```

## Topics

### Instance Properties

- [Close](audiocomponentplugininterface/close.md)
- [Lookup](audiocomponentplugininterface/lookup.md)
- [Open](audiocomponentplugininterface/open.md)
- [reserved](audiocomponentplugininterface/reserved.md)

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentMethod](audiocomponentmethod.md)
