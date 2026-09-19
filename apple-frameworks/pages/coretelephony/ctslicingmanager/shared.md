> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctslicingmanager/shared

# shared

**Framework:** Core Telephony  
**Kind:** Type Property  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

A shared singleton instance for accessing network slicing functionality.

## Declaration

```swift
static let shared: CTSlicingManager
```

<a id="discussion"></a>

## Discussion

Use this shared instance to access all network slicing capabilities. The `CTSlicingManager` uses a singleton pattern to ensure consistent state management across your app.

```swift
let manager = CTSlicingManager.shared
```
