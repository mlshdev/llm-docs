> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indaterelevanceprovider/init(start:end:)](https://developer.apple.com/documentation/intents/indaterelevanceprovider/init(start:end:))

# init(start:end:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a relevance provider with the specified start and end dates.

## Declaration

```swift
init(start startDate: Date, end endDate: Date?)
```

## Parameters

- `startDate`: A relevant start date for the provider.
- `endDate`: An optional relevant end date for the provider.

<a id="return-value"></a>

## Return Value

A newly initialized date relevance provider.

# initWithStartDate:endDate: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a relevance provider with the specified start and end dates.

## Declaration

```objectivec
- (instancetype) initWithStartDate:(NSDate *) startDate endDate:(NSDate *) endDate;
```

## Parameters

- `startDate`: A relevant start date for the provider.
- `endDate`: An optional relevant end date for the provider.

<a id="return-value"></a>

## Return Value

A newly initialized date relevance provider.
