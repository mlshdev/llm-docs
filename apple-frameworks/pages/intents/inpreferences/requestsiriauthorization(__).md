> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpreferences/requestsiriauthorization(_:)](https://developer.apple.com/documentation/intents/inpreferences/requestsiriauthorization(_:))

# requestSiriAuthorization(\_:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Requests authorization to use Siri services.

## Declaration

```swift
class func requestSiriAuthorization(_ handler: @escaping (INSiriAuthorizationStatus) -> Void)
```

## Parameters

- `handler`: The handler block to execute when the authorization status for your app is determined. This block has no return value and takes the following parameter:

  - **status**: The authorization status of your app. For a list of possible values, see [INSiriAuthorizationStatus](../insiriauthorizationstatus.md).

## Mentioned In

- [Requesting Authorization to Use Siri](../../sirikit/requesting-authorization-to-use-siri.md)

<a id="Discussion"></a>

## Discussion

Call this method from your app to request authorization to integrate with Siri services. The first time you make this request, Siri prompts the user to grant or deny permission for your app to integrate with Siri. Subsequent calls to the method do not prompt the user again.

The block you provide in the `handler` parameter is executed asynchronously with the results of your authorization request.

## See Also

### Managing the App’s Authorization

- [siriAuthorizationStatus()](siriauthorizationstatus%28%29.md): Returns the current authorization status of your app.

# requestSiriAuthorization: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Requests authorization to use Siri services.

## Declaration

```objectivec
+ (void) requestSiriAuthorization:(void (^)(INSiriAuthorizationStatus status)) handler;
```

## Parameters

- `handler`: The handler block to execute when the authorization status for your app is determined. This block has no return value and takes the following parameter:

  - **status**: The authorization status of your app. For a list of possible values, see [INSiriAuthorizationStatus](../insiriauthorizationstatus.md).

## Mentioned In

- [Requesting Authorization to Use Siri](../../sirikit/requesting-authorization-to-use-siri.md)

<a id="Discussion"></a>

## Discussion

Call this method from your app to request authorization to integrate with Siri services. The first time you make this request, Siri prompts the user to grant or deny permission for your app to integrate with Siri. Subsequent calls to the method do not prompt the user again.

The block you provide in the `handler` parameter is executed asynchronously with the results of your authorization request.

## See Also

### Managing the App’s Authorization

- [siriAuthorizationStatus](siriauthorizationstatus%28%29.md): Returns the current authorization status of your app.
