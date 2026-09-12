> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/reference(to:allowedfields:maxfieldcount:thresholdfield:)](https://developer.apple.com/documentation/foundation/formatstyle/reference(to:allowedfields:maxfieldcount:thresholdfield:))

# reference(to:allowedFields:maxFieldCount:thresholdField:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
static func reference(to date: Date, allowedFields: Set<Date.RelativeFormatStyle.Field> = [.year, .month, .day, .hour, .minute], maxFieldCount: Int = 2, thresholdField: Date.RelativeFormatStyle.Field = .day) -> SystemFormatStyle.DateReference
```
