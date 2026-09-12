> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uioffsetfromstring](https://developer.apple.com/documentation/uikit/uioffsetfromstring)

# UIOffsetFromString

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a UIKit offset structure corresponding to the data in a given string.

## Declaration

```objectivec
extern UIOffset UIOffsetFromString(NSString *string);
```

## Parameters

- `string`: A string containing a representation of an offset.

<a id="return-value"></a>

## Return Value

An edge insets data structure. If the string is not well-formed, the function returns [UIOffsetZero](uioffset/zero.md).

<a id="Discussion"></a>

## Discussion

In general, you should use this function only to convert strings that were previously created using the [NSStringFromUIOffset](nsstringfromuioffset.md) function.

## See Also

### Converting to and from strings

- [NSStringFromUIOffset](nsstringfromuioffset.md): Returns a string formatted to contain the data from an offset structure.
