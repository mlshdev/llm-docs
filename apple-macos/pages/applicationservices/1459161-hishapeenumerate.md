> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459161-hishapeenumerate](https://developer.apple.com/documentation/applicationservices/1459161-hishapeenumerate)

# HIShapeEnumerate(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func HIShapeEnumerate(_ inShape: HIShape!, _ inOptions: OptionBits, _ inProc: HIShapeEnumerateProcPtr!, _ inRefcon: UnsafeMutableRawPointer!) -> OSStatus
```

# HIShapeEnumerate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
OSStatus HIShapeEnumerate(HIShapeRef inShape, OptionBits inOptions, HIShapeEnumerateProcPtr inProc, void *inRefcon);
```
