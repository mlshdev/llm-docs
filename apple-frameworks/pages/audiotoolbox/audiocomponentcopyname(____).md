> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentcopyname(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentcopyname(_:_:))

# AudioComponentCopyName(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the generic name of an audio component.

## Declaration

```swift
func AudioComponentCopyName(_ inComponent: AudioComponent, _ outName: UnsafeMutablePointer<Unmanaged<CFString>?>) -> OSStatus
```

## Parameters

- `inComponent`: The audio component that you want the generic name of.
- `outName`: On output, the generic name of the specified audio component.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentGetVersion(\_:\_:)](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon(\_:)](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo(\_:\_:)](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)

# AudioComponentCopyName (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the generic name of an audio component.

## Declaration

```objectivec
extern OSStatus AudioComponentCopyName(AudioComponent inComponent, CFStringRef*outName);
```

## Parameters

- `inComponent`: The audio component that you want the generic name of.
- `outName`: On output, the generic name of the specified audio component.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentGetVersion](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)
