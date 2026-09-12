> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocodecsetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocodecsetproperty(_:_:_:_:))

# AudioCodecSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of a codec property.

## Declaration

```swift
func AudioCodecSetProperty(_ inCodec: AudioCodec, _ inPropertyID: AudioCodecPropertyID, _ inPropertyDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inPropertyID`: Property ID of the property whose value you want to set. Settable codec property IDs are listed in [Instance Codec Properties](1494111-instance-codec-properties.md).
- `inPropertyDataSize`: Size in bytes of the property value data.
- `inPropertyData`: Pointer to the data buffer containing the property value.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

Codec properties are classified as either global properties, which remain the same for all instances of a codec, or instance properties, which may vary from instance to instance. However, not all instance property values can be modified. See [Instance Codec Properties](1494111-instance-codec-properties.md) for details. No property values can be modified when the codec is in the initialized state. You must call this function before you call the [AudioCodecInitialize(\_:\_:\_:\_:\_:)](audiocodecinitialize%28__________%29.md) function, or after you call the [AudioCodecUninitialize(\_:)](audiocodecuninitialize%28__%29.md) function. Call the [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md) function to retrieve the current value of a property.

## See Also

### Related Documentation

- [AudioCodecUninitialize(\_:)](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.
- [AudioCodecInitialize(\_:\_:\_:\_:\_:)](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.

### Accessing Codec Properties

- [AudioCodecGetProperty(\_:\_:\_:\_:)](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.
- [AudioCodecGetPropertyInfo(\_:\_:\_:\_:)](audiocodecgetpropertyinfo%28________%29.md): Retrieves information about a codec property.

# AudioCodecSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of a codec property.

## Declaration

```objectivec
extern OSStatus AudioCodecSetProperty(AudioCodec inCodec, AudioCodecPropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## Parameters

- `inCodec`: An audio codec object. Because an audio codec object is a Component Manger component instance, you can use the Component Manager (for example, the functions [FindNextComponent](../coreservices/1516552-findnextcomponent.md) and OpenAComponent) to obtain an audio codec object.
- `inPropertyID`: Property ID of the property whose value you want to set. Settable codec property IDs are listed in [Instance Codec Properties](1494111-instance-codec-properties.md).
- `inPropertyDataSize`: Size in bytes of the property value data.
- `inPropertyData`: Pointer to the data buffer containing the property value.

<a id="return-value"></a>

## Return Value

Returns `NoErr` if successful, otherwise, a result code. See `Result Codes` for a list of possible values.

<a id="Discussion"></a>

## Discussion

Codec properties are classified as either global properties, which remain the same for all instances of a codec, or instance properties, which may vary from instance to instance. However, not all instance property values can be modified. See [Instance Codec Properties](1494111-instance-codec-properties.md) for details. No property values can be modified when the codec is in the initialized state. You must call this function before you call the [AudioCodecInitialize](audiocodecinitialize%28__________%29.md) function, or after you call the [AudioCodecUninitialize](audiocodecuninitialize%28__%29.md) function. Call the [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md) function to retrieve the current value of a property.

## See Also

### Related Documentation

- [AudioCodecUninitialize](audiocodecuninitialize%28__%29.md): Moves the codec from the initialized state back to the uninitialized state.
- [AudioCodecInitialize](audiocodecinitialize%28__________%29.md): Sets up the specified codec to perform a data format translation.

### Accessing Codec Properties

- [AudioCodecGetProperty](audiocodecgetproperty%28________%29.md): Retrieves the value of a codec property.
- [AudioCodecGetPropertyInfo](audiocodecgetpropertyinfo%28________%29.md): Retrieves information about a codec property.
