> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconvertergetpropertyinfo(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconvertergetpropertyinfo(_:_:_:_:))

# AudioConverterGetPropertyInfo(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio converter property.

## Declaration

```swift
func AudioConverterGetPropertyInfo(_ inAudioConverter: AudioConverterRef, _ inPropertyID: AudioConverterPropertyID, _ outSize: UnsafeMutablePointer<UInt32>?, _ outWritable: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `inAudioConverter`: The audio converter to get property information from.
- `inPropertyID`: The property you want information about.
- `outSize`: On output, the size of the property value in bytes. Can be `NULL` on output.
- `outWritable`: On output, a Boolean value indicating whether the property value is writable (`true`) or not (`false`). Can be `NULL` on output.

<a id="return-value"></a>

## Return Value

A  result code.

## See Also

### Configuring Audio Converter Properties

- [AudioConverterGetProperty(\_:\_:\_:\_:)](audioconvertergetproperty%28________%29.md): Gets an audio converter property value.
- [AudioConverterSetProperty(\_:\_:\_:\_:)](audioconvertersetproperty%28________%29.md): Sets the value of an audio converter object property.

# AudioConverterGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio converter property.

## Declaration

```objectivec
extern OSStatus AudioConverterGetPropertyInfo(AudioConverterRef inAudioConverter, AudioConverterPropertyID inPropertyID, UInt32 *outSize, Boolean *outWritable);
```

## Parameters

- `inAudioConverter`: The audio converter to get property information from.
- `inPropertyID`: The property you want information about.
- `outSize`: On output, the size of the property value in bytes. Can be `NULL` on output.
- `outWritable`: On output, a Boolean value indicating whether the property value is writable (`true`) or not (`false`). Can be `NULL` on output.

<a id="return-value"></a>

## Return Value

A  result code.

## See Also

### Configuring Audio Converter Properties

- [AudioConverterGetProperty](audioconvertergetproperty%28________%29.md): Gets an audio converter property value.
- [AudioConverterSetProperty](audioconvertersetproperty%28________%29.md): Sets the value of an audio converter object property.
