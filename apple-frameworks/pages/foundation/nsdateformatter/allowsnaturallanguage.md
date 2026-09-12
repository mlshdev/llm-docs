> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateformatter/allowsnaturallanguage](https://developer.apple.com/documentation/foundation/nsdateformatter/allowsnaturallanguage)

# allowsNaturalLanguage

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.9)

Returns a Boolean value that indicates whether the receiver attempts to process dates entered as a vernacular string.

## Declaration

```objectivec
- (BOOL) allowsNaturalLanguage;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver attempts to process dates entered as a vernacular string (“today,” “next week,” “dinner time,” and so on), otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Natural-language processing supports only a limited set of colloquial phrases, primarily in English. It may give unexpected results, and its use is strongly discouraged.

<a id="Special-Considerations"></a>

### Special Considerations

This method is for use with formatters using `NSDateFormatterBehavior10_0` behavior.

## See Also

### Managing Natural Language Support

- [lenient](../dateformatter/islenient.md): A Boolean value that indicates whether the receiver uses heuristics when parsing a string.
- [doesRelativeDateFormatting](../dateformatter/doesrelativedateformatting.md): A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.
