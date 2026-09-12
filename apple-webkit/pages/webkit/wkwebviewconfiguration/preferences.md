> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/preferences](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/preferences)

# preferences (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object that manages the preference-related settings for the web view.

## Declaration

```swift
var preferences: WKPreferences { get set }
```

<a id="Discussion"></a>

## Discussion

Use the preferences object in this property to customize the rendering, JavaScript, and other preferences related to your web view. You can also change the preferences by assigning a new WKPreferences object to this property.

## See Also

### Configuring the web view’s preferences

- [defaultWebpagePreferences](defaultwebpagepreferences.md): The default preferences to use when loading and rendering content.

# preferences (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object that manages the preference-related settings for the web view.

## Declaration

```objectivec
@property (nonatomic, strong) WKPreferences * preferences;
```

<a id="Discussion"></a>

## Discussion

Use the preferences object in this property to customize the rendering, JavaScript, and other preferences related to your web view. You can also change the preferences by assigning a new WKPreferences object to this property.

## See Also

### Configuring the web view’s preferences

- [defaultWebpagePreferences](defaultwebpagepreferences.md): The default preferences to use when loading and rendering content.
