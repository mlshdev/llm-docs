> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanagerdelegate/textcontentmanager(_:shouldenumerate:options:)](https://developer.apple.com/documentation/appkit/nstextcontentmanagerdelegate/textcontentmanager(_:shouldenumerate:options:))

# textContentManager(\_:shouldEnumerate:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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
