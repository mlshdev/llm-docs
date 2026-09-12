> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecgetpropertyinfo(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecgetpropertyinfo(_:_:_:_:))

# AudioCodecGetPropertyInfo(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Retrieves information about a codec property.

## Declaration

```swift
func AudioCodecGetPropertyInfo(_ inCodec: AudioCodec, _ inPropertyID: AudioCodecPropertyID, _ outSize: UnsafeMutablePointer<UInt32>?, _ outWritable: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inPropertyID`: Property ID of the property about which you want to obtain information. Codec property IDs are listed in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).
- `outSize`: On return, size in bytes of the current value of the property.
- `outWritable`: Returns `true` if you can change the value of the property, otherwise `false`.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

Call this function to:

- get the size of a property value before calling [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md) to retrieve the value
- find out if a property value can be modified before calling [AudioCodecSetProperty(\_:\_:\_:\_:)](audiocodecsetproperty%28________%29.md) to set the value

## See Also

### Accessing Codec Properties

- [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.
- [AudioCodecSetProperty(\_:\_:\_:\_:)](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.

# AudioCodecGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Retrieves information about a codec property.

## Declaration

```objectivec
extern OSStatus AudioCodecGetPropertyInfo(AudioCodec inCodec, AudioCodecPropertyID inPropertyID, UInt32 *outSize, Boolean *outWritable);
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inPropertyID`: Property ID of the property about which you want to obtain information. Codec property IDs are listed in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).
- `outSize`: On return, size in bytes of the current value of the property.
- `outWritable`: Returns `true` if you can change the value of the property, otherwise `false`.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

Call this function to:

- get the size of a property value before calling [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md) to retrieve the value
- find out if a property value can be modified before calling [AudioCodecSetProperty](audiocodecsetproperty%28________%29.md) to set the value

## See Also

### Accessing Codec Properties

- [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.
- [AudioCodecSetProperty](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.
