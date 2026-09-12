> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctparagraphstylecreatecopy(_:)](https://developer.apple.com/documentation/coretext/ctparagraphstylecreatecopy(_:))

# CTParagraphStyleCreateCopy(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable copy of a paragraph style.

## Declaration

```swift
func CTParagraphStyleCreateCopy(_ paragraphStyle: CTParagraphStyle) -> CTParagraphStyle
```

## Parameters

- `paragraphStyle`: The style to copy. This parameter may not be `NULL`.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTParagraphStyle object that is a copy of the one passed into `paragraphStyle`, If the `paragraphStyle` reference is valid; otherwise `NULL`, if any error occurred, including being supplied with an invalid reference.

## See Also

### Creating Paragraph Styles

- [CTParagraphStyleCreate(\_:\_:)](ctparagraphstylecreate%28____%29.md): Creates an immutable paragraph style.

# CTParagraphStyleCreateCopy (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable copy of a paragraph style.

## Declaration

```objectivec
extern CTParagraphStyleRefCTParagraphStyleCreateCopy(CTParagraphStyleRef paragraphStyle);
```

## Parameters

- `paragraphStyle`: The style to copy. This parameter may not be `NULL`.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTParagraphStyle object that is a copy of the one passed into `paragraphStyle`, If the `paragraphStyle` reference is valid; otherwise `NULL`, if any error occurred, including being supplied with an invalid reference.

## See Also

### Creating Paragraph Styles

- [CTParagraphStyleCreate](ctparagraphstylecreate%28____%29.md): Creates an immutable paragraph style.
