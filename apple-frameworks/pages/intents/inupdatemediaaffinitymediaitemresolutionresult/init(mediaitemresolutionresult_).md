> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinitymediaitemresolutionresult/init(mediaitemresolutionresult:)](https://developer.apple.com/documentation/intents/inupdatemediaaffinitymediaitemresolutionresult/init(mediaitemresolutionresult:))

# init(mediaItemResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a result that involves successfully updating the user’s affinity for a media item.

## Declaration

```swift
init(mediaItemResolutionResult: INMediaItemResolutionResult)
```

## Parameters

- `mediaItemResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INUpdateMediaAffinityMediaItemResolutionResult](../inupdatemediaaffinitymediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to successfully update the user’s affinity for a media item.

## See Also

### Providing Successful Results

- [successes(with:)](successes%28with_%29.md): Creates an array of resolution results based on a set of media items you provide.

# initWithMediaItemResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a result that involves successfully updating the user’s affinity for a media item.

## Declaration

```objectivec
- (instancetype) initWithMediaItemResolutionResult:(INMediaItemResolutionResult *) mediaItemResolutionResult;
```

## Parameters

- `mediaItemResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INUpdateMediaAffinityMediaItemResolutionResult](../inupdatemediaaffinitymediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to successfully update the user’s affinity for a media item.

## See Also

### Providing Successful Results

- [successesWithResolvedMediaItems:](successes%28with_%29.md): Creates an array of resolution results based on a set of media items you provide.
