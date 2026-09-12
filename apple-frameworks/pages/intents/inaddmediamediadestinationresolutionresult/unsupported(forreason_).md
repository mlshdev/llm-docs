> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediamediadestinationresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/inaddmediamediadestinationresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to confirm the media destination.

## Declaration

```swift
class func unsupported(forReason reason: INAddMediaMediaDestinationUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason that adding a media item isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INAddMediaMediaDestinationResolutionResult](../inaddmediamediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [init(mediaDestinationResolutionResult:)](init%28mediadestinationresolutionresult_%29.md): Creates an object whose resolution involves successfully adding a media item to a particular destination.
- [INAddMediaMediaDestinationUnsupportedReason](../inaddmediamediadestinationunsupportedreason.md): Reasons describing why the destination is not supported.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to confirm the media destination.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INAddMediaMediaDestinationUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason that adding a media item isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INAddMediaMediaDestinationResolutionResult](../inaddmediamediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [initWithMediaDestinationResolutionResult:](init%28mediadestinationresolutionresult_%29.md): Creates an object whose resolution involves successfully adding a media item to a particular destination.
- [INAddMediaMediaDestinationUnsupportedReason](../inaddmediamediadestinationunsupportedreason.md): Reasons describing why the destination is not supported.
