> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didvisit:)

# locationManager(\_:didVisit:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Tells the delegate that a new visit-related event was received.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didVisit visit: CLVisit)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `visit`: The visit object that contains the information about the event.

<a id="Discussion"></a>

## Discussion

The location manager calls this method whenever it has new visit event to report to your app.

# locationManager:didVisit: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Tells the delegate that a new visit-related event was received.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didVisit:(CLVisit *) visit;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `visit`: The visit object that contains the information about the event.

<a id="Discussion"></a>

## Discussion

The location manager calls this method whenever it has new visit event to report to your app.
