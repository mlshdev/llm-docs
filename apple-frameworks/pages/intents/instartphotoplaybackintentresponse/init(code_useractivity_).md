> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes the response object with the specified code and user activity object.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(code: INStartPhotoPlaybackIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: The response code indicating your success or failure in confirming or handling the intent. For a list of possible values, see [INStartPhotoPlaybackIntentResponseCode](../instartphotoplaybackintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that’s specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent , and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="Discussion"></a>

## Discussion

After initializing the object, assign a value to the [searchResultsCount](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponse/searchresultscount-6ns8y) property indicating the number of photos that match the search parameters.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes the response object with the specified code and user activity object.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithCode:(INStartPhotoPlaybackIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: The response code indicating your success or failure in confirming or handling the intent. For a list of possible values, see [INStartPhotoPlaybackIntentResponseCode](../instartphotoplaybackintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that’s specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent , and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="Discussion"></a>

## Discussion

After initializing the object, assign a value to the [searchResultsCount](https://developer.apple.com/documentation/intents/instartphotoplaybackintentresponse/searchresultscount-6ns8y) property indicating the number of photos that match the search parameters.
