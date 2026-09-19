> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/voicefileinfo/1460824-filespec

# fileSpec (Swift)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A file system specification structure that contains the volume, directory, and name of the file containing the voice. Generally, files containing a single voice are of type `kTextToSpeechVoiceFileType`, and files containing multiple voices are of type `kTextToSpeechVoiceBundleType`.

## Declaration

```swift
var fileSpec: FSSpec
```

# fileSpec (Objective-C)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A file system specification structure that contains the volume, directory, and name of the file containing the voice. Generally, files containing a single voice are of type `kTextToSpeechVoiceFileType`, and files containing multiple voices are of type `kTextToSpeechVoiceBundleType`.

## Declaration

```objectivec
FSSpec fileSpec;
```
