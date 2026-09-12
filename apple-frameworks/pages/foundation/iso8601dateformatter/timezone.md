> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/iso8601dateformatter/timezone](https://developer.apple.com/documentation/foundation/iso8601dateformatter/timezone)

# timeZone (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time zone used to create and parse date representations. When unspecified, GMT is used.

## Declaration

```swift
var timeZone: TimeZone! { get set }
```

<a id="Discussion"></a>

## Discussion

Resetting this property can incur a significant performance cost, as it may cause internal state to be regenerated.

## See Also

### Configuring the Formatter

- [formatOptions](formatoptions.md): Options for generating and parsing ISO 8601 date representations. See [ISO8601DateFormatter.Options](options.md) for possible values.

# timeZone (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time zone used to create and parse date representations. When unspecified, GMT is used.

## Declaration

```objectivec
@property (copy, null_resettable) NSTimeZone * timeZone;
```

<a id="Discussion"></a>

## Discussion

Resetting this property can incur a significant performance cost, as it may cause internal state to be regenerated.

## See Also

### Configuring the Formatter

- [formatOptions](formatoptions.md): Options for generating and parsing ISO 8601 date representations. See [NSISO8601DateFormatOptions](options.md) for possible values.
