> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390419-ucdisposetextbreaklocator](https://developer.apple.com/documentation/coreservices/1390419-ucdisposetextbreaklocator)

# UCDisposeTextBreakLocator

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Disposes a text-break locator object.

> Use CFStringTokenizer (for locale-sensitive word, line, paragraph, and sentence breaks) and CFStringGetRangeOfComposedCharactersAtIndex (for cluster breaks) instead.

## Declaration

```objectivec
OSStatus UCDisposeTextBreakLocator(TextBreakLocatorRef *breakRef);
```

## Parameters

- `breakRef`: A reference to a valid text-break locator object. The `UCDisposeTextBreakLocator` function sets `*breakRef` to `NULL`.

<a id="return_value"></a>

## Return Value

A result code.  This function can return `paramErr`, for example, if the `breakRef` parameter is `NULL`.

<a id="discussion"></a>

## Discussion

To find boundaries in Unicode text, you must supply locale and text-break specifications to the function  [UCFindTextBreak](1390429-ucfindtextbreak.md). You provide this information by means of a text-break locator object, created via the function  [UCCreateTextBreakLocator](1390362-uccreatetextbreaklocator.md). When finished with the text-break locator object, you should dispose of it using the function `UCDisposeTextBreakLocator`.

## See Also

### Identifying Unicode Text Boundaries

- [UCCreateTextBreakLocator](1390362-uccreatetextbreaklocator.md): Deprecated. Creates an object encapsulating locale and text-break information, for the purpose of finding boundaries in Unicode text.
- [UCFindTextBreak](1390429-ucfindtextbreak.md): Deprecated. Uses locale-specific text-break information to find boundaries in Unicode text.
