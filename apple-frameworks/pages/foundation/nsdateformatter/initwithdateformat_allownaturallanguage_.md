> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateformatter/initwithdateformat:allownaturallanguage:](https://developer.apple.com/documentation/foundation/nsdateformatter/initwithdateformat:allownaturallanguage:)

# initWithDateFormat:allowNaturalLanguage:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.9)

Initializes and returns an `NSDateFormatter` instance that uses the OS X 10.0 formatting behavior and the given date format string in its conversions.

## Declaration

```objectivec
- (id) initWithDateFormat:(NSString *) format allowNaturalLanguage:(BOOL) flag;
```

## Parameters

- `format`: The format for the receiver. See [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i) for a list of conversion specifiers permitted in date format strings.
- `flag`: A flag that specifies whether the receiver should process dates entered as expressions in the vernacular (for example, “tomorrow”)—[true](https://developer.apple.com/documentation/swift/true) means that it should.

<a id="return-value"></a>

## Return Value

An initialized `NSDateFormatter` instance that uses `format` in its conversions and that *uses the OS X 10.0 formatting behavior*.

<a id="Discussion"></a>

## Discussion

`NSDateFormatter` attempts natural-language processing only after it fails to interpret an entered string according to `format`. Natural-language processing supports only a limited set of colloquial phrases, primarily in English. It may give unexpected results, and its use is strongly discouraged.

The following example creates a date formatter with the format string (for example) “Mar 15 1994” and then associates the formatter with the cells of a form (`contactsForm`):

```objc
NSDateFormatter *dateFormat = [[NSDateFormatter alloc]
    initWithDateFormat:@"%b %d %Y" allowNaturalLanguage:NO];
[[contactsForm cells] makeObjectsPerformSelector:@selector(setFormatter:)
     withObject:dateFormat];
```

<a id="Special-Considerations"></a>

### Special Considerations

You cannot use this method to initialize a formatter with the OS X 10.4 formatting behavior, you must use `init`.

## See Also

### Related Documentation

- [doesRelativeDateFormatting](../dateformatter/doesrelativedateformatting.md): A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.
- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)

### Deprecated

- [generatesCalendarDates](../dateformatter/generatescalendardates.md): Indicates whether the formatter generates the deprecated calendar date type.
