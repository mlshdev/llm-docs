> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct/hascommonparent(with:)](https://developer.apple.com/documentation/foundation/locale/language-swift.struct/hascommonparent(with:))

# hasCommonParent(with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates if the given language shares a common parent with this language.

## Declaration

```swift
func hasCommonParent(with language: Locale.Language) -> Bool
```

## Parameters

- `language`: A language to compare parentage with.

<a id="return-value"></a>

## Return Value

`true` if this language and language share a common parent; `false` otherwise.

## See Also

### Examining language relationships

- [parent](parent.md): The parent language of this language, if available.
- [isEquivalent(to:)](isequivalent%28to_%29.md): Returns a Boolean value that indicates whether this language and another language are equivalent after expanding missing components.
