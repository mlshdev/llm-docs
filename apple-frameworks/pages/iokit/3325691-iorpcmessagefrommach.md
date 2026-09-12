> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/3325691-iorpcmessagefrommach](https://developer.apple.com/documentation/iokit/3325691-iorpcmessagefrommach)

# IORPCMessageFromMach(\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

## Declaration

```swift
func IORPCMessageFromMach(_ msg: UnsafeMutablePointer<IORPCMessageMach>!, _ reply: Bool) -> UnsafeMutablePointer<IORPCMessage>!
```

# IORPCMessageFromMach (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

## Declaration

```objectivec
IORPCMessage * IORPCMessageFromMach(IORPCMessageMach *msg, bool reply);
```
