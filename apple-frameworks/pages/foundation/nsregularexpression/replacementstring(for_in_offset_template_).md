> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/replacementstring(for:in:offset:template:)](https://developer.apple.com/documentation/foundation/nsregularexpression/replacementstring(for:in:offset:template:))

# replacementString(for:in:offset:template:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Used to perform template substitution for a single result for clients implementing their own replace functionality.

## Declaration

```swift
func replacementString(for result: NSTextCheckingResult, in string: String, offset: Int, template templ: String) -> String
```

## Parameters

- `result`: The result of the single match.
- `string`: The string from which the result was matched.
- `offset`: The offset to be added to the location of the result in the string.
- `templ`: See [Flag Options](../nsregularexpression.md#Flag-Options) for the format of `template`.

<a id="return-value"></a>

## Return Value

A replacement string.

<a id="Discussion"></a>

## Discussion

For clients implementing their own replace functionality, this is a method to perform the template substitution for a single result, given the string from which the result was matched, an offset to be added to the location of the result in the string (for example, in cases that modifications to the string moved the result since it was matched), and a replacement template.

This is an advanced method that is used only if you wanted to iterate through a list of matches yourself and do the template replacement for each one, plus maybe some other calculation that you want to do in code, then you would use this at each step.

# replacementStringForResult:inString:offset:template: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Used to perform template substitution for a single result for clients implementing their own replace functionality.

## Declaration

```objectivec
- (NSString *) replacementStringForResult:(NSTextCheckingResult *) result inString:(NSString *) string offset:(NSInteger) offset template:(NSString *) templ;
```

## Parameters

- `result`: The result of the single match.
- `string`: The string from which the result was matched.
- `offset`: The offset to be added to the location of the result in the string.
- `templ`: See [Flag Options](../nsregularexpression.md#Flag-Options) for the format of `template`.

<a id="return-value"></a>

## Return Value

A replacement string.

<a id="Discussion"></a>

## Discussion

For clients implementing their own replace functionality, this is a method to perform the template substitution for a single result, given the string from which the result was matched, an offset to be added to the location of the result in the string (for example, in cases that modifications to the string moved the result since it was matched), and a replacement template.

This is an advanced method that is used only if you wanted to iterate through a list of matches yourself and do the template replacement for each one, plus maybe some other calculation that you want to do in code, then you would use this at each step.
