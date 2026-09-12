> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecgetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecgetproperty(_:_:_:_:))

# AudioCodecGetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Retrieves the value of a codec property.

## Declaration

```swift
func AudioCodecGetProperty(_ inCodec: AudioCodec, _ inPropertyID: AudioCodecPropertyID, _ ioPropertyDataSize: UnsafeMutablePointer<UInt32>, _ outPropertyData: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inPropertyID`: Property ID of the property whose value you want to obtain. Codec property IDs are listed in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).
- `ioPropertyDataSize`: On input, the size in bytes of the data buffer pointed to by the `outPropertyData` parameter. On output, the amount of data actually written to the buffer.
- `outPropertyData`: The property data buffer.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

All property values can be read regardless of the state of the codec. However, the values of some properties depend on whether the codec is initialized. Before calling this function, call the [AudioCodecGetPropertyInfo(\_:\_:\_:\_:)](audiocodecgetpropertyinfo%28________%29.md) function to determine the size of buffer you need for the property value.

## See Also

### Accessing Codec Properties

- [AudioCodecGetPropertyInfo(\_:\_:\_:\_:)](audiocodecgetpropertyinfo%28________%29.md): Retrieves information about a codec property.
- [AudioCodecSetProperty(\_:\_:\_:\_:)](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.

# AudioCodecGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Retrieves the value of a codec property.

## Declaration

```objectivec
extern OSStatus AudioCodecGetProperty(AudioCodec inCodec, AudioCodecPropertyID inPropertyID, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inPropertyID`: Property ID of the property whose value you want to obtain. Codec property IDs are listed in [Global Codec Properties](1494121-global-codec-properties.md) and [Instance Codec Properties](1494111-instance-codec-properties.md).
- `ioPropertyDataSize`: On input, the size in bytes of the data buffer pointed to by the `outPropertyData` parameter. On output, the amount of data actually written to the buffer.
- `outPropertyData`: The property data buffer.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

All property values can be read regardless of the state of the codec. However, the values of some properties depend on whether the codec is initialized. Before calling this function, call the [AudioCodecGetPropertyInfo](audiocodecgetpropertyinfo%28________%29.md) function to determine the size of buffer you need for the property value.

## See Also

### Accessing Codec Properties

- [AudioCodecGetPropertyInfo](audiocodecgetpropertyinfo%28________%29.md): Retrieves information about a codec property.
- [AudioCodecSetProperty](audiocodecsetproperty%28________%29.md): Sets the value of a codec property.
