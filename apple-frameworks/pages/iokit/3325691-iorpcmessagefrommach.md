> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/3325691-iorpcmessagefrommach

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
