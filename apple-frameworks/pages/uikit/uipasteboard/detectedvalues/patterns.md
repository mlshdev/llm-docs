> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectedvalues/patterns](https://developer.apple.com/documentation/uikit/uipasteboard/detectedvalues/patterns)

# patterns

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

A set of key paths that represent patterns that the data detection system identifies.

## Declaration

```swift
var patterns: Set<PartialKeyPath<UIPasteboard.DetectedValues>> { get }
```

## See Also

### Detected patterns

- [probableWebSearch](probablewebsearch.md): A string that the data detection system identifies as a probable web search item.
- [probableWebURL](probableweburl.md): A string that the data detection system identifies as a probable web URL.
