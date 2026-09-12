> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttypesettercreatewithattributedstring(_:)](https://developer.apple.com/documentation/coretext/cttypesettercreatewithattributedstring(_:))

# CTTypesetterCreateWithAttributedString(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable typesetter object using an attributed string.

## Declaration

```swift
func CTTypesetterCreateWithAttributedString(_ string: CFAttributedString) -> CTTypesetter
```

## Parameters

- `string`: The attributed string to typeset. This parameter must be filled in with a valid CFAttributedString object.

<a id="return-value"></a>

## Return Value

A reference to a CTTypesetter object if the call was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

The resultant typesetter can be used to create lines, perform line breaking, and do other contextual analysis based on the characters in the string.

## See Also

### Creating a Typesetter

- [CTTypesetterCreateWithAttributedStringAndOptions(\_:\_:)](cttypesettercreatewithattributedstringandoptions%28____%29.md): Creates an immutable typesetter object using an attributed string and a dictionary of options.

# CTTypesetterCreateWithAttributedString (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable typesetter object using an attributed string.

## Declaration

```objectivec
extern CTTypesetterRefCTTypesetterCreateWithAttributedString(CFAttributedStringRef string);
```

## Parameters

- `string`: The attributed string to typeset. This parameter must be filled in with a valid CFAttributedString object.

<a id="return-value"></a>

## Return Value

A reference to a CTTypesetter object if the call was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

The resultant typesetter can be used to create lines, perform line breaking, and do other contextual analysis based on the characters in the string.

## See Also

### Creating a Typesetter

- [CTTypesetterCreateWithAttributedStringAndOptions](cttypesettercreatewithattributedstringandoptions%28____%29.md): Creates an immutable typesetter object using an attributed string and a dictionary of options.
