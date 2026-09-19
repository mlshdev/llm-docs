> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ininteraction/init(intent:response:)

# init(intent:response:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes and returns an interaction object with an intent object and your app’s response.

## Declaration

```swift
init(intent: INIntent, response: INIntentResponse?)
```

## Parameters

- `intent`: The intent object containing the user’s request.
- `response`: The response object that your app provided in response to the intent.

<a id="return-value"></a>

## Return Value

An initialized interaction object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to initialize interaction objects that you intend to donate. You do not need to create interaction objects for any custom [NSUserActivity](../../foundation/nsuseractivity.md) objects that you create during the handling of an intent. SiriKit automatically creates an instance of this class before delivering an [NSUserActivity](../../foundation/nsuseractivity.md) object to your app.

# initWithIntent:response: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes and returns an interaction object with an intent object and your app’s response.

## Declaration

```objectivec
- (instancetype) initWithIntent:(INIntent *) intent response:(INIntentResponse *) response;
```

## Parameters

- `intent`: The intent object containing the user’s request.
- `response`: The response object that your app provided in response to the intent.

<a id="return-value"></a>

## Return Value

An initialized interaction object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to initialize interaction objects that you intend to donate. You do not need to create interaction objects for any custom [NSUserActivity](../../foundation/nsuseractivity.md) objects that you create during the handling of an intent. SiriKit automatically creates an instance of this class before delivering an [NSUserActivity](../../foundation/nsuseractivity.md) object to your app.
