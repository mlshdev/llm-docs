> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413031-mdquerycreateforitems](https://developer.apple.com/documentation/coreservices/1413031-mdquerycreateforitems)

# MDQueryCreateForItems(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.7+

## Declaration

```swift
func MDQueryCreateForItems(_ allocator: CFAllocator!, _ queryString: CFString!, _ valueListAttrs: CFArray!, _ sortingAttrs: CFArray!, _ items: CFArray!) -> MDQuery!
```

# MDQueryCreateForItems (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.7+

## Declaration

```objectivec
MDQueryRef MDQueryCreateForItems(CFAllocatorRef allocator, CFStringRef queryString, CFArrayRef valueListAttrs, CFArrayRef sortingAttrs, CFArrayRef items);
```
