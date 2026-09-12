> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/shared](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/shared)

# shared (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The Now Playing template the system provides.

## Declaration

```swift
class var shared: CPNowPlayingTemplate { get }
```

<a id="Discussion"></a>

## Discussion

You do not create instances of `CPNowPlayingTemplate` directly. Instead, use this property to access the shared Now Playing template that CarPlay provides, and then configure its properties accordingly.

You must present this shared instance when your app needs to display Now Playing information. For example, in response to the user tapping a playable item. When CarPlay displays Now Playing information for your app, it presents this shared instance.

# sharedTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The Now Playing template the system provides.

## Declaration

```objectivec
@property (class, nonatomic, strong, readonly) CPNowPlayingTemplate * sharedTemplate;
```

<a id="Discussion"></a>

## Discussion

You do not create instances of `CPNowPlayingTemplate` directly. Instead, use this property to access the shared Now Playing template that CarPlay provides, and then configure its properties accordingly.

You must present this shared instance when your app needs to display Now Playing information. For example, in response to the user tapping a playable item. When CarPlay displays Now Playing information for your app, it presents this shared instance.
