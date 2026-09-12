> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/significantappupdatetopic/init(description:)](https://developer.apple.com/documentation/permissionkit/significantappupdatetopic/init(description:))

# init(description:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Creates a new significant app update topic with the specified description.

## Declaration

```swift
init(description: String)
```

## Parameters

- `description`: An explanation of the significant update that initiates this permission request.

<a id="discussion"></a>

## Discussion

Use this initializer to create a topic that describes significant changes to your app. The description you provide helps people understand what changes you’re making and why you need their consent.
