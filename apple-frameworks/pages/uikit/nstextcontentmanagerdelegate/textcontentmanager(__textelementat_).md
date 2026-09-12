> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanagerdelegate/textcontentmanager(_:textelementat:)](https://developer.apple.com/documentation/uikit/nstextcontentmanagerdelegate/textcontentmanager(_:textelementat:))

# textContentManager(\_:textElementAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to return the text element at a specific location.

## Declaration

```swift
optional func textContentManager(_ textContentManager: NSTextContentManager, textElementAt location: any NSTextLocation) -> NSTextElement?
```

## Parameters

- `textContentManager`: The content manager.
- `location`: The location of the element.

<a id="return-value"></a>

## Return Value

An [NSTextElement](../nstextelement.md).

<a id="Discussion"></a>

## Discussion

When non-`nil`, `textContentManager` uses the text element you specify instead of creating one based on its standard mapping logic.

# textContentManager:textElementAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to return the text element at a specific location.

## Declaration

```objectivec
- (NSTextElement *) textContentManager:(NSTextContentManager *) textContentManager textElementAtLocation:(id<NSTextLocation>) location;
```

## Parameters

- `textContentManager`: The content manager.
- `location`: The location of the element.

<a id="return-value"></a>

## Return Value

An [NSTextElement](../nstextelement.md).

<a id="Discussion"></a>

## Discussion

When non-`nil`, `textContentManager` uses the text element you specify instead of creating one based on its standard mapping logic.
