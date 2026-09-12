> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390472-uccomparetextdefault](https://developer.apple.com/documentation/coreservices/1390472-uccomparetextdefault)

# UCCompareTextDefault(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Uses the default system locale to compare Unicode strings.

## Declaration

```swift
func UCCompareTextDefault(_ options: UCCollateOptions, _ text1Ptr: UnsafePointer<UniChar>!, _ text1Length: Int, _ text2Ptr: UnsafePointer<UniChar>!, _ text2Length: Int, _ equivalent: UnsafeMutablePointer<DarwinBoolean>!, _ order: UnsafeMutablePointer<Int32>!) -> OSStatus
```

## Parameters

- `options`: A `UCCollateOptions` value specifying any collation options for the string comparison.
- `text1Ptr`: A pointer to the first Unicode string (a `UniChar` array) to compare.
- `text1Length`: The total count of Unicode characters in the first string being compared.
- `text2Ptr`: A pointer to the second Unicode string to compare.
- `text2Length`: The total count of Unicode characters in the second string being compared.
- `equivalent`: A pointer to a `Boolean` value or pass `NULL`. On return, `UCCompareTextDefault` produces a value of `true` if the strings are equivalent for the options you have specified. If you wish simply to sort a list of strings in order, using your specified options, you can pass `NULL` for the `equivalent` parameter and only use the `order` parameter’s result. In this case, all available comparison criteria are used to put the strings in a deterministic order, even if they are considered “equivalent” for the options you have specified. Note that you can set either the `equivalent` or the `order` parameters to `NULL`, but not both.
- `order`: A pointer to a signed, 32-bit integer value, or pass `NULL`. If you wish simply to test the strings for equivalence, using your specified options (which can be much faster than determining ordering), you can pass `NULL` for the `order` parameter and only use the `equivalent` parameter’s result. (Note that either the `equivalent` or the `order` parameters may be `NULL`, but not both.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

You can call the `UCCompareTextDefault` function when you want to use a simple collation function that requires minimum setup. This function uses the system default collation order (that is, the collation order for a `LocaleRef` of `NULL` and a variant of 0), and it does not require a collator object or collation keys.

## See Also

### Comparing Unicode Strings

- [UCCreateCollator(\_:\_:\_:\_:)](1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText(\_:\_:\_:\_:\_:\_:\_:)](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey(\_:\_:\_:\_:\_:\_:)](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys(\_:\_:\_:\_:\_:\_:)](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator(\_:)](1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextNoLocale(\_:\_:\_:\_:\_:\_:\_:)](1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.

# UCCompareTextDefault (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Uses the default system locale to compare Unicode strings.

## Declaration

```objectivec
OSStatus UCCompareTextDefault(UCCollateOptions options, const UniChar *text1Ptr, UniCharCount text1Length, const UniChar *text2Ptr, UniCharCount text2Length, Boolean *equivalent, SInt32 *order);
```

## Parameters

- `options`: A `UCCollateOptions` value specifying any collation options for the string comparison.
- `text1Ptr`: A pointer to the first Unicode string (a `UniChar` array) to compare.
- `text1Length`: The total count of Unicode characters in the first string being compared.
- `text2Ptr`: A pointer to the second Unicode string to compare.
- `text2Length`: The total count of Unicode characters in the second string being compared.
- `equivalent`: A pointer to a `Boolean` value or pass `NULL`. On return, `UCCompareTextDefault` produces a value of `true` if the strings are equivalent for the options you have specified. If you wish simply to sort a list of strings in order, using your specified options, you can pass `NULL` for the `equivalent` parameter and only use the `order` parameter’s result. In this case, all available comparison criteria are used to put the strings in a deterministic order, even if they are considered “equivalent” for the options you have specified. Note that you can set either the `equivalent` or the `order` parameters to `NULL`, but not both.
- `order`: A pointer to a signed, 32-bit integer value, or pass `NULL`. If you wish simply to test the strings for equivalence, using your specified options (which can be much faster than determining ordering), you can pass `NULL` for the `order` parameter and only use the `equivalent` parameter’s result. (Note that either the `equivalent` or the `order` parameters may be `NULL`, but not both.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

You can call the `UCCompareTextDefault` function when you want to use a simple collation function that requires minimum setup. This function uses the system default collation order (that is, the collation order for a `LocaleRef` of `NULL` and a variant of 0), and it does not require a collator object or collation keys.

## See Also

### Comparing Unicode Strings

- [UCCreateCollator](1390403-uccreatecollator.md): Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.
- [UCCompareText](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator](1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextNoLocale](1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.
