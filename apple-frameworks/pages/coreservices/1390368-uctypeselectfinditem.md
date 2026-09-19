> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1390368-uctypeselectfinditem

# UCTypeSelectFindItem(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func UCTypeSelectFindItem(_ ref: UCTypeSelectRef!, _ listSize: UInt32, _ listDataPtr: UnsafeMutableRawPointer!, _ refcon: UnsafeMutableRawPointer!, _ userUPP: IndexToUCStringUPP!, _ closestItem: UnsafeMutablePointer<UInt32>!) -> OSStatus
```

# UCTypeSelectFindItem (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
OSStatus UCTypeSelectFindItem(UCTypeSelectRef ref, UInt32 listSize, void *listDataPtr, void *refcon, IndexToUCStringUPP userUPP, UInt32 *closestItem);
```
