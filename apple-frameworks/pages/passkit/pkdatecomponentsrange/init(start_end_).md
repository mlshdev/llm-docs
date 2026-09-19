> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkdatecomponentsrange/init(start:end:)

# init(start:end:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new time range with the start and end dates and times that you specify.

## Declaration

```swift
init?(start startDateComponents: DateComponents, end endDateComponents: DateComponents)
```

## Parameters

- `startDateComponents`: The start date and time of the range.
- `endDateComponents`: The end date and time of the range.

# initWithStartDateComponents:endDateComponents: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new time range with the start and end dates and times that you specify.

## Declaration

```objectivec
- (instancetype) initWithStartDateComponents:(NSDateComponents *) startDateComponents endDateComponents:(NSDateComponents *) endDateComponents;
```

## Parameters

- `startDateComponents`: The start date and time of the range.
- `endDateComponents`: The end date and time of the range.
