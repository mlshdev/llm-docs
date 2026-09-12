> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/urlparsingregularexpression](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/urlparsingregularexpression)

# urlParsingRegularExpression

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A regular expression used for advanced URL parsing.

## Declaration

```swift
var urlParsingRegularExpression: String? { get }
```

<a id="discussion"></a>

## Discussion

This property is read-only. To set a regular expression for use in parsing, call [setURLParsingRegularExpression(\_:)](seturlparsingregularexpression%28__%29.md), which validates the pattern.

Setting a regular expression allows you to perform custom URL parsing patterns beyond the standard parsing options. The filter uses the regular expression to parse the URL before matching against the specified data set.

URL parsing with a regular expression is case insensitive.

## See Also

### Customizing filter parsing behavior

- [urlParsingConfiguration](urlparsingconfiguration.md): A property to configure the filter’s parser behavior.
- [NEURLFilterManager.ParsingConfiguration](parsingconfiguration.md): A type to configure the filter’s parser behavior.
- [setURLParsingRegularExpression(\_:)](seturlparsingregularexpression%28__%29.md): Sets a regular expression for use in URL parsing.
