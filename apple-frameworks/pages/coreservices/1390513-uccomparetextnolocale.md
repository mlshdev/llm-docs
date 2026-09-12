> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390513-uccomparetextnolocale](https://developer.apple.com/documentation/coreservices/1390513-uccomparetextnolocale)

# UCCompareTextNoLocale(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Uses a fixed, locale-insensitive order to compare Unicode strings.

## Declaration

```swift
func UCCompareTextNoLocale(_ options: UCCollateOptions, _ text1Ptr: UnsafePointer<UniChar>!, _ text1Length: Int, _ text2Ptr: UnsafePointer<UniChar>!, _ text2Length: Int, _ equivalent: UnsafeMutablePointer<DarwinBoolean>!, _ order: UnsafeMutablePointer<Int32>!) -> OSStatus
```

## Parameters

- `options`: A `UCCollateOptions` value specifying the fixed ordering scheme to use for the string comparison. This value must be nonzero. Bits 24-31 of `UCCollateOptionsValue` specify which fixed ordering scheme to use. Currently there is only scheme—`kUCCollateTypeHFSExtended`. See [Fixed Ordering Scheme](carbon_core/unicode_utilities/1390361-fixed_ordering_scheme.md) for additional details.
- `text1Ptr`: A pointer to the first Unicode string (a `UniChar` array) to compare.
- `text1Length`: The total count of Unicode characters in the first string being compared.
- `text2Ptr`: A pointer to the second Unicode string to compare.
- `text2Length`: The total count of Unicode characters in the second string being compared.
- `equivalent`: A pointer to a `Boolean` value or pass `NULL`. On return, `UCCompareTextNoLocale` produces a value of `true` if the strings are equivalent for the ordering scheme you have specified. If you wish simply to sort a list of strings in order, using the specified ordering scheme, you can pass `NULL` for the `equivalent` parameter and only use the `order` parameter’s result. In this case, all available comparison criteria are used to put the strings in a deterministic order, even if they are considered “equivalent” for the specified ordering scheme. Note that you can set either the `equivalent` or the `order` parameters to `NULL`, but not both.
- `order`: A pointer to a signed, 32-bit integer value, or pass `NULL`. If you wish simply to test the strings for equivalence, using the specified ordering scheme (which can be much faster than determining ordering), you can pass `NULL` for the `order` parameter and only use the `equivalent` parameter’s result. (Note that either the `equivalent` or the `order` parameters may be `NULL`, but not both.

<a id="return_value"></a>

## Return Value

A result code. This function can return `paramErr` if you pass an invalid value for one of the parameters. For example, if you pass `0` for the `options` paramter, the function returns `paramErr`.

<a id="discussion"></a>

## Discussion

You can call the `UCCompareTextNoLocale` function when you want to perform a fixed, locale-insensitive comparison that is guaranteed not to change from one system release to the next. This type of comparison could be used for sorting a Unicode key string in a database, for example. The `UCCompareTextNoLocale` function can provide comparison according to various fixed ordering schemes (only one is supported for Mac OS 8.6 and 9.0). This type of comparison is not usually used for a user-visible ordering, so the ordering schemes need not match any user’s expectation of a sensible collation order.

The `UCCompareTextNoLocale` function does not require a collator object or collation keys. Another advantage of `UCCompareTextNoLocale` on Mac OS 9 is that it is exported from the `UnicodeUtilitiesCoreLib` library, which does not depend on other libraries (the other comparison functions exported from `UnicodeUtilitiesLib`, which depends on `LocalesLib` and `TextCommon`).

## See Also

### Comparing Unicode Strings

- [UCCreateCollator(\_:\_:\_:\_:)](1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText(\_:\_:\_:\_:\_:\_:\_:)](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey(\_:\_:\_:\_:\_:\_:)](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys(\_:\_:\_:\_:\_:\_:)](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator(\_:)](1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextDefault(\_:\_:\_:\_:\_:\_:\_:)](1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.

# UCCompareTextNoLocale (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Uses a fixed, locale-insensitive order to compare Unicode strings.

## Declaration

```objectivec
OSStatus UCCompareTextNoLocale(UCCollateOptions options, const UniChar *text1Ptr, UniCharCount text1Length, const UniChar *text2Ptr, UniCharCount text2Length, Boolean *equivalent, SInt32 *order);
```

## Parameters

- `options`: A `UCCollateOptions` value specifying the fixed ordering scheme to use for the string comparison. This value must be nonzero. Bits 24-31 of `UCCollateOptionsValue` specify which fixed ordering scheme to use. Currently there is only scheme—`kUCCollateTypeHFSExtended`. See [Fixed Ordering Scheme](1390361-fixed_ordering_scheme.md) for additional details.
- `text1Ptr`: A pointer to the first Unicode string (a `UniChar` array) to compare.
- `text1Length`: The total count of Unicode characters in the first string being compared.
- `text2Ptr`: A pointer to the second Unicode string to compare.
- `text2Length`: The total count of Unicode characters in the second string being compared.
- `equivalent`: A pointer to a `Boolean` value or pass `NULL`. On return, `UCCompareTextNoLocale` produces a value of `true` if the strings are equivalent for the ordering scheme you have specified. If you wish simply to sort a list of strings in order, using the specified ordering scheme, you can pass `NULL` for the `equivalent` parameter and only use the `order` parameter’s result. In this case, all available comparison criteria are used to put the strings in a deterministic order, even if they are considered “equivalent” for the specified ordering scheme. Note that you can set either the `equivalent` or the `order` parameters to `NULL`, but not both.
- `order`: A pointer to a signed, 32-bit integer value, or pass `NULL`. If you wish simply to test the strings for equivalence, using the specified ordering scheme (which can be much faster than determining ordering), you can pass `NULL` for the `order` parameter and only use the `equivalent` parameter’s result. (Note that either the `equivalent` or the `order` parameters may be `NULL`, but not both.

<a id="return_value"></a>

## Return Value

A result code. This function can return `paramErr` if you pass an invalid value for one of the parameters. For example, if you pass `0` for the `options` paramter, the function returns `paramErr`.

<a id="discussion"></a>

## Discussion

You can call the `UCCompareTextNoLocale` function when you want to perform a fixed, locale-insensitive comparison that is guaranteed not to change from one system release to the next. This type of comparison could be used for sorting a Unicode key string in a database, for example. The `UCCompareTextNoLocale` function can provide comparison according to various fixed ordering schemes (only one is supported for Mac OS 8.6 and 9.0). This type of comparison is not usually used for a user-visible ordering, so the ordering schemes need not match any user’s expectation of a sensible collation order.

The `UCCompareTextNoLocale` function does not require a collator object or collation keys. Another advantage of `UCCompareTextNoLocale` on Mac OS 9 is that it is exported from the `UnicodeUtilitiesCoreLib` library, which does not depend on other libraries (the other comparison functions exported from `UnicodeUtilitiesLib`, which depends on `LocalesLib` and `TextCommon`).

## See Also

### Comparing Unicode Strings

- [UCCreateCollator](1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator](1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextDefault](1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.
