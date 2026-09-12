> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/write(to:smpteresolution:replaceexisting:)](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/write(to:smpteresolution:replaceexisting:))

# write(to:smpteResolution:replaceExisting:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates and writes a MIDI file from the events in the sequence.

## Declaration

```swift
func write(to fileURL: URL, smpteResolution resolution: Int, replaceExisting replace: Bool) throws
```

## Parameters

- `fileURL`: The URL of the file you want to write to.
- `resolution`: The relationship between tick and quarter note for saving to a Standard MIDI File. Passing zero uses the default value set using the tempo track.
- `replace`: When `true`, the framework overwrites an existing file at `fileURL`. Otherwise, the call fails with a permission error if a file at the specified path exists.

<a id="Discussion"></a>

## Discussion

The framework writes only MIDI events when writing to the MIDI file. MIDI files are normally beat-based, but can also have an SMPTE (or real-time, rather than beat time) representation. The relationship between tick and quarter note for saving to a Standard MIDI File is the current value for the tempo track.

# writeToURL:SMPTEResolution:replaceExisting:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates and writes a MIDI file from the events in the sequence.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) fileURL SMPTEResolution:(NSInteger) resolution replaceExisting:(BOOL) replace error:(NSError **) outError;
```

## Parameters

- `fileURL`: The URL of the file you want to write to.
- `resolution`: The relationship between tick and quarter note for saving to a Standard MIDI File. Passing zero uses the default value set using the tempo track.
- `replace`: When `true`, the framework overwrites an existing file at `fileURL`. Otherwise, the call fails with a permission error if a file at the specified path exists.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="Discussion"></a>

## Discussion

The framework writes only MIDI events when writing to the MIDI file. MIDI files are normally beat-based, but can also have an SMPTE (or real-time, rather than beat time) representation. The relationship between tick and quarter note for saving to a Standard MIDI File is the current value for the tempo track.
