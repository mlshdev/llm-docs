> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicisland/widgeturl(_:)](https://developer.apple.com/documentation/widgetkit/dynamicisland/widgeturl(_:))

# widgetURL(\_:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Sets the URL that opens the corresponding app of a Live Activity when a user taps on the Live Activity.

## Declaration

```swift
func widgetURL(_ url: URL?) -> DynamicIsland
```

## Parameters

- `url`: The URL that opens the app.

<a id="return-value"></a>

## Return Value

The configuration object for the Dynamic Island with the specified URL.

<a id="discussion"></a>

## Discussion

By setting the URL with this function, it becomes the default URL for deep linking into the app for each view of the Live Activity. However, if you include a [Link](https://developer.apple.com/documentation/swiftui/link) in the Live Activity, the link takes priority over the default URL. When a person taps on the `Link`, it takes them to the place in the app that corresponds to the URL of the `Link`.
