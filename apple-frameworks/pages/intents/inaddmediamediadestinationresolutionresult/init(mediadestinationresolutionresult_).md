> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inaddmediamediadestinationresolutionresult/init(mediadestinationresolutionresult:)

# init(mediaDestinationResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfully adding a media item to a particular destination.

## Declaration

```swift
init(mediaDestinationResolutionResult: INMediaDestinationResolutionResult)
```

## Parameters

- `mediaDestinationResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INAddMediaMediaDestinationResolutionResult](../inaddmediamediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to add a media item to a particular destination.

## See Also

### Creating a Resolution Result

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the media destination.
- [INAddMediaMediaDestinationUnsupportedReason](../inaddmediamediadestinationunsupportedreason.md): Reasons describing why the destination is not supported.

# initWithMediaDestinationResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfully adding a media item to a particular destination.

## Declaration

```objectivec
- (instancetype) initWithMediaDestinationResolutionResult:(INMediaDestinationResolutionResult *) mediaDestinationResolutionResult;
```

## Parameters

- `mediaDestinationResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INAddMediaMediaDestinationResolutionResult](../inaddmediamediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to add a media item to a particular destination.

## See Also

### Creating a Resolution Result

- [unsupportedForReason:](unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the media destination.
- [INAddMediaMediaDestinationUnsupportedReason](../inaddmediamediadestinationunsupportedreason.md): Reasons describing why the destination is not supported.
