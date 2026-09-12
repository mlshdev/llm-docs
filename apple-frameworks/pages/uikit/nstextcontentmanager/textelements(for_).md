> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanager/textelements(for:)](https://developer.apple.com/documentation/uikit/nstextcontentmanager/textelements(for:))

# textElements(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
