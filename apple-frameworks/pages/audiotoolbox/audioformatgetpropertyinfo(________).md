> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioformatgetpropertyinfo(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioformatgetpropertyinfo(_:_:_:_:))

# AudioFormatGetPropertyInfo(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio format property.

## Declaration

```swift
func AudioFormatGetPropertyInfo(_ inPropertyID: AudioFormatPropertyID, _ inSpecifierSize: UInt32, _ inSpecifier: UnsafeRawPointer?, _ outPropertyDataSize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inPropertyID`: An `AudioFormatPropertyID` constant.
- `inSpecifierSize`: The size of the specifier data.
- `inSpecifier`: A buffer of data used as an input argument for querying some of the properties.
- `outPropertyDataSize`: The the size in bytes of the current value of the property. To get the property value, you need a buffer of this size.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

## See Also

### Audio Format Services Functions

- [AudioFormatGetProperty(\_:\_:\_:\_:\_:)](audioformatgetproperty%28__________%29.md): Gets the value of an audio format property.

# AudioFormatGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio format property.

## Declaration

```objectivec
extern OSStatus AudioFormatGetPropertyInfo(AudioFormatPropertyID inPropertyID, UInt32 inSpecifierSize, const void *inSpecifier, UInt32 *outPropertyDataSize);
```

## Parameters

- `inPropertyID`: An `AudioFormatPropertyID` constant.
- `inSpecifierSize`: The size of the specifier data.
- `inSpecifier`: A buffer of data used as an input argument for querying some of the properties.
- `outPropertyDataSize`: The the size in bytes of the current value of the property. To get the property value, you need a buffer of this size.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

## See Also

### Audio Format Services Functions

- [AudioFormatGetProperty](audioformatgetproperty%28__________%29.md): Gets the value of an audio format property.
