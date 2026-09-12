> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareerror/errordescription](https://developer.apple.com/documentation/coreaudio/audiohardwareerror/errordescription)

# errorDescription

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

Provides localized descriptions for the error constants unique to HAL . Note that the HAL’s functions can and will return other codes that are not covered here, in which case no description is provided.

## Declaration

```swift
var errorDescription: String? { get }
```
