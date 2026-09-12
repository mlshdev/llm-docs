> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringgetattributeandlongesteffectiverange(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringgetattributeandlongesteffectiverange(_:_:_:_:_:))

# CFAttributedStringGetAttributeAndLongestEffectiveRange(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a given attribute of an attributed string at a specified location.

## Declaration

```swift
func CFAttributedStringGetAttributeAndLongestEffectiveRange(_ aStr: CFAttributedString!, _ loc: CFIndex, _ attrName: CFString!, _ inRange: CFRange, _ longestEffectiveRange: UnsafeMutablePointer<CFRange>!) -> CFTypeRef!
```

## Parameters

- `aStr`: The attributed string to examine.
- `loc`: The location in `str` at which to determine the attributes. It is a programming error for `loc` to specify a location outside the bounds of `str`.
- `attrName`: The name of the attribute whose value you want to determine.
- `inRange`: The range in `str` within which you want to find the longest effective range of the attributes at `loc`. `inRange` must not exceed the bounds of `str`.
- `longestEffectiveRange`: If not `NULL`, upon return contains the maximal range within `inRange` over which the exact same set of attributes apply. The returned range is clipped to `inRange`.

<a id="return-value"></a>

## Return Value

A dictionary that contains the attributes of `str` at the specified location. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Accessing Attributes

- [CFAttributedStringGetAttribute(\_:\_:\_:\_:)](cfattributedstringgetattribute%28________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributes(\_:\_:\_:)](cfattributedstringgetattributes%28______%29.md): Returns the attributes of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange(\_:\_:\_:\_:)](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.

# CFAttributedStringGetAttributeAndLongestEffectiveRange (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a given attribute of an attributed string at a specified location.

## Declaration

```objectivec
extern CFTypeRefCFAttributedStringGetAttributeAndLongestEffectiveRange(CFAttributedStringRef aStr, CFIndex loc, CFStringRef attrName, CFRange inRange, CFRange *longestEffectiveRange);
```

## Parameters

- `aStr`: The attributed string to examine.
- `loc`: The location in `str` at which to determine the attributes. It is a programming error for `loc` to specify a location outside the bounds of `str`.
- `attrName`: The name of the attribute whose value you want to determine.
- `inRange`: The range in `str` within which you want to find the longest effective range of the attributes at `loc`. `inRange` must not exceed the bounds of `str`.
- `longestEffectiveRange`: If not `NULL`, upon return contains the maximal range within `inRange` over which the exact same set of attributes apply. The returned range is clipped to `inRange`.

<a id="return-value"></a>

## Return Value

A dictionary that contains the attributes of `str` at the specified location. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Accessing Attributes

- [CFAttributedStringGetAttribute](cfattributedstringgetattribute%28________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributes](cfattributedstringgetattributes%28______%29.md): Returns the attributes of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.
