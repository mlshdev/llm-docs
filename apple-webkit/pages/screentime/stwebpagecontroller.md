> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller](https://developer.apple.com/documentation/screentime/stwebpagecontroller)

# STWebpageController (Swift)

**Framework:** Screen Time  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The controller you use to report web usage and block restricted webpages.

## Declaration

```swift
class STWebpageController
```

<a id="Overview"></a>

## Overview

This class provides a convenient way for you to communicate changes in each webpage, such as when the user starts or stops playing media. When a parent or guardian of the user blocks the webpage’s current URL, the webpage controller:

- Automatically occludes the web page’s content
- Updates a KVO-compliant [urlIsBlocked](stwebpagecontroller/urlisblocked.md) property

For example, you can observe `urlIsBlocked` and take action when it changes to [YES](https://developer.apple.com/documentation/objectivec/yes), such as pausing media.

> **Important**

> Create a webpage controller for each webpage or tab and add it on top of the webpage’s content.

## Topics

### Instance properties

- [suppressUsageRecording](stwebpagecontroller/suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [url](stwebpagecontroller/url.md): The URL for the webpage.
- [urlIsBlocked](stwebpagecontroller/urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [urlIsPictureInPicture](stwebpagecontroller/urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [urlIsPlayingVideo](stwebpagecontroller/urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.

### Instance methods

- [setBundleIdentifier(\_:)](stwebpagecontroller/setbundleidentifier%28__%29.md): Changes the bundle identifier used to report web usage.

### Instance Properties

- [profileIdentifier](stwebpagecontroller/profileidentifier.md): An optional identifier for the current browsing profile.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UIContentContainer](https://developer.apple.com/documentation/uikit/uicontentcontainer)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UIStateRestoring](https://developer.apple.com/documentation/uikit/uistaterestoring)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

# STWebpageController (Objective-C)

**Framework:** Screen Time  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The controller you use to report web usage and block restricted webpages.

## Declaration

```objectivec
@interface STWebpageController : UIViewController
```

```objectivec
@interface STWebpageController : NSViewController
```

<a id="Overview"></a>

## Overview

This class provides a convenient way for you to communicate changes in each webpage, such as when the user starts or stops playing media. When a parent or guardian of the user blocks the webpage’s current URL, the webpage controller:

- Automatically occludes the web page’s content
- Updates a KVO-compliant [URLIsBlocked](stwebpagecontroller/urlisblocked.md) property

For example, you can observe `urlIsBlocked` and take action when it changes to [YES](https://developer.apple.com/documentation/objectivec/yes), such as pausing media.

> **Important**

> Create a webpage controller for each webpage or tab and add it on top of the webpage’s content.

## Topics

### Instance properties

- [suppressUsageRecording](stwebpagecontroller/suppressusagerecording.md): A Boolean that indicates whether the webpage controller is not recording web usage.
- [URL](stwebpagecontroller/url.md): The URL for the webpage.
- [URLIsBlocked](stwebpagecontroller/urlisblocked.md): A Boolean that indicates whether a parent or guardian has blocked the URL.
- [URLIsPictureInPicture](stwebpagecontroller/urlispictureinpicture.md): A Boolean that indicates whether the webpage is currently displaying a floating picture in picture window.
- [URLIsPlayingVideo](stwebpagecontroller/urlisplayingvideo.md): A Boolean that indicates whether there are one or more videos currently playing in the webpage.

### Instance methods

- [setBundleIdentifier:error:](stwebpagecontroller/setbundleidentifier%28__%29.md): Changes the bundle identifier used to report web usage.

### Instance Properties

- [profileIdentifier](stwebpagecontroller/profileidentifier.md): An optional identifier for the current browsing profile.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)
