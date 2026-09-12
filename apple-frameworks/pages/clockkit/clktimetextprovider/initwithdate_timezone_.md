> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimetextprovider/initwithdate:timezone:](https://developer.apple.com/documentation/clockkit/clktimetextprovider/initwithdate:timezone:)

# initWithDate:timeZone:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates and returns a text provider for displaying the specified time.

## Declaration

```objectivec
- (instancetype) initWithDate:(NSDate *) date timeZone:(NSTimeZone *) timeZone;
```

## Parameters

- `date`: The date object containing the time to display. This parameter must not be `nil`.
- `timeZone`: The time zone to use when formatting the date. If you specify `nil`, the text provider uses the default time zone currently associated with the user.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date and time zone value.

## See Also

### Creating a Text Provider

- [textProviderWithDate:](init%28date_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [initWithDate:](initwithdate_.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [textProviderWithDate:timeZone:](init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
