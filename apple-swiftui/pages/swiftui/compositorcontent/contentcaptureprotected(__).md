> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontent/contentcaptureprotected(_:)](https://developer.apple.com/documentation/swiftui/compositorcontent/contentcaptureprotected(_:))

# contentCaptureProtected(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Marks the view as a view that activates content protection during scene capture events, such as screenshots, screen recordings, screensharing, etc.

## Declaration

```swift
nonisolated func contentCaptureProtected(_ isActive: Bool = true) -> some CompositorContent

```

## Parameters

- `isActive`: A Boolean value that specifies whether this view is protected when present on screen during scene capture.

<a id="discussion"></a>

## Discussion

The `contentCaptureProtected` modifier requires the [App-Protected Content](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.protected-content) entitlement. For more information on how to apply for this entitlement, see [Building spatial experiences for business apps with enterprise APIs for visionOS](https://developer.apple.com/documentation/visionos/building-spatial-experiences-for-business-apps-with-enterprise-apis).

On visionOS, the system redacts the entire screen when a view marked with this modifier is present on screen, scene capture is active, and the app has the App Protected Content entitlement.
