> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentplugininterface/init(open:close:lookup:reserved:)-1hqa3](https://developer.apple.com/documentation/audiotoolbox/audiocomponentplugininterface/init(open:close:lookup:reserved:)-1hqa3)

# init(Open:Close:Lookup:reserved:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** macOS

## Declaration

```swift
init(Open: (UnsafeMutableRawPointer, AudioComponentInstance) -> OSStatus, Close: (UnsafeMutableRawPointer) -> OSStatus, Lookup: (Int16) -> AudioComponentMethod?, reserved: UnsafeMutableRawPointer?)
```
