> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfattributedstringgetlength(_:)](https://developer.apple.com/documentation/corefoundation/cfattributedstringgetlength(_:))

# CFAttributedStringGetLength(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the length of the attributed string in characters.

## Declaration

```swift
func CFAttributedStringGetLength(_ aStr: CFAttributedString!) -> CFIndex
```

## Parameters

- `aStr`: The attributed string to examine.

<a id="return-value"></a>

## Return Value

The length of the attributed string in characters; this is the same as `CFStringGetLength(CFAttributedStringGetString(aStr))`.

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate(\_:\_:\_:)](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy(\_:\_:)](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring(\_:\_:\_:)](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetString(\_:)](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.

# CFAttributedStringGetLength (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the length of the attributed string in characters.

## Declaration

```objectivec
extern CFIndex CFAttributedStringGetLength(CFAttributedStringRef aStr);
```

## Parameters

- `aStr`: The attributed string to examine.

<a id="return-value"></a>

## Return Value

The length of the attributed string in characters; this is the same as `CFStringGetLength(CFAttributedStringGetString(aStr))`.

## See Also

### Creating a CFAttributedString

- [CFAttributedStringCreate](cfattributedstringcreate%28______%29.md): Creates an attributed string with specified string and attributes.
- [CFAttributedStringCreateCopy](cfattributedstringcreatecopy%28____%29.md): Creates an immutable copy of an attributed string.
- [CFAttributedStringCreateWithSubstring](cfattributedstringcreatewithsubstring%28______%29.md): Creates a sub-attributed string from the specified range.
- [CFAttributedStringGetString](cfattributedstringgetstring%28__%29.md): Returns the string for an attributed string.
