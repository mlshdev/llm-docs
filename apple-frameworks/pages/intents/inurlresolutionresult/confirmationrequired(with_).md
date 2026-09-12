> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inurlresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inurlresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with urlToConfirm: URL?) -> Self
```

## Parameters

- `urlToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INURLResolutionResult](../inurlresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a destination type that’s similar to, but not equal to, the one specified in the intent. Don’t use this method to resolve date types that your app doesn’t support.

## See Also

### Creating a Resolution Result

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithURLToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithURLToConfirm:(NSURL *) urlToConfirm;
```

## Parameters

- `urlToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INURLResolutionResult](../inurlresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a destination type that’s similar to, but not equal to, the one specified in the intent. Don’t use this method to resolve date types that your app doesn’t support.

## See Also

### Creating a Resolution Result

- [successWithResolvedURL:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithURLsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
