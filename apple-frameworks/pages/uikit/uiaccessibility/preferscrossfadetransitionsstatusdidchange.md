> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccessibility/preferscrossfadetransitionsstatusdidchange

# prefersCrossFadeTransitionsStatusDidChange (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that UIKit posts when the system’s Prefer Cross-Fade Transitions setting changes.

## Declaration

```swift
nonisolated static let prefersCrossFadeTransitionsStatusDidChange: NSNotification.Name
```

## See Also

### Cross-fade transitions

- [prefersCrossFadeTransitions](preferscrossfadetransitions.md): A Boolean value that indicates whether the Reduce Motion and the Prefer Cross-Fade Transitions settings are in an enabled state.

# UIAccessibilityPrefersCrossFadeTransitionsStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that UIKit posts when the system’s Prefer Cross-Fade Transitions setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityPrefersCrossFadeTransitionsStatusDidChangeNotification;
```

## See Also

### Cross-fade transitions

- [UIAccessibilityPrefersCrossFadeTransitions](preferscrossfadetransitions.md): A Boolean value that indicates whether the Reduce Motion and the Prefer Cross-Fade Transitions settings are in an enabled state.
