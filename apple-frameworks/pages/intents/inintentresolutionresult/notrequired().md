> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintentresolutionresult/notrequired()](https://developer.apple.com/documentation/intents/inintentresolutionresult/notrequired())

# notRequired() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution indicates that you don’t need the value of the parameter.

## Declaration

```swift
class func notRequired() -> Self
```

<a id="return-value"></a>

## Return Value

A new resolution result object.

<a id="Discussion"></a>

## Discussion

Use this method when you don’t need or use the value of a parameter to process an intent object. When you return a resolution object of this type, Siri ends the resolution process for the parameter.

## See Also

### Common Results

- [needsValue()](needsvalue%28%29.md): Creates an object whose resolution indicates that a required parameter value is missing.
- [unsupported()](unsupported%28%29.md): Creates an object whose resolution indicates that your app doesn’t support the specified value.

# notRequired (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution indicates that you don’t need the value of the parameter.

## Declaration

```objectivec
+ (instancetype) notRequired;
```

<a id="return-value"></a>

## Return Value

A new resolution result object.

<a id="Discussion"></a>

## Discussion

Use this method when you don’t need or use the value of a parameter to process an intent object. When you return a resolution object of this type, Siri ends the resolution process for the parameter.

## See Also

### Common Results

- [confirmationRequiredWithItemToConfirm:forReason:](https://developer.apple.com/documentation/intents/inintentresolutionresult/confirmationrequiredwithitemtoconfirm:forreason:): Creates an object whose resolution indicates that your app requires confirmation of the specified value.
- [unsupportedWithReason:](https://developer.apple.com/documentation/intents/inintentresolutionresult/unsupportedwithreason:): Creates an object whose resolution indicates that your app doesn’t support the specified value.
- [needsValue](needsvalue%28%29.md): Creates an object whose resolution indicates that a required parameter value is missing.
- [unsupported](unsupported%28%29.md): Creates an object whose resolution indicates that your app doesn’t support the specified value.
