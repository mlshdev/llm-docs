> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcategoricaldataaxisdescriptor/categoryorder](https://developer.apple.com/documentation/accessibility/axcategoricaldataaxisdescriptor/categoryorder)

# categoryOrder (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A list of every category value for the axis in the order they appear visually in the graph or legend.

## Declaration

```swift
var categoryOrder: [String] { get set }
```

<a id="discussion"></a>

## Discussion

If your categorical axis represents, for example, blood type data, and the legend lists *AB*, *A*, *B*, *O* in that order, provide an array that contains the strings `"AB"`, `"A"`, `"B"`, and `"O"` in the same order.

# categoryOrder (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A list of every category value for the axis in the order they appear visually in the graph or legend.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * categoryOrder;
```

<a id="discussion"></a>

## Discussion

If your categorical axis represents, for example, blood type data, and the legend lists *AB*, *A*, *B*, *O* in that order, provide an array that contains the strings `"AB"`, `"A"`, `"B"`, and `"O"` in the same order.
