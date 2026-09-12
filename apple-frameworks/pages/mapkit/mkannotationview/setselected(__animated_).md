> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/setselected(_:animated:)](https://developer.apple.com/documentation/mapkit/mkannotationview/setselected(_:animated:))

# setSelected(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Sets the selection state of the annotation view.

## Declaration

```swift
func setSelected(_ selected: Bool, animated: Bool)
```

## Parameters

- `selected`: Contains the value [true](https://developer.apple.com/documentation/swift/true) if the view displays in a selected state.
- `animated`: Set to [true](https://developer.apple.com/documentation/swift/true) if the map view animates the change in selection state.

<a id="Discussion"></a>

## Discussion

Dont call this method directly. An [MKMapView](../mkmapview.md) object calls this method in response to user interactions with the annotation.

## See Also

### Related Documentation

- [selectAnnotation(\_:animated:)](../mkmapview/selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.

### Managing the selection state

- [isSelected](isselected.md): A Boolean value that indicates whether the annotation view is in a selected state.

# setSelected:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Sets the selection state of the annotation view.

## Declaration

```objectivec
- (void) setSelected:(BOOL) selected animated:(BOOL) animated;
```

## Parameters

- `selected`: Contains the value [true](https://developer.apple.com/documentation/swift/true) if the view displays in a selected state.
- `animated`: Set to [true](https://developer.apple.com/documentation/swift/true) if the map view animates the change in selection state.

<a id="Discussion"></a>

## Discussion

Dont call this method directly. An [MKMapView](../mkmapview.md) object calls this method in response to user interactions with the annotation.

## See Also

### Related Documentation

- [selectAnnotation:animated:](../mkmapview/selectannotation%28__animated_%29.md): Selects the specified annotation and displays a callout view for it.

### Managing the selection state

- [selected](isselected.md): A Boolean value that indicates whether the annotation view is in a selected state.
