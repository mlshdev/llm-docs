> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofilegetpropertyinfo(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofilegetpropertyinfo(_:_:_:_:))

# ExtAudioFileGetPropertyInfo(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an extended audio file object property.

## Declaration

```swift
func ExtAudioFileGetPropertyInfo(_ inExtAudioFile: ExtAudioFileRef, _ inPropertyID: ExtAudioFilePropertyID, _ outSize: UnsafeMutablePointer<UInt32>?, _ outWritable: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object to get property information from.
- `inPropertyID`: The property you want information about.
- `outSize`: On output, the size of the property value in bytes. Can be `NULL` on output.
- `outWritable`: On output, a Boolean value indicating whether the property value is writable (`true` means writable). Can be `NULL` on output.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Configuring Properties for Extended Audio File Objects

- [ExtAudioFileGetProperty(\_:\_:\_:\_:)](extaudiofilegetproperty%28________%29.md): Gets a property value from an extended audio file object.
- [ExtAudioFileSetProperty(\_:\_:\_:\_:)](extaudiofilesetproperty%28________%29.md): Sets a property value for an extended audio file object.

# ExtAudioFileGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an extended audio file object property.

## Declaration

```objectivec
extern OSStatus ExtAudioFileGetPropertyInfo(ExtAudioFileRef inExtAudioFile, ExtAudioFilePropertyID inPropertyID, UInt32 *outSize, Boolean *outWritable);
```

## Parameters

- `inExtAudioFile`: The extended audio file object to get property information from.
- `inPropertyID`: The property you want information about.
- `outSize`: On output, the size of the property value in bytes. Can be `NULL` on output.
- `outWritable`: On output, a Boolean value indicating whether the property value is writable (`true` means writable). Can be `NULL` on output.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Configuring Properties for Extended Audio File Objects

- [ExtAudioFileGetProperty](extaudiofilegetproperty%28________%29.md): Gets a property value from an extended audio file object.
- [ExtAudioFileSetProperty](extaudiofilesetproperty%28________%29.md): Sets a property value for an extended audio file object.
