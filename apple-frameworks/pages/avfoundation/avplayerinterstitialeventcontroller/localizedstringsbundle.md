> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventcontroller/localizedstringsbundle](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/localizedstringsbundle)

# localizedStringsBundle (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

## Declaration

```swift
@NSCopying var localizedStringsBundle: Bundle? { get set }
```

<a id="discussion"></a>

## Discussion

If the value of the property is nil, any UI elements triggered by the AVPlayerInterstitialEventController, such as the skip button, may contain a generic label based on the implementation of the UI that’s in use. To ensure the best available user experience in various playback configurations, including external playback, set a value for this property that provides localized translations of skip control labels.

## See Also

### Accessing strings

- [localizedStringsTableName](localizedstringstablename.md): The name of the table in the bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

# localizedStringsBundle (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

## Declaration

```objectivec
@property (copy, nullable) NSBundle * localizedStringsBundle;
```

<a id="discussion"></a>

## Discussion

If the value of the property is nil, any UI elements triggered by the AVPlayerInterstitialEventController, such as the skip button, may contain a generic label based on the implementation of the UI that’s in use. To ensure the best available user experience in various playback configurations, including external playback, set a value for this property that provides localized translations of skip control labels.

## See Also

### Accessing strings

- [localizedStringsTableName](localizedstringstablename.md): The name of the table in the bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.
