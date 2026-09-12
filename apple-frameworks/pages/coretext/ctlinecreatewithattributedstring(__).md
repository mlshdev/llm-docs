> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinecreatewithattributedstring(_:)](https://developer.apple.com/documentation/coretext/ctlinecreatewithattributedstring(_:))

# CTLineCreateWithAttributedString(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a single immutable line object from an attributed string.

## Declaration

```swift
func CTLineCreateWithAttributedString(_ attrString: CFAttributedString) -> CTLine
```

## Parameters

- `attrString`: The string that creates the line.

<a id="return-value"></a>

## Return Value

A reference to a [CTLine](ctline.md) object.

<a id="Discussion"></a>

## Discussion

This function allows clients to create a line without creating a [CTTypesetter](cttypesetter.md) object. The framework provides a typesetter for single-line typesetting under the hood. Simple elements that don’t require line breaks, such as text labels, can use this API.

## See Also

### Related Documentation

- [CTTypesetterCreateWithAttributedString(\_:)](cttypesettercreatewithattributedstring%28__%29.md): Creates an immutable typesetter object using an attributed string.
- [CTTypesetterCreateWithAttributedStringAndOptions(\_:\_:)](cttypesettercreatewithattributedstringandoptions%28____%29.md): Creates an immutable typesetter object using an attributed string and a dictionary of options.
- [CTTypesetterCreateLine(\_:\_:)](cttypesettercreateline%28____%29.md): Creates an immutable line from the typesetter.

### Creating Lines

- [CTLineCreateTruncatedLine(\_:\_:\_:\_:)](ctlinecreatetruncatedline%28________%29.md): Creates a truncated line from an existing line.
- [CTLineCreateJustifiedLine(\_:\_:\_:)](ctlinecreatejustifiedline%28______%29.md): Creates a justified line from an existing line.

# CTLineCreateWithAttributedString (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a single immutable line object from an attributed string.

## Declaration

```objectivec
extern CTLineRefCTLineCreateWithAttributedString(CFAttributedStringRef attrString);
```

## Parameters

- `attrString`: The string that creates the line.

<a id="return-value"></a>

## Return Value

A reference to a [CTLineRef](ctline.md) object.

<a id="Discussion"></a>

## Discussion

This function allows clients to create a line without creating a [CTTypesetterRef](cttypesetter.md) object. The framework provides a typesetter for single-line typesetting under the hood. Simple elements that don’t require line breaks, such as text labels, can use this API.

## See Also

### Related Documentation

- [CTTypesetterCreateWithAttributedString](cttypesettercreatewithattributedstring%28__%29.md): Creates an immutable typesetter object using an attributed string.
- [CTTypesetterCreateWithAttributedStringAndOptions](cttypesettercreatewithattributedstringandoptions%28____%29.md): Creates an immutable typesetter object using an attributed string and a dictionary of options.
- [CTTypesetterCreateLine](cttypesettercreateline%28____%29.md): Creates an immutable line from the typesetter.

### Creating Lines

- [CTLineCreateTruncatedLine](ctlinecreatetruncatedline%28________%29.md): Creates a truncated line from an existing line.
- [CTLineCreateJustifiedLine](ctlinecreatejustifiedline%28______%29.md): Creates a justified line from an existing line.
