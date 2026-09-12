> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/addannotation(_:with:)](https://developer.apple.com/documentation/watchkit/wkinterfacemap/addannotation(_:with:))

# addAnnotation(\_:with:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Adds a pin to the map at the specified location.

## Declaration

```swift
func addAnnotation(_ location: CLLocationCoordinate2D, with pinColor: WKInterfaceMapPinColor)
```

## Parameters

- `location`: The location at which to display the pin.
- `pinColor`: The color of the pin. For a list of possible values, see [WKInterfaceMapPinColor](../wkinterfacemappincolor.md).

<a id="Discussion"></a>

## Discussion

The pin is positioned so that the base of the pin sits on top of the specified coordinate.

## See Also

### Managing Map Annotations

- [addAnnotation(\_:with:centerOffset:)](addannotation%28__with_centeroffset_%29.md): Displays the specified image on top of the map.
- [addAnnotation(\_:withImageNamed:centerOffset:)](addannotation%28__withimagenamed_centeroffset_%29.md): Displays an image from the WatchKit app’s bundle on top of the map.
- [WKInterfaceMapPinColor](../wkinterfacemappincolor.md): Constants for map pin colors.
- [removeAllAnnotations()](removeallannotations%28%29.md): Removes all annotations from the map.

# addAnnotation:withPinColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Adds a pin to the map at the specified location.

## Declaration

```objectivec
- (void) addAnnotation:(CLLocationCoordinate2D) location withPinColor:(WKInterfaceMapPinColor) pinColor;
```

## Parameters

- `location`: The location at which to display the pin.
- `pinColor`: The color of the pin. For a list of possible values, see [WKInterfaceMapPinColor](../wkinterfacemappincolor.md).

<a id="Discussion"></a>

## Discussion

The pin is positioned so that the base of the pin sits on top of the specified coordinate.

## See Also

### Managing Map Annotations

- [addAnnotation:withImage:centerOffset:](addannotation%28__with_centeroffset_%29.md): Displays the specified image on top of the map.
- [addAnnotation:withImageNamed:centerOffset:](addannotation%28__withimagenamed_centeroffset_%29.md): Displays an image from the WatchKit app’s bundle on top of the map.
- [WKInterfaceMapPinColor](../wkinterfacemappincolor.md): Constants for map pin colors.
- [removeAllAnnotations](removeallannotations%28%29.md): Removes all annotations from the map.
