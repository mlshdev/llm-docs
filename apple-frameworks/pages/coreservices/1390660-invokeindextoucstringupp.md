> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390660-invokeindextoucstringupp](https://developer.apple.com/documentation/coreservices/1390660-invokeindextoucstringupp)

# InvokeIndexToUCStringUPP(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func InvokeIndexToUCStringUPP(_ index: UInt32, _ listDataPtr: UnsafeMutableRawPointer!, _ refcon: UnsafeMutableRawPointer!, _ outString: UnsafeMutablePointer<Unmanaged<CFString>?>!, _ tsOptions: UnsafeMutablePointer<UCTypeSelectOptions>!, _ userUPP: IndexToUCStringUPP!) -> Bool
```

# InvokeIndexToUCStringUPP (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
Boolean InvokeIndexToUCStringUPP(UInt32 index, void *listDataPtr, void *refcon, CFStringRef *outString, UCTypeSelectOptions *tsOptions, IndexToUCStringUPP userUPP);
```
