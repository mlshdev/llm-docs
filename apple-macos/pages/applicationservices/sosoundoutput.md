> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sosoundoutput](https://developer.apple.com/documentation/applicationservices/sosoundoutput)

# soSoundOutput

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Get or set the speech channel’s current outputchannel.

> Use [soOutputToFileWithCFURL](sooutputtofilewithcfurl.md) instead.

## Declaration

```swift
var soSoundOutput: OSType { get }
```

<a id="discussion"></a>

## Discussion

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
