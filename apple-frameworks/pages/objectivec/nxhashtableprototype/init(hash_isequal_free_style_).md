> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nxhashtableprototype/init(hash:isequal:free:style:)

# init(hash:isEqual:free:style:)

**Framework:** Objective-C Runtime  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(hash: (UnsafeRawPointer?, UnsafeRawPointer?) -> UInt, isEqual: (UnsafeRawPointer?, UnsafeRawPointer?, UnsafeRawPointer?) -> Int32, free: (UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void, style: Int32)
```
