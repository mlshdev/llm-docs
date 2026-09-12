> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/init(configuration:)](https://developer.apple.com/documentation/webkit/webpage/init(configuration:))

# init(configuration:)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Create a new WebPage.

## Declaration

```swift
@MainActor convenience init(configuration: WebPage.Configuration = Configuration())
```

## Parameters

- `configuration`: A [WebPage.Configuration](configuration.md) value to use when initializing the page.

## See Also

### Creating a WebPage

- [WebPage.Configuration](configuration.md): A configuration type that specifies the preferences and behaviors of a webpage.
- [init(configuration:dialogPresenter:)](init%28configuration_dialogpresenter_%29.md): Create a new WebPage.
- [init(configuration:navigationDecider:)](init%28configuration_navigationdecider_%29.md): Create a new WebPage.
- [init(configuration:navigationDecider:dialogPresenter:)](init%28configuration_navigationdecider_dialogpresenter_%29.md): Create a new WebPage.
