> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventcontroller/localizedstringstablename](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/localizedstringstablename)

# localizedStringsTableName (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The name of the table in the bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

## Declaration

```swift
var localizedStringsTableName: String? { get set }
```

<a id="discussion"></a>

## Discussion

If the value of the property is nil, it will default to “Localizable”

## See Also

### Accessing strings

- [localizedStringsBundle](localizedstringsbundle.md): The bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

# localizedStringsTableName (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The name of the table in the bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.

## Declaration

```objectivec
@property (copy, nullable) NSString * localizedStringsTableName;
```

<a id="discussion"></a>

## Discussion

If the value of the property is nil, it will default to “Localizable”

## See Also

### Accessing strings

- [localizedStringsBundle](localizedstringsbundle.md): The bundle that contains the localized strings to be used by the AVPlayerInterstitialEventController.
