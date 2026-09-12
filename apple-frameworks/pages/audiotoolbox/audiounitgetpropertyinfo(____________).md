> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitgetpropertyinfo(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitgetpropertyinfo(_:_:_:_:_:_:))

# AudioUnitGetPropertyInfo(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio unit property.

## Declaration

```swift
func AudioUnitGetPropertyInfo(_ inUnit: AudioUnit, _ inID: AudioUnitPropertyID, _ inScope: AudioUnitScope, _ inElement: AudioUnitElement, _ outDataSize: UnsafeMutablePointer<UInt32>?, _ outWritable: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to get property information from.
- `inID`: The identifier for the property.
- `inScope`: The audio unit scope for the property.
- `inElement`: The audio unit element for the property.
- `outDataSize`: On successful output, the maximum size for the audio unit property. Can be `NULL` on input, in which case no value is returned.
- `outWritable`: On successful output, a Boolean value indicating whether the property can be written to ([true](https://developer.apple.com/documentation/swift/true)) or not ([false](https://developer.apple.com/documentation/swift/false)). Can be `NULL` on input, in which case no value is returned.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Some properties that have read/write access when an audio unit is uninitialized become read-only when the audio unit is initialized.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:)](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:)](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitAddPropertyListener(\_:\_:\_:\_:)](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData(\_:\_:\_:\_:)](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.

# AudioUnitGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio unit property.

## Declaration

```objectivec
extern OSStatus AudioUnitGetPropertyInfo(AudioUnit inUnit, AudioUnitPropertyID inID, AudioUnitScope inScope, AudioUnitElement inElement, UInt32 *outDataSize, Boolean *outWritable);
```

## Parameters

- `inUnit`: The audio unit that you want to get property information from.
- `inID`: The identifier for the property.
- `inScope`: The audio unit scope for the property.
- `inElement`: The audio unit element for the property.
- `outDataSize`: On successful output, the maximum size for the audio unit property. Can be `NULL` on input, in which case no value is returned.
- `outWritable`: On successful output, a Boolean value indicating whether the property can be written to ([true](https://developer.apple.com/documentation/swift/true)) or not ([false](https://developer.apple.com/documentation/swift/false)). Can be `NULL` on input, in which case no value is returned.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Some properties that have read/write access when an audio unit is uninitialized become read-only when the audio unit is initialized.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitAddPropertyListener](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.
