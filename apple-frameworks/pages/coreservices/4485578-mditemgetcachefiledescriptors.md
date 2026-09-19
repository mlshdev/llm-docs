> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/4485578-mditemgetcachefiledescriptors

# MDItemGetCacheFileDescriptors(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 15.2+

## Declaration

```swift
func MDItemGetCacheFileDescriptors(_ items: CFArray!, _ completionHandler: ((CFArray?) -> Void)!)
```

# MDItemGetCacheFileDescriptors (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 15.2+

## Declaration

```objectivec
void MDItemGetCacheFileDescriptors(CFArrayRef items, void (^completionHandler)(CFArrayRef array));
```
