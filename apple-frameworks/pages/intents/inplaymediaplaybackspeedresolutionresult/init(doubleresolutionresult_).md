> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaplaybackspeedresolutionresult/init(doubleresolutionresult:)](https://developer.apple.com/documentation/intents/inplaymediaplaybackspeedresolutionresult/init(doubleresolutionresult:))

# init(doubleResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfulling changing the playback speed of a media item.

## Declaration

```swift
init(doubleResolutionResult: INDoubleResolutionResult)
```

## Parameters

- `doubleResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlayMediaPlaybackSpeedResolutionResult](../inplaymediaplaybackspeedresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to change the playback speed of a media item.

## See Also

### Creating a Resolution Result

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.
- [INPlayMediaPlaybackSpeedUnsupportedReason](../inplaymediaplaybackspeedunsupportedreason.md): Constants that describe why the app can’t change the playback speed of the media item.

# initWithDoubleResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfulling changing the playback speed of a media item.

## Declaration

```objectivec
- (instancetype) initWithDoubleResolutionResult:(INDoubleResolutionResult *) doubleResolutionResult;
```

## Parameters

- `doubleResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlayMediaPlaybackSpeedResolutionResult](../inplaymediaplaybackspeedresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to change the playback speed of a media item.

## See Also

### Creating a Resolution Result

- [unsupportedForReason:](unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.
- [INPlayMediaPlaybackSpeedUnsupportedReason](../inplaymediaplaybackspeedunsupportedreason.md): Constants that describe why the app can’t change the playback speed of the media item.
