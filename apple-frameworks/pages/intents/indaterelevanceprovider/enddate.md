> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/indaterelevanceprovider/enddate

# endDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The relevant end date.

## Declaration

```swift
var endDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

If the end date isn’t specified when creating the [INDateRelevanceProvider](../indaterelevanceprovider.md) object, this property is `nil`.

## See Also

### Getting the Relevant Dates

- [startDate](startdate.md): The relevant start date.

# endDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The relevant end date.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * endDate;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

If the end date isn’t specified when creating the [INDateRelevanceProvider](../indaterelevanceprovider.md) object, this property is `nil`.

## See Also

### Getting the Relevant Dates

- [startDate](startdate.md): The relevant start date.
