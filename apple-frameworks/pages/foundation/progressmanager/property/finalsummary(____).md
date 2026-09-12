> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/property/finalsummary(_:_:)](https://developer.apple.com/documentation/foundation/progressmanager/property/finalsummary(_:_:))

# finalSummary(\_:\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Determines how to handle summary data when a progress manager is deinitialized.

## Declaration

```swift
static func finalSummary(_ parentSummary: Self.Summary, _ selfSummary: Self.Summary) -> Self.Summary
```

## Parameters

- `parentSummary`: The current summary value of the parent progress manager.
- `selfSummary`: The final summary value from the progress manager being deinitialized.

<a id="return-value"></a>

## Return Value

The updated summary that replaces the parent’s current summary.

<a id="discussion"></a>

## Discussion

This method is used when a progress manager in the hierarchy is being deinitialized and its accumulated summary needs to be processed in relation to its parent’s summary. The behavior can vary depending on the property type:

- For additive properties (like file counts, byte counts): The self summary is typically added to the parent summary to preserve the accumulated progress.
- For max-based properties (like estimated time remaining): The parent summary is typically preserved as it represents an existing estimate.
- For collection-based properties (like file URLs): The self summary may be discarded to avoid accumulating stale references.
