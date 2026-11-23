> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/shared

# shared (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The shared Now Playing template for you to configure and display.

## Declaration

```swift
class var shared: CPNowPlayingTemplate { get }
```

<a id="discussion"></a>

## Discussion

Use this property to access the singleton `CPNowPlayingTemplate` object and configure it. At launch time, configure this instance and register an observer to support features like the Album Artist and Up Next button. While your app is running, you can present the template directly from your interface to reflect the currently playing item. For example, if someone plays an album, you might show this interface so the person can monitor playback and see upcoming tracks. The system can also present your app’s shared Now Playing interface from the Now Playing app.

# sharedTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The shared Now Playing template for you to configure and display.

## Declaration

```objectivec
@property (class, nonatomic, strong, readonly) CPNowPlayingTemplate * sharedTemplate;
```

<a id="discussion"></a>

## Discussion

Use this property to access the singleton `CPNowPlayingTemplate` object and configure it. At launch time, configure this instance and register an observer to support features like the Album Artist and Up Next button. While your app is running, you can present the template directly from your interface to reflect the currently playing item. For example, if someone plays an album, you might show this interface so the person can monitor playback and see upcoming tracks. The system can also present your app’s shared Now Playing interface from the Now Playing app.
