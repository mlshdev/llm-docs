> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptablekeycallbacks/init(hash:isequal:retain:release:describe:notakeymarker:)](https://developer.apple.com/documentation/foundation/nsmaptablekeycallbacks/init(hash:isequal:retain:release:describe:notakeymarker:))

# init(hash:isEqual:retain:release:describe:notAKeyMarker:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
init(hash: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> Int)?, isEqual: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer, UnsafeRawPointer) -> ObjCBool)?, retain: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> Void)?, release: ((NSMapTable<AnyObject, AnyObject>, UnsafeMutableRawPointer) -> Void)?, describe: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> String?)?, notAKeyMarker: UnsafeRawPointer?)
```
