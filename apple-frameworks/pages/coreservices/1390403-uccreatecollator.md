> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390403-uccreatecollator](https://developer.apple.com/documentation/coreservices/1390403-uccreatecollator)

# UCCreateCollator(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.

## Declaration

```swift
func UCCreateCollator(_ locale: LocaleRef!, _ opVariant: LocaleOperationVariant, _ options: UCCollateOptions, _ collatorRef: UnsafeMutablePointer<CollatorRef?>!) -> OSStatus
```

## Parameters

- `locale`: A valid `LocaleRef` representing a specific locale, or pass `NULL` to request the default system locale. You can supply the value `kUnicodeCollationClass` in the `opClass` parameter of the Locales Utilities functions `LocaleOperationCountLocales` and `LocaleOperationGetLocales` to obtain the locales available for collation on the current system.
- `opVariant`: A `LocaleOperationVariant` value identifying a collation variant within the locale specified in the `locale` parameter. You can also pass 0 to request the default collation variant for any locale. To obtain the varieties of locale-specific collation that are currently available, you can supply the value `kUnicodeCollationClass` in the `opClass` parameter of the Locales Utilities functions `LocaleOperationCountLocales` and `LocaleOperationGetLocales`.
- `options`: A `UCCollateOptions` value specifying any collation options that you want to use for the string comparison.
- `collatorRef`: A pointer to a value of type `CollatorRef`. On return, the `CollatorRef` value contains a valid reference to a new collator object.

<a id="return_value"></a>

## Return Value

A result code.  The function can return memory errors and `paramErr`, for example, if the `collatorRef` parameter is `NULL`. It can also return resource errors in Mac OS 9 and CarbonLib.

<a id="discussion"></a>

## Discussion

To perform Unicode string comparison, you must supply locale and collation specifications to a collation function such as  [UCCompareText(\_:\_:\_:\_:\_:\_:\_:)](1390642-uccomparetext.md). You provide this information by means of a collator object, created via the `UCCreateCollator` function. When finished with the collator object, you dispose of it using the function  [UCDisposeCollator(\_:)](1390435-ucdisposecollator.md). 

<a id="1770072"></a>

### Special Considerations

The collator object is allocated in the current heap. This function can move memory.

## See Also

### Comparing Unicode Strings

- [UCCompareText(\_:\_:\_:\_:\_:\_:\_:)](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey(\_:\_:\_:\_:\_:\_:)](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys(\_:\_:\_:\_:\_:\_:)](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator(\_:)](1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextDefault(\_:\_:\_:\_:\_:\_:\_:)](1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.
- [UCCompareTextNoLocale(\_:\_:\_:\_:\_:\_:\_:)](1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.

# UCCreateCollator (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates an object encapsulating locale and collation information, for the purpose of performing Unicode string comparison.

## Declaration

```objectivec
OSStatus UCCreateCollator(LocaleRef locale, LocaleOperationVariant opVariant, UCCollateOptions options, CollatorRef *collatorRef);
```

## Parameters

- `locale`: A valid `LocaleRef` representing a specific locale, or pass `NULL` to request the default system locale. You can supply the value `kUnicodeCollationClass` in the `opClass` parameter of the Locales Utilities functions `LocaleOperationCountLocales` and `LocaleOperationGetLocales` to obtain the locales available for collation on the current system.
- `opVariant`: A `LocaleOperationVariant` value identifying a collation variant within the locale specified in the `locale` parameter. You can also pass 0 to request the default collation variant for any locale. To obtain the varieties of locale-specific collation that are currently available, you can supply the value `kUnicodeCollationClass` in the `opClass` parameter of the Locales Utilities functions `LocaleOperationCountLocales` and `LocaleOperationGetLocales`.
- `options`: A `UCCollateOptions` value specifying any collation options that you want to use for the string comparison.
- `collatorRef`: A pointer to a value of type `CollatorRef`. On return, the `CollatorRef` value contains a valid reference to a new collator object.

<a id="return_value"></a>

## Return Value

A result code.  The function can return memory errors and `paramErr`, for example, if the `collatorRef` parameter is `NULL`. It can also return resource errors in Mac OS 9 and CarbonLib.

<a id="discussion"></a>

## Discussion

To perform Unicode string comparison, you must supply locale and collation specifications to a collation function such as  [UCCompareText](1390642-uccomparetext.md). You provide this information by means of a collator object, created via the `UCCreateCollator` function. When finished with the collator object, you dispose of it using the function  [UCDisposeCollator](1390435-ucdisposecollator.md). 

<a id="1770072"></a>

### Special Considerations

The collator object is allocated in the current heap. This function can move memory.

## See Also

### Comparing Unicode Strings

- [UCCompareText](1390642-uccomparetext.md): Uses locale-specific collation information to compare Unicode strings.
- [UCGetCollationKey](1390468-ucgetcollationkey.md): Uses locale-specific collation information to generate a collation key for a Unicode string.
- [UCCompareCollationKeys](1390378-uccomparecollationkeys.md): Uses collation keys to compare Unicode strings.
- [UCDisposeCollator](1390435-ucdisposecollator.md): Disposes a collator object.
- [UCCompareTextDefault](1390472-uccomparetextdefault.md): Uses the default system locale to compare Unicode strings.
- [UCCompareTextNoLocale](1390513-uccomparetextnolocale.md): Uses a fixed, locale-insensitive order to compare Unicode strings.
