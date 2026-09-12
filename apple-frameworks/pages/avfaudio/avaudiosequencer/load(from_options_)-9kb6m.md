> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/load(from:options:)-9kb6m](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/load(from:options:)-9kb6m)

# load(from:options:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Loads the file the URL references and adds the events to the sequence.

## Declaration

```swift
func load(from fileURL: URL, options: AVMusicSequenceLoadOptions = []) throws
```

## Parameters

- `fileURL`: The URL to the file.
- `options`: Determines how the contents map to the tracks inside the sequence.

## See Also

### Managing Sequence Load Options

- [load(from:options:)](load%28from_options_%29-8o58w.md): Parses the data and adds its events to the sequence.
- [AVMusicSequenceLoadOptions](../avmusicsequenceloadoptions.md): A structure that defines whether data on different MIDI channels map to multiple tracks, or whether the framework preserves the tracks as they are.

# loadFromURL:options:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Loads the file the URL references and adds the events to the sequence.

## Declaration

```objectivec
- (BOOL) loadFromURL:(NSURL *) fileURL options:(AVMusicSequenceLoadOptions) options error:(NSError **) outError;
```

## Parameters

- `fileURL`: The URL to the file.
- `options`: Determines how the contents map to the tracks inside the sequence.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

## See Also

### Managing Sequence Load Options

- [loadFromData:options:error:](load%28from_options_%29-8o58w.md): Parses the data and adds its events to the sequence.
- [AVMusicSequenceLoadOptions](../avmusicsequenceloadoptions.md): A structure that defines whether data on different MIDI channels map to multiple tracks, or whether the framework preserves the tracks as they are.
