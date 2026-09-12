> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofilesetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofilesetproperty(_:_:_:_:))

# ExtAudioFileSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Sets a property value for an extended audio file object.

## Declaration

```swift
func ExtAudioFileSetProperty(_ inExtAudioFile: ExtAudioFileRef, _ inPropertyID: ExtAudioFilePropertyID, _ inPropertyDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object to set a property value on.
- `inPropertyID`: The property whose value you want to set.
- `inPropertyDataSize`: The size of the property value, in bytes.
- `inPropertyData`: The value you want to apply to the specified property.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Configuring Properties for Extended Audio File Objects

- [ExtAudioFileGetProperty(\_:\_:\_:\_:)](extaudiofilegetproperty%28________%29.md): Gets a property value from an extended audio file object.
- [ExtAudioFileGetPropertyInfo(\_:\_:\_:\_:)](extaudiofilegetpropertyinfo%28________%29.md): Gets information about an extended audio file object property.

# ExtAudioFileSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Sets a property value for an extended audio file object.

## Declaration

```objectivec
extern OSStatus ExtAudioFileSetProperty(ExtAudioFileRef inExtAudioFile, ExtAudioFilePropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## Parameters

- `inExtAudioFile`: The extended audio file object to set a property value on.
- `inPropertyID`: The property whose value you want to set.
- `inPropertyDataSize`: The size of the property value, in bytes.
- `inPropertyData`: The value you want to apply to the specified property.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Configuring Properties for Extended Audio File Objects

- [ExtAudioFileGetProperty](extaudiofilegetproperty%28________%29.md): Gets a property value from an extended audio file object.
- [ExtAudioFileGetPropertyInfo](extaudiofilegetpropertyinfo%28________%29.md): Gets information about an extended audio file object property.
