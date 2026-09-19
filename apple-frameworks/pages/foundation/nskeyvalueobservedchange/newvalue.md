> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nskeyvalueobservedchange/newvalue

# newValue

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

newValue and oldValue will only be non-nil if .new/.old is passed to `observe()`. In general, get the most up to date value by accessing it directly on the observed object instead.

## Declaration

```swift
let newValue: Value?
```
