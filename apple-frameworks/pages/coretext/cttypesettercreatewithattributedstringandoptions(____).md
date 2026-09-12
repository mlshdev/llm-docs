> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttypesettercreatewithattributedstringandoptions(_:_:)](https://developer.apple.com/documentation/coretext/cttypesettercreatewithattributedstringandoptions(_:_:))

# CTTypesetterCreateWithAttributedStringAndOptions(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable typesetter object using an attributed string and a dictionary of options.

## Declaration

```swift
func CTTypesetterCreateWithAttributedStringAndOptions(_ string: CFAttributedString, _ options: CFDictionary?) -> CTTypesetter?
```

## Parameters

- `string`: The attributed string to typeset. This parameter must be a valid `CFAttributedString` object.
- `options`: A dictionary of typesetter options, or `NULL` if there are none.

<a id="return-value"></a>

## Return Value

A reference to a typesetter object if the call is successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

Use the typesetter to create lines, perform line breaking, and do other contextual analysis according to the characters in the string.

> **Important**

>  By default, this function returns `NULL` if the string requires unreasonable effort to typeset. To create a typesetter that always typesets the text, regardless of the amount of effort, set the [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md) option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).

## See Also

### Creating a Typesetter

- [CTTypesetterCreateWithAttributedString(\_:)](cttypesettercreatewithattributedstring%28__%29.md): Creates an immutable typesetter object using an attributed string.

# CTTypesetterCreateWithAttributedStringAndOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable typesetter object using an attributed string and a dictionary of options.

## Declaration

```objectivec
extern CTTypesetterRefCTTypesetterCreateWithAttributedStringAndOptions(CFAttributedStringRef string, CFDictionaryRef options);
```

## Parameters

- `string`: The attributed string to typeset. This parameter must be a valid `CFAttributedString` object.
- `options`: A dictionary of typesetter options, or `NULL` if there are none.

<a id="return-value"></a>

## Return Value

A reference to a typesetter object if the call is successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

Use the typesetter to create lines, perform line breaking, and do other contextual analysis according to the characters in the string.

> **Important**

>  By default, this function returns `NULL` if the string requires unreasonable effort to typeset. To create a typesetter that always typesets the text, regardless of the amount of effort, set the [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md) option to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md).

## See Also

### Creating a Typesetter

- [CTTypesetterCreateWithAttributedString](cttypesettercreatewithattributedstring%28__%29.md): Creates an immutable typesetter object using an attributed string.
