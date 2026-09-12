> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenterdelegate/highlightcenterhighlightsdidchange(_:)](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenterdelegate/highlightcenterhighlightsdidchange(_:))

# highlightCenterHighlightsDidChange(\_:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Notifies the delegate that the list or rank order of surfaced highlights has changed.

## Declaration

```swift
func highlightCenterHighlightsDidChange(_ highlightCenter: SWHighlightCenter)
```

## Parameters

- `highlightCenter`: The delegete for the hightlight center.

<a id="Discussion"></a>

## Discussion

When the system calls this method, the app updates any displayed highlights to match the updated list. Only the highlights provided by the system should have a shared indication. If no highlights are in the list, the app should remove any links previously indicated.

The array is a priority-ordered list, where the first element in the array is the most relevant to the user. The list of provided highlights is empty if there are no highlights or if the user hasn’t given permission for the app to display highlights.

# highlightCenterHighlightsDidChange: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Notifies the delegate that the list or rank order of surfaced highlights has changed.

## Declaration

```objectivec
- (void) highlightCenterHighlightsDidChange:(SWHighlightCenter *) highlightCenter;
```

## Parameters

- `highlightCenter`: The delegete for the hightlight center.

<a id="Discussion"></a>

## Discussion

When the system calls this method, the app updates any displayed highlights to match the updated list. Only the highlights provided by the system should have a shared indication. If no highlights are in the list, the app should remove any links previously indicated.

The array is a priority-ordered list, where the first element in the array is the most relevant to the user. The list of provided highlights is empty if there are no highlights or if the user hasn’t given permission for the app to display highlights.
