> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttypesettersuggestclusterbreak(_:_:_:)](https://developer.apple.com/documentation/coretext/cttypesettersuggestclusterbreak(_:_:_:))

# CTTypesetterSuggestClusterBreak(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Suggests a cluster line breakpoint based on the width provided.

## Declaration

```swift
func CTTypesetterSuggestClusterBreak(_ typesetter: CTTypesetter, _ startIndex: CFIndex, _ width: Double) -> CFIndex
```

## Parameters

- `typesetter`: The typesetter that creates the line. This parameter is required and cannot be set to `NULL`.
- `startIndex`: The starting point for the typographic cluster-break calculations. The break calculations include the character starting at `startIndex`.
- `width`: The requested typographic cluster-break width.

<a id="return-value"></a>

## Return Value

A count of the characters from `startIndex` that would cause the cluster break. The value returned can be used to construct a character range for [CTTypesetterCreateLine(\_:\_:)](cttypesettercreateline%28____%29.md).

<a id="Discussion"></a>

## Discussion

This cluster break is similar to a character break, except that it does not break apart linguistic clusters. No other contextual analysis is done. This can be used by the caller to implement a different line-breaking scheme, such as hyphenation. A typographic cluster break can also be triggered by a hard-break character in the stream. This function is equivalent to [CTTypesetterSuggestClusterBreakWithOffset(\_:\_:\_:\_:)](cttypesettersuggestclusterbreakwithoffset%28________%29.md) with an offset of 0.0.

## See Also

### Breaking Lines

- [CTTypesetterSuggestLineBreak(\_:\_:\_:)](cttypesettersuggestlinebreak%28______%29.md): Suggests a contextual line breakpoint based on the width provided.
- [CTTypesetterSuggestLineBreakWithOffset(\_:\_:\_:\_:)](cttypesettersuggestlinebreakwithoffset%28________%29.md): Suggests a contextual line breakpoint based on the width provided and the specified offset.
- [CTTypesetterSuggestClusterBreakWithOffset(\_:\_:\_:\_:)](cttypesettersuggestclusterbreakwithoffset%28________%29.md): Suggests a cluster line breakpoint based on the specified width and line offset.

# CTTypesetterSuggestClusterBreak (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Suggests a cluster line breakpoint based on the width provided.

## Declaration

```objectivec
extern CFIndex CTTypesetterSuggestClusterBreak(CTTypesetterRef typesetter, CFIndex startIndex, double width);
```

## Parameters

- `typesetter`: The typesetter that creates the line. This parameter is required and cannot be set to `NULL`.
- `startIndex`: The starting point for the typographic cluster-break calculations. The break calculations include the character starting at `startIndex`.
- `width`: The requested typographic cluster-break width.

<a id="return-value"></a>

## Return Value

A count of the characters from `startIndex` that would cause the cluster break. The value returned can be used to construct a character range for [CTTypesetterCreateLine](cttypesettercreateline%28____%29.md).

<a id="Discussion"></a>

## Discussion

This cluster break is similar to a character break, except that it does not break apart linguistic clusters. No other contextual analysis is done. This can be used by the caller to implement a different line-breaking scheme, such as hyphenation. A typographic cluster break can also be triggered by a hard-break character in the stream. This function is equivalent to [CTTypesetterSuggestClusterBreakWithOffset](cttypesettersuggestclusterbreakwithoffset%28________%29.md) with an offset of 0.0.

## See Also

### Breaking Lines

- [CTTypesetterSuggestLineBreak](cttypesettersuggestlinebreak%28______%29.md): Suggests a contextual line breakpoint based on the width provided.
- [CTTypesetterSuggestLineBreakWithOffset](cttypesettersuggestlinebreakwithoffset%28________%29.md): Suggests a contextual line breakpoint based on the width provided and the specified offset.
- [CTTypesetterSuggestClusterBreakWithOffset](cttypesettersuggestclusterbreakwithoffset%28________%29.md): Suggests a cluster line breakpoint based on the specified width and line offset.
