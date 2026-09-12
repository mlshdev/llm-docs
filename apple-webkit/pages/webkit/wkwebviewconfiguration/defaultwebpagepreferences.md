> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/defaultwebpagepreferences](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/defaultwebpagepreferences)

# defaultWebpagePreferences (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The default preferences to use when loading and rendering content.

## Declaration

```swift
@NSCopying var defaultWebpagePreferences: WKWebpagePreferences! { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the JavaScript settings and content mode for new webpages. When the web view navigates to a new page, it passes the default preferences to its navigation delegate, which can modify the preferences or pass them as they are.

## See Also

### Configuring the web view’s preferences

- [preferences](preferences.md): The object that manages the preference-related settings for the web view.

# defaultWebpagePreferences (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The default preferences to use when loading and rendering content.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) WKWebpagePreferences * defaultWebpagePreferences;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the JavaScript settings and content mode for new webpages. When the web view navigates to a new page, it passes the default preferences to its navigation delegate, which can modify the preferences or pass them as they are.

## See Also

### Configuring the web view’s preferences

- [preferences](preferences.md): The object that manages the preference-related settings for the web view.
