> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocomponentvalidatewithresults(_:_:_:)

# AudioComponentValidateWithResults(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func AudioComponentValidateWithResults(_ inComponent: AudioComponent, _ inValidationParameters: CFDictionary?, _ inCompletionHandler: @escaping (AudioComponentValidationResult, CFDictionary) -> Void) -> OSStatus
```

## See Also

### Functions

- [AudioConverterNewWithOptions(\_:\_:\_:\_:)](audioconverternewwithoptions%28________%29.md)
- [AudioConverterPrepare(\_:\_:\_:)](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdataatoffset%28____________%29.md)
- [AudioFileComponentGetUserDataSize64(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize64%28________%29.md)

# AudioComponentValidateWithResults (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioComponentValidateWithResults(AudioComponent inComponent, CFDictionaryRef inValidationParameters, void (^inCompletionHandler)(AudioComponentValidationResult , CFDictionaryRef ));
```

## See Also

### Functions

- [AudioConverterNewWithOptions](audioconverternewwithoptions%28________%29.md)
- [AudioConverterPrepare](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataAtOffset](audiofilecomponentgetuserdataatoffset%28____________%29.md)
- [AudioFileComponentGetUserDataSize64](audiofilecomponentgetuserdatasize64%28________%29.md)
