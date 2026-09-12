> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/preparefordisplay()](https://developer.apple.com/documentation/mapkit/mkannotationview/preparefordisplay())

# prepareForDisplay() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Notifies the annotation view that the map view is about to display it.

## Declaration

```swift
func prepareForDisplay()
```

<a id="Discussion"></a>

## Discussion

Use this method to prepare the content of your annotation view.

## See Also

### Creating and preparing an annotation view

- [init(annotation:reuseIdentifier:)](init%28annotation_reuseidentifier_%29.md): Creates and returns a new annotation view.
- [init(coder:)](init%28coder_%29.md): Creates an annotation view using data from the specified unarchiver.
- [prepareForReuse()](prepareforreuse%28%29.md): Calls this method when removing the view from the reuse queue.

# prepareForDisplay (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Notifies the annotation view that the map view is about to display it.

## Declaration

```objectivec
- (void) prepareForDisplay;
```

<a id="Discussion"></a>

## Discussion

Use this method to prepare the content of your annotation view.

## See Also

### Creating and preparing an annotation view

- [initWithAnnotation:reuseIdentifier:](init%28annotation_reuseidentifier_%29.md): Creates and returns a new annotation view.
- [initWithCoder:](init%28coder_%29.md): Creates an annotation view using data from the specified unarchiver.
- [prepareForReuse](prepareforreuse%28%29.md): Calls this method when removing the view from the reuse queue.
