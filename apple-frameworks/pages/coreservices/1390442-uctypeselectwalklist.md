> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390442-uctypeselectwalklist](https://developer.apple.com/documentation/coreservices/1390442-uctypeselectwalklist)

# UCTypeSelectWalkList(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func UCTypeSelectWalkList(_ ref: UCTypeSelectRef!, _ currSelect: CFString!, _ direction: UCTSWalkDirection, _ listSize: UInt32, _ listDataPtr: UnsafeMutableRawPointer!, _ refcon: UnsafeMutableRawPointer!, _ userUPP: IndexToUCStringUPP!, _ closestItem: UnsafeMutablePointer<UInt32>!) -> OSStatus
```

# UCTypeSelectWalkList (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
OSStatus UCTypeSelectWalkList(UCTypeSelectRef ref, CFStringRef currSelect, UCTSWalkDirection direction, UInt32 listSize, void *listDataPtr, void *refcon, IndexToUCStringUPP userUPP, UInt32 *closestItem);
```
