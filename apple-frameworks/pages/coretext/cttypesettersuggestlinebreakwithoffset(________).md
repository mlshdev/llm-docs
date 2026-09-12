> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttypesettersuggestlinebreakwithoffset(_:_:_:_:)](https://developer.apple.com/documentation/coretext/cttypesettersuggestlinebreakwithoffset(_:_:_:_:))

# CTTypesetterSuggestLineBreakWithOffset(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Suggests a contextual line breakpoint based on the width provided and the specified offset.

## Declaration

```swift
func CTTypesetterSuggestLineBreakWithOffset(_ typesetter: CTTypesetter, _ startIndex: CFIndex, _ width: Double, _ offset: Double) -> CFIndex
```

## Parameters

- `typesetter`: The typesetter that creates the line. This parameter is required and cannot be set to `NULL`.
- `startIndex`: The starting point for the line-break calculations. The break calculations include the character starting at `startIndex`.
- `width`: The requested line-break width.
- `offset`: The line position offset.

<a id="return-value"></a>

## Return Value

A count of the characters from `startIndex` and `offset` that would cause the line break. The value returned can be used to construct a character range for [CTTypesetterCreateLine(\_:\_:)](cttypesettercreateline%28____%29.md).

<a id="Discussion"></a>

## Discussion

The line break can be triggered either by a hard-break character in the stream or by filling the specified width with characters.

## See Also

### Breaking Lines

- [CTTypesetterSuggestLineBreak(\_:\_:\_:)](cttypesettersuggestlinebreak%28______%29.md): Suggests a contextual line breakpoint based on the width provided.
- [CTTypesetterSuggestClusterBreak(\_:\_:\_:)](cttypesettersuggestclusterbreak%28______%29.md): Suggests a cluster line breakpoint based on the width provided.
- [CTTypesetterSuggestClusterBreakWithOffset(\_:\_:\_:\_:)](cttypesettersuggestclusterbreakwithoffset%28________%29.md): Suggests a cluster line breakpoint based on the specified width and line offset.

# CTTypesetterSuggestLineBreakWithOffset (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Suggests a contextual line breakpoint based on the width provided and the specified offset.

## Declaration

```objectivec
extern CFIndex CTTypesetterSuggestLineBreakWithOffset(CTTypesetterRef typesetter, CFIndex startIndex, double width, double offset);
```

## Parameters

- `typesetter`: The typesetter that creates the line. This parameter is required and cannot be set to `NULL`.
- `startIndex`: The starting point for the line-break calculations. The break calculations include the character starting at `startIndex`.
- `width`: The requested line-break width.
- `offset`: The line position offset.

<a id="return-value"></a>

## Return Value

A count of the characters from `startIndex` and `offset` that would cause the line break. The value returned can be used to construct a character range for [CTTypesetterCreateLine](cttypesettercreateline%28____%29.md).

<a id="Discussion"></a>

## Discussion

The line break can be triggered either by a hard-break character in the stream or by filling the specified width with characters.

## See Also

### Breaking Lines

- [CTTypesetterSuggestLineBreak](cttypesettersuggestlinebreak%28______%29.md): Suggests a contextual line breakpoint based on the width provided.
- [CTTypesetterSuggestClusterBreak](cttypesettersuggestclusterbreak%28______%29.md): Suggests a cluster line breakpoint based on the width provided.
- [CTTypesetterSuggestClusterBreakWithOffset](cttypesettersuggestclusterbreakwithoffset%28________%29.md): Suggests a cluster line breakpoint based on the specified width and line offset.
