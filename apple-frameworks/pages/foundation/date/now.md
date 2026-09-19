> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/now

# now

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date instance that represents the current date and time, at the moment of access.

## Declaration

```swift
@backDeployed(before: macOS 12, iOS 15, tvOS 15, watchOS 8)
static var now: Date { get }
```

<a id="Discussion"></a>

## Discussion

This property is equivalent to calling [init()](init%28%29.md). If you assign this value to a variable or property, the assigned value doesn’t automatically update as time passes.
