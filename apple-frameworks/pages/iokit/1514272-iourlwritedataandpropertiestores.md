> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1514272-iourlwritedataandpropertiestores

# IOURLWriteDataAndPropertiesToResource(\_:\_:\_:\_:)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ · Xcode 6.1+

## Declaration

```swift
func IOURLWriteDataAndPropertiesToResource(_ url: CFURL!, _ dataToWrite: CFData!, _ propertiesToWrite: CFDictionary!, _ errorCode: UnsafeMutablePointer<Int32>!) -> Bool
```
