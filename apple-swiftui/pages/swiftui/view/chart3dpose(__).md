> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chart3dpose(_:)](https://developer.apple.com/documentation/swiftui/view/chart3dpose(_:))

# chart3DPose(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Associates a binding to be updated when the 3D chart’s pose is changed by an interaction.

## Declaration

```swift
@MainActor @preconcurrency func chart3DPose(_ pose: Binding<Chart3DPose>) -> some View

```

## Parameters

- `pose`: The 3D chart’s current pose.

## See Also

### 3D configuration

- [chart3DCameraProjection(\_:)](chart3dcameraprojection%28__%29.md)
- [chart3DRenderingStyle(\_:)](chart3drenderingstyle%28__%29.md)
