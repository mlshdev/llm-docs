> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inurlresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inurlresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with urlsToDisambiguate: [URL]) -> Self
```

## Parameters

- `urlsToDisambiguate`: An array of [NSURL](../../foundation/nsurl.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INURLResolutionResult](../inurlresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one URL matches the given information and you can’t pick one definitively. Ask the user to select from among the notes that you specify.

For each [NSURL](../../foundation/nsurl.md) object that you provide, include enough information to be able to locate the URL again later. When the user selects one of the URLs, SiriKit puts the details from your [NSURL](../../foundation/nsurl.md) object into the intent and asks you to resolve the intent again.

## See Also

### Creating a Resolution Result

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithURLsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithURLsToDisambiguate:(NSArray<NSURL *> *) urlsToDisambiguate;
```

## Parameters

- `urlsToDisambiguate`: An array of [NSURL](../../foundation/nsurl.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INURLResolutionResult](../inurlresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one URL matches the given information and you can’t pick one definitively. Ask the user to select from among the notes that you specify.

For each [NSURL](../../foundation/nsurl.md) object that you provide, include enough information to be able to locate the URL again later. When the user selects one of the URLs, SiriKit puts the details from your [NSURL](../../foundation/nsurl.md) object into the intent and asks you to resolve the intent again.

## See Also

### Creating a Resolution Result

- [successWithResolvedURL:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithURLToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
