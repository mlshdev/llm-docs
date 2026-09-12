> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/init(configuration:navigationdecider:dialogpresenter:)](https://developer.apple.com/documentation/webkit/webpage/init(configuration:navigationdecider:dialogpresenter:))

# init(configuration:navigationDecider:dialogPresenter:)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Create a new WebPage.

## Declaration

```swift
@MainActor convenience init(configuration: WebPage.Configuration = Configuration(), navigationDecider: some WebPage.NavigationDeciding, dialogPresenter: some WebPage.DialogPresenting)
```

## Parameters

- `configuration`: A [WebPage.Configuration](configuration.md) value to use when initializing the page.
- `navigationDecider`: A navigation decider used to customize navigations that happen within the page.
- `dialogPresenter`: A dialog presenter which controls how JavaScript dialogs are handled.

## See Also

### Creating a WebPage

- [WebPage.Configuration](configuration.md): A configuration type that specifies the preferences and behaviors of a webpage.
- [init(configuration:)](init%28configuration_%29.md): Create a new WebPage.
- [init(configuration:dialogPresenter:)](init%28configuration_dialogpresenter_%29.md): Create a new WebPage.
- [init(configuration:navigationDecider:)](init%28configuration_navigationdecider_%29.md): Create a new WebPage.
