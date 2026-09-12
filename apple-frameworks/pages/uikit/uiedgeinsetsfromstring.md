> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiedgeinsetsfromstring](https://developer.apple.com/documentation/uikit/uiedgeinsetsfromstring)

# UIEdgeInsetsFromString

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a UIKit edge insets structure based on the data in the specified string.

## Declaration

```objectivec
extern UIEdgeInsets UIEdgeInsetsFromString(NSString *string);
```

## Parameters

- `string`: A string whose contents are of the form “{*top*, *left*, *bottom*, *right*}”, where *top*, *left*, *bottom*, *right* are the floating-point component values of the [UIEdgeInsets](uiedgeinsets.md) structure. An example of a valid string is @”{3.0,8.0,3.0,5.0}”. The string is not localized, so items are always separated with a comma.

<a id="return-value"></a>

## Return Value

An edge insets data structure. If the string is not well-formed, the function returns [UIEdgeInsetsZero](uiedgeinsets/zero.md).

<a id="Discussion"></a>

## Discussion

In general, you should use this function only to convert strings that were previously created using the [NSStringFromUIEdgeInsets](nsstringfromuiedgeinsets.md) function.

## See Also

### Converting to and from strings

- [NSStringFromUIEdgeInsets](nsstringfromuiedgeinsets.md): Returns a string formatted to contain the data from an edge insets structure.
