> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/addannotation(_:with:centeroffset:)](https://developer.apple.com/documentation/watchkit/wkinterfacemap/addannotation(_:with:centeroffset:))

# addAnnotation(\_:with:centerOffset:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Displays the specified image on top of the map.

## Declaration

```swift
func addAnnotation(_ location: CLLocationCoordinate2D, with image: UIImage?, centerOffset offset: CGPoint)
```

## Parameters

- `location`: The location at which to display the image.
- `image`: The image to display at the specified location. If the value of this parameter is `nil`, the map adds a red pin at the specified location.
- `offset`: The offset (in points) at which to place the center of the image. Normally, the center point of an annotation image is placed at the specified location on the map. Use this parameter to reposition the image relative to that point. Positive offset values move the annotation image down and to the right, while negative values move it up and to the left.

<a id="Discussion"></a>

## Discussion

This method adds an image to the map at the specified geographic location. The image is positioned just above the actual coordinate and centered on the coordinate horizontally.

## See Also

### Managing Map Annotations

- [addAnnotation(\_:withImageNamed:centerOffset:)](addannotation%28__withimagenamed_centeroffset_%29.md): Displays an image from the WatchKit app’s bundle on top of the map.
- [addAnnotation(\_:with:)](addannotation%28__with_%29.md): Adds a pin to the map at the specified location.
- [WKInterfaceMapPinColor](../wkinterfacemappincolor.md): Constants for map pin colors.
- [removeAllAnnotations()](removeallannotations%28%29.md): Removes all annotations from the map.

# addAnnotation:withImage:centerOffset: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Displays the specified image on top of the map.

## Declaration

```objectivec
- (void) addAnnotation:(CLLocationCoordinate2D) location withImage:(UIImage *) image centerOffset:(CGPoint) offset;
```

## Parameters

- `location`: The location at which to display the image.
- `image`: The image to display at the specified location. If the value of this parameter is `nil`, the map adds a red pin at the specified location.
- `offset`: The offset (in points) at which to place the center of the image. Normally, the center point of an annotation image is placed at the specified location on the map. Use this parameter to reposition the image relative to that point. Positive offset values move the annotation image down and to the right, while negative values move it up and to the left.

<a id="Discussion"></a>

## Discussion

This method adds an image to the map at the specified geographic location. The image is positioned just above the actual coordinate and centered on the coordinate horizontally.

## See Also

### Managing Map Annotations

- [addAnnotation:withImageNamed:centerOffset:](addannotation%28__withimagenamed_centeroffset_%29.md): Displays an image from the WatchKit app’s bundle on top of the map.
- [addAnnotation:withPinColor:](addannotation%28__with_%29.md): Adds a pin to the map at the specified location.
- [WKInterfaceMapPinColor](../wkinterfacemappincolor.md): Constants for map pin colors.
- [removeAllAnnotations](removeallannotations%28%29.md): Removes all annotations from the map.
