> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390435-ucdisposecollator](https://developer.apple.com/documentation/coreservices/1390435-ucdisposecollator)

# UCDisposeCollator(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Disposes a collator object.

## Declaration

```swift
func UCDisposeCollator(_ collatorRef: UnsafeMutablePointer<CollatorRef?>!) -> OSStatus
```

## Parameters

- `collatorRef`: A reference to a valid collator object. The `UCDisposeCollator` function sets `*collatorRef` to `NULL`.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

To perform Unicode string comparison, you must supply locale and collation specifications to a collation function such as  [UCCompareText(\_:\_:\_:\_:\_:\_:\_:)](1390642-uccomparetext.md). You provide this information by means of a collator object, created via the function  [UCCreateCollator(\_:\_:\_:\_:)](1390403-uccreatecollator.md). When finished with the collator object, you should dispose of it using the function `UCDisposeCollator`.

## See Also

### Comparing Unicode Strings

- [UCCreateCollator(\_:\_:\_:\_:)](1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText(\_:\_:\_:\_:\_:\_:\_:)](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey(\_:\_:\_:\_:\_:\_:)](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys(\_:\_:\_:\_:\_:\_:)](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCCompareTextDefault(\_:\_:\_:\_:\_:\_:\_:)](1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.
- [UCCompareTextNoLocale(\_:\_:\_:\_:\_:\_:\_:)](1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.

# UCDisposeCollator (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Disposes a collator object.

## Declaration

```objectivec
OSStatus UCDisposeCollator(CollatorRef *collatorRef);
```

## Parameters

- `collatorRef`: A reference to a valid collator object. The `UCDisposeCollator` function sets `*collatorRef` to `NULL`.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

To perform Unicode string comparison, you must supply locale and collation specifications to a collation function such as  [UCCompareText](1390642-uccomparetext.md). You provide this information by means of a collator object, created via the function  [UCCreateCollator](1390403-uccreatecollator.md). When finished with the collator object, you should dispose of it using the function `UCDisposeCollator`.

## See Also

### Comparing Unicode Strings

- [UCCreateCollator](1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCCompareTextDefault](1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.
- [UCCompareTextNoLocale](1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.
