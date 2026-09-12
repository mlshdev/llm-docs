> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/textelements(for:)](https://developer.apple.com/documentation/appkit/nstextcontentmanager/textelements(for:))

# textElements(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an array of text elements that intersect with the range you specify.

## Declaration

```swift
func textElements(for range: NSTextRange) -> [NSTextElement]
```

## Parameters

- `range`: An [NSTextRange](../nstextrange.md) that describes the range of text to process.

<a id="return-value"></a>

## Return Value

An array of [NSTextElement](../nstextelement.md).

<a id="Discussion"></a>

## Discussion

This method can return a set of elements that don’t fill the entire range if the entire range isn’t synchronously available. Uses [enumerateTextElements(from:options:using:)](../nstextelementprovider/enumeratetextelements%28from_options_using_%29.md) to fill the array.

# textElementsForRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an array of text elements that intersect with the range you specify.

## Declaration

```objectivec
- (NSArray<NSTextElement *> *) textElementsForRange:(NSTextRange *) range;
```

## Parameters

- `range`: An [NSTextRange](../nstextrange.md) that describes the range of text to process.

<a id="return-value"></a>

## Return Value

An array of [NSTextElement](../nstextelement.md).

<a id="Discussion"></a>

## Discussion

This method can return a set of elements that don’t fill the entire range if the entire range isn’t synchronously available. Uses [enumerateTextElementsFromLocation:options:usingBlock:](../nstextelementprovider/enumeratetextelements%28from_options_using_%29.md) to fill the array.
