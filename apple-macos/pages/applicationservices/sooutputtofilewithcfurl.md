> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sooutputtofilewithcfurl](https://developer.apple.com/documentation/applicationservices/sooutputtofilewithcfurl)

# soOutputToFileWithCFURL

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.3+

Pass a `CFURLRef` in the `speechInfo` parameter to write to this file, or `NULL` to generate sound.

## Declaration

```swift
var soOutputToFileWithCFURL: OSType { get }
```

<a id="discussion"></a>

## Discussion

This selector works with the `SetSpeechInfo` function.
