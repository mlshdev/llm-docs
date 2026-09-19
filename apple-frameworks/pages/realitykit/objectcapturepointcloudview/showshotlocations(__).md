> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturepointcloudview/showshotlocations(_:)

# showShotLocations(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Shows the locations where shots have been taken. Example: ObjectCapturePointCloudView(session: mySession) .showShotLocations()

## Declaration

```swift
@MainActor func showShotLocations(_ value: Bool = true) -> ObjectCapturePointCloudView
```

<a id="discussion"></a>

## Discussion

It can also be passed a value if there is a state variable controlling it:

ObjectCapturePointCloudView(session: mySession) .showShotLocations(shouldShowShots)

Other modifiers can be chained to build the final view: ObjectCapturePointCloudView(session: mySession) .showShotLocations() .transition(.opacity)
