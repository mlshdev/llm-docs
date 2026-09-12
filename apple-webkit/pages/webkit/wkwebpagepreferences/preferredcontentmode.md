> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences/preferredcontentmode](https://developer.apple.com/documentation/webkit/wkwebpagepreferences/preferredcontentmode)

# preferredContentMode (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The content mode for the web view to use when it loads and renders a webpage.

## Declaration

```swift
var preferredContentMode: WKWebpagePreferences.ContentMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [WKWebpagePreferences.ContentMode.recommended](contentmode/recommended.md). The web view ignores this preference for subframe navigation.

## See Also

### Setting the preferred content mode

- [WKWebpagePreferences.ContentMode](contentmode.md): Constants that indicate how to render web view content.

# preferredContentMode (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The content mode for the web view to use when it loads and renders a webpage.

## Declaration

```objectivec
@property (nonatomic) WKContentMode preferredContentMode;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [WKContentModeRecommended](contentmode/recommended.md). The web view ignores this preference for subframe navigation.

## See Also

### Setting the preferred content mode

- [WKContentMode](contentmode.md): Constants that indicate how to render web view content.
