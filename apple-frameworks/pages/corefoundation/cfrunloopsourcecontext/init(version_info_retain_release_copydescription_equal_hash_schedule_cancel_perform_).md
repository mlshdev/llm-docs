> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext/init(version:info:retain:release:copydescription:equal:hash:schedule:cancel:perform:)

# init(version:info:retain:release:copyDescription:equal:hash:schedule:cancel:perform:)

**Framework:** Core Foundation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer!, retain: ((UnsafeRawPointer?) -> UnsafeRawPointer?)!, release: ((UnsafeRawPointer?) -> Void)!, copyDescription: ((UnsafeRawPointer?) -> Unmanaged<CFString>?)!, equal: ((UnsafeRawPointer?, UnsafeRawPointer?) -> DarwinBoolean)!, hash: ((UnsafeRawPointer?) -> CFHashCode)!, schedule: ((UnsafeMutableRawPointer?, CFRunLoop?, CFRunLoopMode?) -> Void)!, cancel: ((UnsafeMutableRawPointer?, CFRunLoop?, CFRunLoopMode?) -> Void)!, perform: ((UnsafeMutableRawPointer?) -> Void)!)
```
