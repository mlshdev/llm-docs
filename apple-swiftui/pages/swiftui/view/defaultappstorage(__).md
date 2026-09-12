> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/defaultappstorage(_:)](https://developer.apple.com/documentation/swiftui/view/defaultappstorage(_:))

# defaultAppStorage(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The default store used by `AppStorage` contained within the view.

## Declaration

```swift
nonisolated func defaultAppStorage(_ store: UserDefaults) -> some View

```

## Parameters

- `store`: The user defaults to use as the default store for `AppStorage`.

<a id="discussion"></a>

## Discussion

If unspecified, the default store for a view hierarchy is `UserDefaults.standard`, but can be set a to a custom one. For example, sharing defaults between an app and an extension can override the default store to one created with `UserDefaults.init(suiteName:_)`.

## See Also

### Saving state across app launches

- [Restoring your app’s state with SwiftUI](../restoring-your-app-s-state-with-swiftui.md): Provide app continuity for users by preserving their current activities.
- [AppStorage](../appstorage.md): A property wrapper type that reflects a value from `UserDefaults` and invalidates a view on a change in value in that user default.
- [SceneStorage](../scenestorage.md): A property wrapper type that reads and writes to persisted, per-scene storage.
