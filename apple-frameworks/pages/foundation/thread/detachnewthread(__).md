> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/detachnewthread(_:)](https://developer.apple.com/documentation/foundation/thread/detachnewthread(_:))

# detachNewThread(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
class func detachNewThread(_ block: @escaping @Sendable () -> Void)
```

# detachNewThreadWithBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
+ (void) detachNewThreadWithBlock:(void (^)()) block;
```
