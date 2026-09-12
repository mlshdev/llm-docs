> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openexternalurloptionskey/universallinksonly](https://developer.apple.com/documentation/uikit/uiapplication/openexternalurloptionskey/universallinksonly)

# universalLinksOnly (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

URLs must be universal links and have an app configured to open them.

## Declaration

```swift
static let universalLinksOnly: UIApplication.OpenExternalURLOptionsKey
```

<a id="Discussion"></a>

## Discussion

When you include this key in the options dictionary of the [open(\_:options:completionHandler:)](../open%28__options_completionhandler_%29.md) method, the method opens the URL only if the URL is a valid universal link and there is an installed app capable of opening that URL. The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value.

# UIApplicationOpenURLOptionUniversalLinksOnly (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

URLs must be universal links and have an app configured to open them.

## Declaration

```objectivec
extern UIApplicationOpenExternalURLOptionsKey const UIApplicationOpenURLOptionUniversalLinksOnly;
```

<a id="Discussion"></a>

## Discussion

When you include this key in the options dictionary of the [openURL:options:completionHandler:](../open%28__options_completionhandler_%29.md) method, the method opens the URL only if the URL is a valid universal link and there is an installed app capable of opening that URL. The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value.
