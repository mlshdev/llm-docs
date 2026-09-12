> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturepointcloudview/showshotlocations(_:)](https://developer.apple.com/documentation/realitykit/objectcapturepointcloudview/showshotlocations(_:))

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
