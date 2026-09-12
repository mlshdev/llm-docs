> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/macherror/memoryrestartcopy](https://developer.apple.com/documentation/foundation/macherror/memoryrestartcopy)

# memoryRestartCopy

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A strategic copy was attempted of an object upon which a quicker copy is now possible.  The caller should retry the copy using vm_object_copy_quickly. This error code is seen only by the kernel.

## Declaration

```swift
static var memoryRestartCopy: MachError.Code { get }
```
