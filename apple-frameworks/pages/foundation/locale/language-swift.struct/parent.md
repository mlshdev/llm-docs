> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct/parent](https://developer.apple.com/documentation/foundation/locale/language-swift.struct/parent)

# parent

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The parent language of this language, if available.

## Declaration

```swift
var parent: Locale.Language? { get }
```

<a id="Discussion"></a>

## Discussion

For example, the parent language of `en_US_POSIX` is `en_US`.

If the system can’t determine a parent language, this value is `nil`.

## See Also

### Examining language relationships

- [hasCommonParent(with:)](hascommonparent%28with_%29.md): Returns a Boolean value that indicates if the given language shares a common parent with this language.
- [isEquivalent(to:)](isequivalent%28to_%29.md): Returns a Boolean value that indicates whether this language and another language are equivalent after expanding missing components.
