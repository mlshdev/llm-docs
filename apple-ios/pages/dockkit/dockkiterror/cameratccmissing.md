> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockkiterror/cameratccmissing](https://developer.apple.com/documentation/dockkit/dockkiterror/cameratccmissing)

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
