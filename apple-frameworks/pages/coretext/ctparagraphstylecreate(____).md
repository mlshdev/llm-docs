> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctparagraphstylecreate(_:_:)](https://developer.apple.com/documentation/coretext/ctparagraphstylecreate(_:_:))

# CTParagraphStyleCreate(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable paragraph style.

## Declaration

```swift
func CTParagraphStyleCreate(_ settings: UnsafePointer<CTParagraphStyleSetting>?, _ settingCount: Int) -> CTParagraphStyle
```

## Parameters

- `settings`: The settings with which to preload the paragraph style. If you want to specify the default set of settings, set this parameter to `NULL`.
- `settingCount`: The number of settings that you have specified in the `settings` parameter. This must be greater than or equal to `0`.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTParagraphStyle object, If the paragraph style creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

Using this function is the easiest and most efficient way to create a paragraph style. Paragraph styles should be kept immutable for totally lock-free operation. If an invalid paragraph style setting specifier is passed into the `settings` parameter, nothing bad will happen, but you will be unable to query for this value. The reason is to allow backward compatibility with style setting specifiers that may be introduced in future versions.

## See Also

### Creating Paragraph Styles

- [CTParagraphStyleCreateCopy(\_:)](ctparagraphstylecreatecopy%28__%29.md): Creates an immutable copy of a paragraph style.

# CTParagraphStyleCreate (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable paragraph style.

## Declaration

```objectivec
extern CTParagraphStyleRefCTParagraphStyleCreate(const CTParagraphStyleSetting *settings, size_t settingCount);
```

## Parameters

- `settings`: The settings with which to preload the paragraph style. If you want to specify the default set of settings, set this parameter to `NULL`.
- `settingCount`: The number of settings that you have specified in the `settings` parameter. This must be greater than or equal to `0`.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTParagraphStyle object, If the paragraph style creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

Using this function is the easiest and most efficient way to create a paragraph style. Paragraph styles should be kept immutable for totally lock-free operation. If an invalid paragraph style setting specifier is passed into the `settings` parameter, nothing bad will happen, but you will be unable to query for this value. The reason is to allow backward compatibility with style setting specifiers that may be introduced in future versions.

## See Also

### Creating Paragraph Styles

- [CTParagraphStyleCreateCopy](ctparagraphstylecreatecopy%28__%29.md): Creates an immutable copy of a paragraph style.
