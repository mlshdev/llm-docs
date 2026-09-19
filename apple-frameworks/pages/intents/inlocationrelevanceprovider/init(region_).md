> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inlocationrelevanceprovider/init(region:)

# init(region:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

Creates a relevance provider for a location specified as a region.

## Declaration

```swift
init(region: CLRegion)
```

## Parameters

- `region`: A region defining the relevant location.

<a id="return-value"></a>

## Return Value

A newly initialized location relevance provider.

# initWithRegion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

Creates a relevance provider for a location specified as a region.

## Declaration

```objectivec
- (instancetype) initWithRegion:(CLRegion *) region;
```

## Parameters

- `region`: A region defining the relevant location.

<a id="return-value"></a>

## Return Value

A newly initialized location relevance provider.
