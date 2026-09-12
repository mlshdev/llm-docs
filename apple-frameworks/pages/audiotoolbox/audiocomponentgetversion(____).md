> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentgetversion(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentgetversion(_:_:))

# AudioComponentGetVersion(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).

## Declaration

```swift
func AudioComponentGetVersion(_ inComponent: AudioComponent, _ outVersion: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inComponent`: The audio component that you want the version of.
- `outVersion`: The version of the specified audio component.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName(\_:\_:)](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentCopyIcon(\_:)](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo(\_:\_:)](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)

# AudioComponentGetVersion (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).

## Declaration

```objectivec
extern OSStatus AudioComponentGetVersion(AudioComponent inComponent, UInt32 *outVersion);
```

## Parameters

- `inComponent`: The audio component that you want the version of.
- `outVersion`: The version of the specified audio component.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentCopyIcon](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)
