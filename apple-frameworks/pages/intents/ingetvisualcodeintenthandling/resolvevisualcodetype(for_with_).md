> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintenthandling/resolvevisualcodetype(for:with:)](https://developer.apple.com/documentation/intents/ingetvisualcodeintenthandling/resolvevisualcodetype(for:with:))

# resolveVisualCodeType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the type of code requested by the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveVisualCodeType(for intent: INGetVisualCodeIntent, with completion: @escaping @Sendable (INVisualCodeTypeResolutionResult) -> Void)
```

```swift
optional func resolveVisualCodeType(for intent: INGetVisualCodeIntent) async -> INVisualCodeTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INVisualCodeType](../invisualcodetype.md) value representing the requested code type. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that your app supports providing a code of the specified type. If your app supports the requested code or supports only one type of code, return a resolution of success with the code type that you support. If your app doesn’t support the requested type of visual code, provide a resolution asking the user to confirm the code type that you do support.

# resolveVisualCodeTypeForGetVisualCode:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the type of code requested by the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveVisualCodeTypeForGetVisualCode:(INGetVisualCodeIntent *) intent withCompletion:(void (^)(INVisualCodeTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INVisualCodeType](../invisualcodetype.md) value representing the requested code type. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that your app supports providing a code of the specified type. If your app supports the requested code or supports only one type of code, return a resolution of success with the code type that you support. If your app doesn’t support the requested type of visual code, provide a resolution asking the user to confirm the code type that you do support.
