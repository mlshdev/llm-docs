> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/islenient](https://developer.apple.com/documentation/foundation/dateformatter/islenient)

# isLenient (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver uses heuristics when parsing a string.

## Declaration

```swift
var isLenient: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has been set to use heuristics when parsing a string to guess at the date which is intended, otherwise [false](https://developer.apple.com/documentation/swift/false).

If a formatter is set to be lenient, when parsing a string it uses heuristics to guess at the date which is intended. As with any guessing, it may get the result date wrong (that is, a date other than that which was intended).

## See Also

### Managing Natural Language Support

- [doesRelativeDateFormatting](doesrelativedateformatting.md): A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.

# lenient (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver uses heuristics when parsing a string.

## Declaration

```objectivec
@property (getter=isLenient) BOOL lenient;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has been set to use heuristics when parsing a string to guess at the date which is intended, otherwise [false](https://developer.apple.com/documentation/swift/false).

If a formatter is set to be lenient, when parsing a string it uses heuristics to guess at the date which is intended. As with any guessing, it may get the result date wrong (that is, a date other than that which was intended).

## See Also

### Managing Natural Language Support

- [allowsNaturalLanguage](../nsdateformatter/allowsnaturallanguage.md): Deprecated. Returns a Boolean value that indicates whether the receiver attempts to process dates entered as a vernacular string.
- [doesRelativeDateFormatting](doesrelativedateformatting.md): A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.
