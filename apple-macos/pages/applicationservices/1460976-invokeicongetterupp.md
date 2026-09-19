> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1460976-invokeicongetterupp

# InvokeIconGetterUPP(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func InvokeIconGetterUPP(_ theType: ResType, _ yourDataPtr: UnsafeMutableRawPointer!, _ userUPP: IconGetterUPP!) -> Handle!
```

# InvokeIconGetterUPP (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
Handle InvokeIconGetterUPP(ResType theType, void *yourDataPtr, IconGetterUPP userUPP);
```
