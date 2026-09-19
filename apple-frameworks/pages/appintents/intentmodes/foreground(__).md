> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentmodes/foreground(_:)

# foreground(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates and returns a foreground mode with a specified behavior.

## Declaration

```swift
static func foreground(_ foregroundMode: IntentModes.ForegroundMode) -> IntentModes
```

## Parameters

- `foregroundMode`: The foreground behavior to apply to the app intent. For example, specify [immediate](foregroundmode/immediate.md) to bring the app to the foreground before running the app intent.

<a id="return-value"></a>

## Return Value

A set of options that describes the foreground behavior.
