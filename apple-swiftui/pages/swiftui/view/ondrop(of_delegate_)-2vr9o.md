> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ondrop(of:delegate:)-2vr9o](https://developer.apple.com/documentation/swiftui/view/ondrop(of:delegate:)-2vr9o)

# onDrop(of:delegate:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 27.0) · iPadOS 13.4+ (deprecated in 27.0) · Mac Catalyst 13.4+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Defines the destination for a drag and drop operation with the same size and position as this view, with behavior controlled by the given delegate.

> Use [onDrop(of:delegate:)](https://developer.apple.com/documentation/swiftui/view/ondrop%28of:delegate:%29-6lin8) instead.

## Declaration

```swift
nonisolated func onDrop(of supportedTypes: [String], delegate: any DropDelegate) -> some View

```

## Parameters

- `supportedTypes`: The uniform type identifiers that describe the types of content this view can accept through drag and drop. If the drag and drop operation doesn’t contain any of the supported types, then this drop destination doesn’t activate and `isTargeted` doesn’t update.
- `delegate`: A type that conforms to the `DropDelegate` protocol. You have comprehensive control over drop behavior when you use a delegate.

<a id="return-value"></a>

## Return Value

A view that provides a drop destination for a drag operation of the specified types.
