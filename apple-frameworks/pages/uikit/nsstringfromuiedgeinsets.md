> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringfromuiedgeinsets](https://developer.apple.com/documentation/uikit/nsstringfromuiedgeinsets)

# NSStringFromUIEdgeInsets

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a string formatted to contain the data from an edge insets structure.

## Declaration

```objectivec
extern NSString *NSStringFromUIEdgeInsets(UIEdgeInsets insets);
```

## Parameters

- `insets`: A UIKit edge insets data structure.

<a id="return-value"></a>

## Return Value

A string that corresponds to `insets`. See [UIEdgeInsetsFromString](uiedgeinsetsfromstring.md) for a discussion of the string format.

## See Also

### Converting to and from strings

- [UIEdgeInsetsFromString](uiedgeinsetsfromstring.md): Returns a UIKit edge insets structure based on the data in the specified string.
