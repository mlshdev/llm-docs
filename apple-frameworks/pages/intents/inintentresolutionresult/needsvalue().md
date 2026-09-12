> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintentresolutionresult/needsvalue()](https://developer.apple.com/documentation/intents/inintentresolutionresult/needsvalue())

# needsValue() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution indicates that a required parameter value is missing.

## Declaration

```swift
class func needsValue() -> Self
```

<a id="return-value"></a>

## Return Value

A new resolution result object.

<a id="Discussion"></a>

## Discussion

Use this method when a property of the intent object is missing a value that your app requires. When you return a resolution of this type, Siri prompts the user to provide the information and then passes the newly received value back to you for resolution. The cycle of prompting the user and asking you to resolve the parameter continues until you resolve the parameter successfully.

## See Also

### Common Results

- [notRequired()](notrequired%28%29.md): Creates an object whose resolution indicates that you don’t need the value of the parameter.
- [unsupported()](unsupported%28%29.md): Creates an object whose resolution indicates that your app doesn’t support the specified value.

# needsValue (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution indicates that a required parameter value is missing.

## Declaration

```objectivec
+ (instancetype) needsValue;
```

<a id="return-value"></a>

## Return Value

A new resolution result object.

<a id="Discussion"></a>

## Discussion

Use this method when a property of the intent object is missing a value that your app requires. When you return a resolution of this type, Siri prompts the user to provide the information and then passes the newly received value back to you for resolution. The cycle of prompting the user and asking you to resolve the parameter continues until you resolve the parameter successfully.

## See Also

### Common Results

- [confirmationRequiredWithItemToConfirm:forReason:](https://developer.apple.com/documentation/intents/inintentresolutionresult/confirmationrequiredwithitemtoconfirm:forreason:): Creates an object whose resolution indicates that your app requires confirmation of the specified value.
- [unsupportedWithReason:](https://developer.apple.com/documentation/intents/inintentresolutionresult/unsupportedwithreason:): Creates an object whose resolution indicates that your app doesn’t support the specified value.
- [notRequired](notrequired%28%29.md): Creates an object whose resolution indicates that you don’t need the value of the parameter.
- [unsupported](unsupported%28%29.md): Creates an object whose resolution indicates that your app doesn’t support the specified value.
