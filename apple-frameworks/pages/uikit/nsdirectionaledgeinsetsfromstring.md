> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdirectionaledgeinsetsfromstring](https://developer.apple.com/documentation/uikit/nsdirectionaledgeinsetsfromstring)

# NSDirectionalEdgeInsetsFromString

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a directional edge insets structure based on data in the specified string.

## Declaration

```objectivec
extern NSDirectionalEdgeInsets NSDirectionalEdgeInsetsFromString(NSString *string);
```

## Parameters

- `string`: A string whose contents are of the form “{top, leading, bottom, trailing}”, where top, leading, bottom, trailing are the floating-point component values of the [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md) structure. An example of a valid string is “`{3.0,8.0,3.0,5.0}`”. The string is not localized, so items are always separated with a comma.

<a id="return-value"></a>

## Return Value

A directional edge insets data structure. If the string is not well-formed, the function returns [NSDirectionalEdgeInsetsZero](nsdirectionaledgeinsets/zero.md).

## See Also

### Converting to and from strings

- [NSStringFromDirectionalEdgeInsets](nsstringfromdirectionaledgeinsets.md): Returns a string formatted to contain the data from a directional edge insets structure.
