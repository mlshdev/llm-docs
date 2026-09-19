> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocomponentplugininterface/init(open:close:lookup:reserved:)-1bmzd

# init(Open:Close:Lookup:reserved:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

## Declaration

```swift
init(Open: (UnsafeMutableRawPointer, AudioComponentInstance) -> OSStatus, Close: (UnsafeMutableRawPointer) -> OSStatus, Lookup: (Int16) -> AudioComponentMethod?, reserved: UnsafeMutableRawPointer?)
```
