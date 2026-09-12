> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanagerdelegate/textcontentmanager(_:textelementat:)](https://developer.apple.com/documentation/appkit/nstextcontentmanagerdelegate/textcontentmanager(_:textelementat:))

# textContentManager(\_:textElementAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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
