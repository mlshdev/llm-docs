> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clbackgroundactivitysession-3mzv3/invalidate()

# invalidate()

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+ · watchOS 10.0+

Invalidates the background activity session.

## Declaration

```swift
final func invalidate()
```

<a id="Discussion"></a>

## Discussion

This method ends the session immediately. The system terminates any UI that displays a visual indication to this background session. After you invalidate a session, it can’t become active again and you need to create a new session to begin receiving updates again.
