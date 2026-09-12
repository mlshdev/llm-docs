> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintent/init(pickuplocation:dropofflocation:)](https://developer.apple.com/documentation/intents/inlistrideoptionsintent/init(pickuplocation:dropofflocation:))

# init(pickupLocation:dropOffLocation:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the intent object with the specified pickup and drop-off locations.

## Declaration

```swift
init(pickupLocation: CLPlacemark?, dropOffLocation: CLPlacemark?)
```

## Parameters

- `pickupLocation`: The starting location of the user.
- `dropOffLocation`: The user’s destination.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Maps creates instances when it requires a list of rides offered by your service. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithPickupLocation:dropOffLocation: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the intent object with the specified pickup and drop-off locations.

## Declaration

```objectivec
- (instancetype) initWithPickupLocation:(CLPlacemark *) pickupLocation dropOffLocation:(CLPlacemark *) dropOffLocation;
```

## Parameters

- `pickupLocation`: The starting location of the user.
- `dropOffLocation`: The user’s destination.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Maps creates instances when it requires a list of rides offered by your service. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
