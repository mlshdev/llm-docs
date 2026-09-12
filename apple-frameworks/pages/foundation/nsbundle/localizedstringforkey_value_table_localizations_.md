> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundle/localizedstringforkey:value:table:localizations:](https://developer.apple.com/documentation/foundation/nsbundle/localizedstringforkey:value:table:localizations:)

# localizedStringForKey:value:table:localizations:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Look up a localized string given a list of available localizations.

## Declaration

```objectivec
- (NSString *) localizedStringForKey:(NSString *) key value:(NSString *) value table:(NSString *) tableName localizations:(NSArray<NSString *> *) localizations;
```

## Parameters

- `key`: The key for the localized string to retrieve.
- `value`: A default value to return if a localized string for `key` cannot be found.
- `tableName`: The name of the strings file to search. If `nil`, the method uses tables in `Localizable.strings`.
- `localizations`: An array of BCP 47 language codes corresponding to available localizations. Bundle compares the array against its available localizations, and uses the best result to retrieve the localized string. If empty, we treat it as no localization is available, and may return a fallback.

<a id="return-value"></a>

## Return Value

A localized version of the string designated by `key` in table `tableName`.
