> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/macherror/memoryerror

# memoryError

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

During a page fault, the memory object indicated that the data could not be returned.  This failure may be temporary; future attempts to access this same data may succeed, as defined by the memory object.

## Declaration

```swift
static var memoryError: MachError.Code { get }
```
