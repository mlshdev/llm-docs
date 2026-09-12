> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaplaybackspeedresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/inplaymediaplaybackspeedresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.

## Declaration

```swift
class func unsupported(forReason reason: INPlayMediaPlaybackSpeedUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason that changing the playback speed of the media item isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INPlayMediaPlaybackSpeedResolutionResult](../inplaymediaplaybackspeedresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [init(doubleResolutionResult:)](init%28doubleresolutionresult_%29.md): Creates an object whose resolution involves successfulling changing the playback speed of a media item.
- [INPlayMediaPlaybackSpeedUnsupportedReason](../inplaymediaplaybackspeedunsupportedreason.md): Constants that describe why the app can’t change the playback speed of the media item.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INPlayMediaPlaybackSpeedUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason that changing the playback speed of the media item isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INPlayMediaPlaybackSpeedResolutionResult](../inplaymediaplaybackspeedresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [initWithDoubleResolutionResult:](init%28doubleresolutionresult_%29.md): Creates an object whose resolution involves successfulling changing the playback speed of a media item.
- [INPlayMediaPlaybackSpeedUnsupportedReason](../inplaymediaplaybackspeedunsupportedreason.md): Constants that describe why the app can’t change the playback speed of the media item.
