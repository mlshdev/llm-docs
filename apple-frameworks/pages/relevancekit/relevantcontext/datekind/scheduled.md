> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext/datekind/scheduled](https://developer.apple.com/documentation/relevancekit/relevantcontext/datekind/scheduled)

# scheduled

**Framework:** RelevanceKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A hint that tells the system to treat a widget with increased priority because it displays important content or requires action.

## Declaration

```swift
static var scheduled: RelevantContext.DateKind { get }
```

## See Also

### Date types

- [default](default.md): A hint that tells the system to treat a widget with default priority.
- [informational](informational.md): A hint that tells the system to treat a widget with slightly lower priority because it displays content and doesn’t require an action.
