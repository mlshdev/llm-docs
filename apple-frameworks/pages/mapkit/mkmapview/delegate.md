> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/delegate](https://developer.apple.com/documentation/mapkit/mkmapview/delegate)

# delegate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The receiver’s delegate.

## Declaration

```swift
@IBOutlet weak var delegate: (any MKMapViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A map view sends messages to its delegate regarding the loading of map data and changes in the portion of the map it displays. The delegate also manages the annotation views that highlight points of interest on the map.

The delegate needs to implement the methods of the [MKMapViewDelegate](../mkmapviewdelegate.md) protocol.

## See Also

### Customizing the map view behavior

- [MKMapViewDelegate](../mkmapviewdelegate.md): Optional methods that you use to receive map-related update messages.

# delegate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The receiver’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MKMapViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A map view sends messages to its delegate regarding the loading of map data and changes in the portion of the map it displays. The delegate also manages the annotation views that highlight points of interest on the map.

The delegate needs to implement the methods of the [MKMapViewDelegate](../mkmapviewdelegate.md) protocol.

## See Also

### Customizing the map view behavior

- [MKMapViewDelegate](../mkmapviewdelegate.md): Optional methods that you use to receive map-related update messages.
