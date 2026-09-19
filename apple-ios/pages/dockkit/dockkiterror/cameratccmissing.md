> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockkiterror/cameratccmissing

# DockKitError.cameraTCCMissing

**Framework:** DockKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The camera terms and conditions are missing.

## Declaration

```swift
case cameraTCCMissing
```

<a id="discussion"></a>

## Discussion

In order for DockKit to access the camera, a person must accept the terms and conditions. If you receive this error, show an alert indicating that terms and conditions are necessary.
