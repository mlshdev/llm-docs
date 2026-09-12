> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringgetattributes(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringgetattributes(_:_:_:))

# CFAttributedStringGetAttributes(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the attributes of an attributed string at a specified location.

## Declaration

```swift
func CFAttributedStringGetAttributes(_ aStr: CFAttributedString!, _ loc: CFIndex, _ effectiveRange: UnsafeMutablePointer<CFRange>!) -> CFDictionary!
```

## Parameters

- `aStr`: The attributed string to examine.
- `loc`: The location in `str` at which to determine the attributes. `loc` must not exceed the bounds of `str`.
- `effectiveRange`: If not `NULL`, upon return contains a range including `loc` over which exactly the same set of attributes apply as at `loc`.

<a id="return-value"></a>

## Return Value

A dictionary that contains the attributes of `str` at the specified location. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For performance reasons, a range returned in `effectiveRange` is not necessarily the maximal range. If you need the maximum range, you should use [CFAttributedStringGetAttributesAndLongestEffectiveRange(\_:\_:\_:\_:)](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md).

Note that the returned attribute dictionary might change in unpredictable ways if the attributed string is edited after this call. If you want to preserve the state of the dictionary, you should make an actual copy of it rather than just retaining it. In addition, you should make no assumptions about the relationship of the actual dictionary returned by this call and the dictionary originally used to set the attributes, other than the fact that the values stored in the dictionaries will be identical (that is, `==`) to those originally specified.

## See Also

### Accessing Attributes

- [CFAttributedStringGetAttribute(\_:\_:\_:\_:)](cfattributedstringgetattribute%28________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributeAndLongestEffectiveRange(\_:\_:\_:\_:\_:)](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange(\_:\_:\_:\_:)](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.

# CFAttributedStringGetAttributes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the attributes of an attributed string at a specified location.

## Declaration

```objectivec
extern CFDictionaryRefCFAttributedStringGetAttributes(CFAttributedStringRef aStr, CFIndex loc, CFRange *effectiveRange);
```

## Parameters

- `aStr`: The attributed string to examine.
- `loc`: The location in `str` at which to determine the attributes. `loc` must not exceed the bounds of `str`.
- `effectiveRange`: If not `NULL`, upon return contains a range including `loc` over which exactly the same set of attributes apply as at `loc`.

<a id="return-value"></a>

## Return Value

A dictionary that contains the attributes of `str` at the specified location. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For performance reasons, a range returned in `effectiveRange` is not necessarily the maximal range. If you need the maximum range, you should use [CFAttributedStringGetAttributesAndLongestEffectiveRange](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md).

Note that the returned attribute dictionary might change in unpredictable ways if the attributed string is edited after this call. If you want to preserve the state of the dictionary, you should make an actual copy of it rather than just retaining it. In addition, you should make no assumptions about the relationship of the actual dictionary returned by this call and the dictionary originally used to set the attributes, other than the fact that the values stored in the dictionaries will be identical (that is, `==`) to those originally specified.

## See Also

### Accessing Attributes

- [CFAttributedStringGetAttribute](cfattributedstringgetattribute%28________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributeAndLongestEffectiveRange](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.
