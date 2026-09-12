> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintent/init(visualcodetype:)](https://developer.apple.com/documentation/intents/ingetvisualcodeintent/init(visualcodetype:))

# init(visualCodeType:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with information about the requested type of code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(visualCodeType: INVisualCodeType)
```

## Parameters

- `visualCodeType`: The type of visual code that the user requested. For a list of possible values, see [INVisualCodeType](../invisualcodetype.md).

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks for a visual code from your app. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithVisualCodeType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with information about the requested type of code.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithVisualCodeType:(INVisualCodeType) visualCodeType;
```

## Parameters

- `visualCodeType`: The type of visual code that the user requested. For a list of possible values, see [INVisualCodeType](../invisualcodetype.md).

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks for a visual code from your app. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
