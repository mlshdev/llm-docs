> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression/handletap(reengagementurl:)](https://developer.apple.com/documentation/adattributionkit/appimpression/handletap(reengagementurl:))

# handleTap(reengagementURL:)

**Framework:** AdAttributionKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Processes click-through interactions on your custom rendered ad content, and delivers a URL to the advertised app if it’s installed.

## Declaration

```swift
func handleTap(reengagementURL: URL) async throws
```

## Parameters

- `reengagementURL`: A universal link into the advertised app that the framework attempts to open.

<a id="discussion"></a>

## Discussion

Use this method to provide a URL to deeply link someone into an advertised app if they have the app installed.

If the system can validate that a person tapped the custom rendered ad content, it attempts to either launch one of the installed marketplaces to show the product page to install the advertised app, or performs a reengagement if the advertised app is already installed, and opens the reengagement URL.

AdAttributionKit requires the URL to be a universal link specifically for the advertised app that the framework uses at runtime to attempt to open the app. If the URL isn’t a universal link, or the universal link isn’t registered to the advertised app, the framework disregards the URL and launches the app as usual without passing the URL. For more information, see [Allowing apps and websites to link to your content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content) and [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

## See Also

### Processing interactions with click-through ads

- [handleTap()](handletap%28%29.md): Processes click-through interactions on your custom rendered ad content.
