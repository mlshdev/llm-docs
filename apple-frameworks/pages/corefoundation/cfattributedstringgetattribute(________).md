> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringgetattribute(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringgetattribute(_:_:_:_:))

# CFAttributedStringGetAttribute(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a given attribute of an attributed string at a specified location.

## Declaration

```swift
func CFAttributedStringGetAttribute(_ aStr: CFAttributedString!, _ loc: CFIndex, _ attrName: CFString!, _ effectiveRange: UnsafeMutablePointer<CFRange>!) -> CFTypeRef!
```

## Parameters

- `aStr`: The attributed string to examine.
- `loc`: The location in `str` at which to determine the attributes. `loc` must not exceed the bounds of `str`.
- `attrName`: The name of the attribute whose value you want to determine.
- `effectiveRange`: If not `NULL`, upon return contains a range including `loc` over which exactly the same set of attributes apply as at `loc`.

<a id="return-value"></a>

## Return Value

The value of the specified attribute at the specified location in `str`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For performance reasons, a range returned in `effectiveRange` is not necessarily the maximal range. If you need the maximum range, you should use [CFAttributedStringGetAttributeAndLongestEffectiveRange(\_:\_:\_:\_:\_:)](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md).

## See Also

### Accessing Attributes

- [CFAttributedStringGetAttributes(\_:\_:\_:)](cfattributedstringgetattributes%28______%29.md): Returns the attributes of an attributed string at a specified location.
- [CFAttributedStringGetAttributeAndLongestEffectiveRange(\_:\_:\_:\_:\_:)](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange(\_:\_:\_:\_:)](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.

# CFAttributedStringGetAttribute (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a given attribute of an attributed string at a specified location.

## Declaration

```objectivec
extern CFTypeRefCFAttributedStringGetAttribute(CFAttributedStringRef aStr, CFIndex loc, CFStringRef attrName, CFRange *effectiveRange);
```

## Parameters

- `aStr`: The attributed string to examine.
- `loc`: The location in `str` at which to determine the attributes. `loc` must not exceed the bounds of `str`.
- `attrName`: The name of the attribute whose value you want to determine.
- `effectiveRange`: If not `NULL`, upon return contains a range including `loc` over which exactly the same set of attributes apply as at `loc`.

<a id="return-value"></a>

## Return Value

The value of the specified attribute at the specified location in `str`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

For performance reasons, a range returned in `effectiveRange` is not necessarily the maximal range. If you need the maximum range, you should use [CFAttributedStringGetAttributeAndLongestEffectiveRange](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md).

## See Also

### Accessing Attributes

- [CFAttributedStringGetAttributes](cfattributedstringgetattributes%28______%29.md): Returns the attributes of an attributed string at a specified location.
- [CFAttributedStringGetAttributeAndLongestEffectiveRange](cfattributedstringgetattributeandlongesteffectiverange%28__________%29.md): Returns the value of a given attribute of an attributed string at a specified location.
- [CFAttributedStringGetAttributesAndLongestEffectiveRange](cfattributedstringgetattributesandlongesteffectiverange%28________%29.md): Returns the attributes of an attributed string at a specified location.
