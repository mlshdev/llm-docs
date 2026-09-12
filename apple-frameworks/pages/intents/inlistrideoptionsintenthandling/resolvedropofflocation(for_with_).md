> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintenthandling/resolvedropofflocation(for:with:)](https://developer.apple.com/documentation/intents/inlistrideoptionsintenthandling/resolvedropofflocation(for:with:))

# resolveDropOffLocation(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s drop-off location.

## Declaration

```swift
optional func resolveDropOffLocation(for intent: INListRideOptionsIntent, with completion: @escaping @Sendable (INPlacemarkResolutionResult) -> Void)
```

```swift
optional func resolveDropOffLocation(for intent: INListRideOptionsIntent) async -> INPlacemarkResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information provided by the user.
- `completion`: The block to execute with the resolution. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [CLPlacemark](../../corelocation/clplacemark.md) object with the user’s requested drop-off location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you are able to drop off the user at the specified location. If you are unable to drop off the user at the requested location, you can provide a nearby location and ask the user to confirm the new value. You can also provide other resolutions as appropriate.

If you do not implement this method, SiriKit assumes you are able to drop off the user at the specified location.

Maps does not call this method. The Maps interface lets the user specify the drop-off location explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocation(for:with:)](resolvepickuplocation%28for_with_%29.md): Resolves the user’s pickup location.

# resolveDropOffLocationForListRideOptions:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the user’s drop-off location.

## Declaration

```objectivec
- (void) resolveDropOffLocationForListRideOptions:(INListRideOptionsIntent *) intent withCompletion:(void (^)(INPlacemarkResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information provided by the user.
- `completion`: The block to execute with the resolution. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [CLPlacemark](../../corelocation/clplacemark.md) object with the user’s requested drop-off location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you are able to drop off the user at the specified location. If you are unable to drop off the user at the requested location, you can provide a nearby location and ask the user to confirm the new value. You can also provide other resolutions as appropriate.

If you do not implement this method, SiriKit assumes you are able to drop off the user at the specified location.

Maps does not call this method. The Maps interface lets the user specify the drop-off location explicitly, making resolution of that value unnecessary.

## See Also

### Resolving the Intent Parameters

- [resolvePickupLocationForListRideOptions:withCompletion:](resolvepickuplocation%28for_with_%29.md): Resolves the user’s pickup location.
