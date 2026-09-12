> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanagerdelegate/textcontentmanager(_:shouldenumerate:options:)](https://developer.apple.com/documentation/uikit/nstextcontentmanagerdelegate/textcontentmanager(_:shouldenumerate:options:))

# textContentManager(\_:shouldEnumerate:options:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the framework should skip this text element in the enumeration.

## Declaration

```swift
optional func textContentManager(_ textContentManager: NSTextContentManager, shouldEnumerate textElement: NSTextElement, options: NSTextContentManager.EnumerationOptions = []) -> Bool
```

## Parameters

- `textContentManager`: The content manager.
- `textElement`: The [NSTextElement](../nstextelement.md) to evaluate.
- `options`: One of the available `NSTextElementProviderEnumerationOptions` options.

<a id="return-value"></a>

## Return Value

A Boolean value that informs the framework to skip this `textElement`  in the enumeration. Returning `false` indicates `textElement` to be skipped; otherwise the element is included in the enumeration.

# textContentManager:shouldEnumerateTextElement:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the framework should skip this text element in the enumeration.

## Declaration

```objectivec
- (BOOL) textContentManager:(NSTextContentManager *) textContentManager shouldEnumerateTextElement:(NSTextElement *) textElement options:(NSTextContentManagerEnumerationOptions) options;
```

## Parameters

- `textContentManager`: The content manager.
- `textElement`: The [NSTextElement](../nstextelement.md) to evaluate.
- `options`: One of the available `NSTextElementProviderEnumerationOptions` options.

<a id="return-value"></a>

## Return Value

A Boolean value that informs the framework to skip this `textElement`  in the enumeration. Returning `false` indicates `textElement` to be skipped; otherwise the element is included in the enumeration.
