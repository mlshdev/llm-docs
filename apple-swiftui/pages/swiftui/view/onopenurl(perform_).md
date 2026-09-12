> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onopenurl(perform:)](https://developer.apple.com/documentation/swiftui/view/onopenurl(perform:))

# onOpenURL(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Registers a handler to invoke in response to a URL that your app receives.

## Declaration

```swift
nonisolated func onOpenURL(perform action: @escaping (URL) -> ()) -> some View

```

## Parameters

- `action`: A closure that SwiftUI calls when your app receives a Universal Link or a custom [URL](https://developer.apple.com/documentation/foundation/url). The closure takes the URL as an input parameter.

<a id="return-value"></a>

## Return Value

A view that handles incoming URLs.

<a id="discussion"></a>

## Discussion

Use this view modifier to receive URLs in a particular scene within your app. The scene that SwiftUI routes the incoming URL to depends on the structure of your app, what scenes are active, and other configuration. For more information, see [handlesExternalEvents(matching:)](../scene/handlesexternalevents%28matching_%29.md).

UI frameworks traditionally pass Universal Links to your app using an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity). However, SwiftUI passes a Universal Link to your app directly as a URL, which you receive using this modifier. To receive other user activities, like when your app participates in Handoff, use the [onContinueUserActivity(\_:perform:)](oncontinueuseractivity%28__perform_%29.md) modifier instead.

For more information about linking into your app, see [Allowing apps and websites to link to your content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content).

## See Also

### Sending and receiving URLs

- [openURL](../environmentvalues/openurl.md): An action that opens a URL.
- [OpenURLAction](../openurlaction.md): An action that opens a URL.
