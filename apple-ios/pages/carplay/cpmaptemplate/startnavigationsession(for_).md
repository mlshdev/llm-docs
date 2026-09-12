> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/startnavigationsession(for:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/startnavigationsession(for:))

# startNavigationSession(for:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Begins navigational guidance for a trip.

## Declaration

```swift
func startNavigationSession(for trip: CPTrip) -> CPNavigationSession
```

## Parameters

- `trip`: The trip to provide guidance for.

<a id="return-value"></a>

## Return Value

A navigation session for the specified trip.

<a id="Discussion"></a>

## Discussion

Keep a reference to the navigation session to perform guidance updates.

## See Also

### Navigating a Trip

- [CPNavigationSession](../cpnavigationsession.md): An object that represents an active route guidance session.

# startNavigationSessionForTrip: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Begins navigational guidance for a trip.

## Declaration

```objectivec
- (CPNavigationSession *) startNavigationSessionForTrip:(CPTrip *) trip;
```

## Parameters

- `trip`: The trip to provide guidance for.

<a id="return-value"></a>

## Return Value

A navigation session for the specified trip.

<a id="Discussion"></a>

## Discussion

Keep a reference to the navigation session to perform guidance updates.

## See Also

### Navigating a Trip

- [CPNavigationSession](../cpnavigationsession.md): An object that represents an active route guidance session.
