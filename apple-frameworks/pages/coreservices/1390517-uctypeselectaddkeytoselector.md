> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390517-uctypeselectaddkeytoselector](https://developer.apple.com/documentation/coreservices/1390517-uctypeselectaddkeytoselector)

# UCTypeSelectAddKeyToSelector(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func UCTypeSelectAddKeyToSelector(_ inRef: UCTypeSelectRef!, _ inText: CFString!, _ inEventTime: Double, _ updateFlag: UnsafeMutablePointer<DarwinBoolean>!) -> OSStatus
```

# UCTypeSelectAddKeyToSelector (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
OSStatus UCTypeSelectAddKeyToSelector(UCTypeSelectRef inRef, CFStringRef inText, double inEventTime, Boolean *updateFlag);
```
