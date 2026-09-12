> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsregularexpression/escapedpattern(for:)](https://developer.apple.com/documentation/foundation/nsregularexpression/escapedpattern(for:))

# escapedPattern(for:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string by adding backslash escapes as necessary to protect any characters that would match as pattern metacharacters.

## Declaration

```swift
class func escapedPattern(for string: String) -> String
```

## Parameters

- `string`: The string.

<a id="return-value"></a>

## Return Value

The escaped string.

<a id="Discussion"></a>

## Discussion

Returns a string by adding backslash escapes as necessary to the given string, to escape any characters that would otherwise be treated as pattern metacharacters. You typically use this method to match on a particular string within a larger pattern.

For example, the string `"(N/A)"` contains the pattern metacharacters `(`, `/`, and `)`. The result of adding backslash escapes to this string is `"\\(N\\/A\\)"`.

## See Also

### Escaping Characters in a String

- [escapedTemplate(for:)](escapedtemplate%28for_%29.md): Returns a template string by adding backslash escapes as necessary to protect any characters that would match as pattern metacharacters

# escapedPatternForString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string by adding backslash escapes as necessary to protect any characters that would match as pattern metacharacters.

## Declaration

```objectivec
+ (NSString *) escapedPatternForString:(NSString *) string;
```

## Parameters

- `string`: The string.

<a id="return-value"></a>

## Return Value

The escaped string.

<a id="Discussion"></a>

## Discussion

Returns a string by adding backslash escapes as necessary to the given string, to escape any characters that would otherwise be treated as pattern metacharacters. You typically use this method to match on a particular string within a larger pattern.

For example, the string `"(N/A)"` contains the pattern metacharacters `(`, `/`, and `)`. The result of adding backslash escapes to this string is `"\\(N\\/A\\)"`.

## See Also

### Escaping Characters in a String

- [escapedTemplateForString:](escapedtemplate%28for_%29.md): Returns a template string by adding backslash escapes as necessary to protect any characters that would match as pattern metacharacters
