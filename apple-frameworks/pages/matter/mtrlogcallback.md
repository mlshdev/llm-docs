> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrlogcallback](https://developer.apple.com/documentation/matter/mtrlogcallback)

# MTRLogCallback (Swift)

**Framework:** Matter  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
typealias MTRLogCallback = (MTRLogType, String, String) -> Void
```

# MTRLogCallback (Objective-C)

**Framework:** Matter  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
typedef void (^)(enum MTRLogType, NSString *, NSString *) MTRLogCallback;
```
