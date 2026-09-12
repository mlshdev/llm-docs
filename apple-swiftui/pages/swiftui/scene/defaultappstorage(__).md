> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/defaultappstorage(_:)](https://developer.apple.com/documentation/swiftui/scene/defaultappstorage(_:))

# defaultAppStorage(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The default store used by `AppStorage` contained within the scene and its view content.

## Declaration

```swift
nonisolated func defaultAppStorage(_ store: UserDefaults) -> some Scene

```

## Parameters

- `store`: The user defaults to use as the default store for `AppStorage`.

<a id="discussion"></a>

## Discussion

If unspecified, the default store for a view hierarchy is `UserDefaults.standard`, but can be set a to a custom one. For example, sharing defaults between an app and an extension can override the default store to one created with `UserDefaults.init(suiteName:_)`.
