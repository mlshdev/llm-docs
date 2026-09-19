> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmaptablekeycallbacks/init(hash:isequal:retain:release:describe:notakeymarker:)

# init(hash:isEqual:retain:release:describe:notAKeyMarker:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
init(hash: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> Int)?, isEqual: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer, UnsafeRawPointer) -> ObjCBool)?, retain: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> Void)?, release: ((NSMapTable<AnyObject, AnyObject>, UnsafeMutableRawPointer) -> Void)?, describe: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> String?)?, notAKeyMarker: UnsafeRawPointer?)
```
