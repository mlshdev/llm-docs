> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwareerror/errordescription

# errorDescription

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

Provides localized descriptions for the error constants unique to HAL . Note that the HAL’s functions can and will return other codes that are not covered here, in which case no description is provided.

## Declaration

```swift
var errorDescription: String? { get }
```
