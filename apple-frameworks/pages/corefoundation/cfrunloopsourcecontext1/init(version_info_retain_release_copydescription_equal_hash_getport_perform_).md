> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext1/init(version:info:retain:release:copydescription:equal:hash:getport:perform:)

# init(version:info:retain:release:copyDescription:equal:hash:getPort:perform:)

**Framework:** Core Foundation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(version: CFIndex, info: UnsafeMutableRawPointer!, retain: ((UnsafeRawPointer?) -> UnsafeRawPointer?)!, release: ((UnsafeRawPointer?) -> Void)!, copyDescription: ((UnsafeRawPointer?) -> Unmanaged<CFString>?)!, equal: ((UnsafeRawPointer?, UnsafeRawPointer?) -> DarwinBoolean)!, hash: ((UnsafeRawPointer?) -> CFHashCode)!, getPort: ((UnsafeMutableRawPointer?) -> mach_port_t)!, perform: ((UnsafeMutableRawPointer?, CFIndex, CFAllocator?, UnsafeMutableRawPointer?) -> UnsafeMutableRawPointer?)!)
```
