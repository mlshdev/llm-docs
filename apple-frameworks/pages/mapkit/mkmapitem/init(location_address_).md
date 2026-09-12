> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/init(location:address:)](https://developer.apple.com/documentation/mapkit/mkmapitem/init(location:address:))

# init(location:address:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates and returns a map item object using the specified location and address objects.

## Declaration

```swift
init(location: CLLocation, address: MKAddress?)
```

## Parameters

- `location`: A [CLLocation](../../corelocation/cllocation.md).
- `address`: An [MKAddress](../mkaddress.md).

<a id="return-value"></a>

## Return Value

An initialized map item object.

<a id="Discussion"></a>

## Discussion

Use this method to create a map item for a specific location. Don’t use it to create a map item representing the current location of someone’s device, instead use the \`\`\`MKMapItem/forCurrentLocation()\`\` method.

# initWithLocation:address: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates and returns a map item object using the specified location and address objects.

## Declaration

```objectivec
- (instancetype) initWithLocation:(CLLocation *) location address:(MKAddress *) address;
```

## Parameters

- `location`: A [CLLocation](../../corelocation/cllocation.md).
- `address`: An [MKAddress](../mkaddress.md).

<a id="return-value"></a>

## Return Value

An initialized map item object.

<a id="Discussion"></a>

## Discussion

Use this method to create a map item for a specific location. Don’t use it to create a map item representing the current location of someone’s device, instead use the \`\`\`MKMapItem/forCurrentLocation()\`\` method.
