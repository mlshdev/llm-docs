> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetrestaurantguestintenthandling/confirm(getrestaurantguest:completion:)](https://developer.apple.com/documentation/intents/ingetrestaurantguestintenthandling/confirm(getrestaurantguest:completion:))

# confirm(getRestaurantGuest:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can provide the guest information.

## Declaration

```swift
optional func confirm(getRestaurantGuest guestIntent: INGetRestaurantGuestIntent, completion: @escaping @Sendable (INGetRestaurantGuestIntentResponse) -> Void)
```

```swift
optional func confirm(getRestaurantGuest guestIntent: INGetRestaurantGuestIntent) async -> INGetRestaurantGuestIntentResponse
```

## Parameters

- `guestIntent`: The intent object describing the request.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetRestaurantGuestIntentResponse](../ingetrestaurantguestintentresponse.md) object containing the status of whether your app is able to return information about the current user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can return the current user’s information. At some point in your implementation, execute the provided completion block with a response object.

# confirmGetRestaurantGuest:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can provide the guest information.

## Declaration

```objectivec
- (void) confirmGetRestaurantGuest:(INGetRestaurantGuestIntent *) guestIntent completion:(void (^)(INGetRestaurantGuestIntentResponse *response)) completion;
```

## Parameters

- `guestIntent`: The intent object describing the request.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetRestaurantGuestIntentResponse](../ingetrestaurantguestintentresponse.md) object containing the status of whether your app is able to return information about the current user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can return the current user’s information. At some point in your implementation, execute the provided completion block with a response object.
