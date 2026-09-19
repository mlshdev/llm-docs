> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocomponentplugininterface/init(open:close:lookup:reserved:)-1hqa3

# init(Open:Close:Lookup:reserved:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** macOS

## Declaration

```swift
init(Open: (UnsafeMutableRawPointer, AudioComponentInstance) -> OSStatus, Close: (UnsafeMutableRawPointer) -> OSStatus, Lookup: (Int16) -> AudioComponentMethod?, reserved: UnsafeMutableRawPointer?)
```
