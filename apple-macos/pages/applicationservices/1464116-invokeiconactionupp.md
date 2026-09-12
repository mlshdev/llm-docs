> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464116-invokeiconactionupp](https://developer.apple.com/documentation/applicationservices/1464116-invokeiconactionupp)

# InvokeIconActionUPP(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func InvokeIconActionUPP(_ theType: ResType, _ theIcon: UnsafeMutablePointer<Handle?>!, _ yourDataPtr: UnsafeMutableRawPointer!, _ userUPP: IconActionUPP!) -> OSErr
```

# InvokeIconActionUPP (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
OSErr InvokeIconActionUPP(ResType theType, Handle *theIcon, void *yourDataPtr, IconActionUPP userUPP);
```
