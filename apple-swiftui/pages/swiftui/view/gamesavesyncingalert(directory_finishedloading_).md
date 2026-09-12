> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/gamesavesyncingalert(directory:finishedloading:)](https://developer.apple.com/documentation/swiftui/view/gamesavesyncingalert(directory:finishedloading:))

# gameSaveSyncingAlert(directory:finishedLoading:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Presents a modal view while the game synced directory loads.

## Declaration

```swift
@MainActor @preconcurrency func gameSaveSyncingAlert(directory: Binding<GameSaveSyncedDirectory?>, finishedLoading: @escaping @MainActor @Sendable () -> Void) -> some View

```

## Parameters

- `directory`: A binding to an optional game synced directory that was returned by calling `GameSaveSyncedDirectory/openDirectory(containerIdentifier:)`. If this value is `nil`, the view doesn’t display.
- `finishedLoading`: The closure to execute after the loading process completes.

<a id="discussion"></a>

## Discussion

Use this method when you want to present a modal loading view to the user when a Boolean value you provide is true.
