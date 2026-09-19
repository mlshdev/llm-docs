> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/subjectinferenceerror/failed(reason:)

# SubjectInferenceError.failed(reason:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The subject method threw an error.

## Declaration

```swift
case failed(reason: String)
```

## Parameters

- `reason`: The thrown error’s `localizedDescription`.
