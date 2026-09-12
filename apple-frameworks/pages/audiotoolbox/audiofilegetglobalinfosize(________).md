> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilegetglobalinfosize(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilegetglobalinfosize(_:_:_:_:))

# AudioFileGetGlobalInfoSize(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets the size of a global audio file property.

## Declaration

```swift
func AudioFileGetGlobalInfoSize(_ inPropertyID: AudioFilePropertyID, _ inSpecifierSize: UInt32, _ inSpecifier: UnsafeMutableRawPointer?, _ outDataSize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inPropertyID`: The property whose data size you want to get. For possible values, see [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md).
- `inSpecifierSize`: The size of the specifier data.
- `inSpecifier`: A pointer to a *specifier* (a pointer to a buffer containing some data which is different for each property. The type of the data required is described in the description of each property.)
- `outDataSize`: A pointer to the size in bytes of the current value of the property. To get the size of the property value,  you need a buffer of this size.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function can be used to get information about the capabilities of Audio File Service data types, for example, to determine which file types can take which data formats.

## See Also

### Working with Global Information

- [AudioFileGetGlobalInfo(\_:\_:\_:\_:\_:)](audiofilegetglobalinfo%28__________%29.md): Copies the value of a global property into a buffer.

# AudioFileGetGlobalInfoSize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+

Gets the size of a global audio file property.

## Declaration

```objectivec
extern OSStatus AudioFileGetGlobalInfoSize(AudioFilePropertyID inPropertyID, UInt32 inSpecifierSize, void *inSpecifier, UInt32 *outDataSize);
```

## Parameters

- `inPropertyID`: The property whose data size you want to get. For possible values, see [Audio File Global Info Properties](1576495-audio-file-global-info-propertie.md).
- `inSpecifierSize`: The size of the specifier data.
- `inSpecifier`: A pointer to a *specifier* (a pointer to a buffer containing some data which is different for each property. The type of the data required is described in the description of each property.)
- `outDataSize`: A pointer to the size in bytes of the current value of the property. To get the size of the property value,  you need a buffer of this size.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

This function can be used to get information about the capabilities of Audio File Service data types, for example, to determine which file types can take which data formats.

## See Also

### Working with Global Information

- [AudioFileGetGlobalInfo](audiofilegetglobalinfo%28__________%29.md): Copies the value of a global property into a buffer.
