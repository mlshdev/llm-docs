> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringfromdirectionaledgeinsets](https://developer.apple.com/documentation/uikit/nsstringfromdirectionaledgeinsets)

# NSStringFromDirectionalEdgeInsets

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a string formatted to contain the data from a directional edge insets structure.

## Declaration

```objectivec
extern NSString *NSStringFromDirectionalEdgeInsets(NSDirectionalEdgeInsets insets);
```

## Parameters

- `insets`: A directional edge insets data structure.

<a id="return-value"></a>

## Return Value

A string that corresponds to insets. See [NSDirectionalEdgeInsetsFromString](nsdirectionaledgeinsetsfromstring.md) for a discussion of the string format.

## See Also

### Converting to and from strings

- [NSDirectionalEdgeInsetsFromString](nsdirectionaledgeinsetsfromstring.md): Returns a directional edge insets structure based on data in the specified string.
