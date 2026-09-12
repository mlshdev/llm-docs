> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounit/loadpreset(at:)](https://developer.apple.com/documentation/avfaudio/avaudiounit/loadpreset(at:))

# loadPreset(at:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Loads an audio unit using a specified preset.

## Declaration

```swift
func loadPreset(at url: URL) throws
```

## Parameters

- `url`: The URL of an audio unit preset file.

# loadAudioUnitPresetAtURL:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Loads an audio unit using a specified preset.

## Declaration

```objectivec
- (BOOL) loadAudioUnitPresetAtURL:(NSURL *) url error:(NSError **) outError;
```

## Parameters

- `url`: The URL of an audio unit preset file.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

The value is [true](https://developer.apple.com/documentation/swift/true) if the preset file successfully loads; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false) with an error.
