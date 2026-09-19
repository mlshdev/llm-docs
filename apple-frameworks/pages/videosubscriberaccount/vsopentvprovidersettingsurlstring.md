> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsopentvprovidersettingsurlstring

# VSOpenTVProviderSettingsURLString (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

A URL string you use to deep link to the system’s TV Provider settings.

## Declaration

```swift
let VSOpenTVProviderSettingsURLString: String
```

<a id="Discussion"></a>

## Discussion

Pass this URL to [open(\_:options:completionHandler:)](../uikit/uiapplication/open%28__options_completionhandler_%29.md) to open the Settings app and show the TV Provider settings.

# VSOpenTVProviderSettingsURLString (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · tvOS 13.0+ · visionOS 1.0+

A URL string you use to deep link to the system’s TV Provider settings.

## Declaration

```objectivec
extern NSString * const VSOpenTVProviderSettingsURLString;
```

<a id="Discussion"></a>

## Discussion

Pass this URL to [openURL:options:completionHandler:](../uikit/uiapplication/open%28__options_completionhandler_%29.md) to open the Settings app and show the TV Provider settings.
