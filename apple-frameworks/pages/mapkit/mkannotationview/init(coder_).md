> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/init(coder:)](https://developer.apple.com/documentation/mapkit/mkannotationview/init(coder:))

# init(coder:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates an annotation view using data from the specified unarchiver.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: The unarchiver to read data from.

## See Also

### Creating and preparing an annotation view

- [init(annotation:reuseIdentifier:)](init%28annotation_reuseidentifier_%29.md): Creates and returns a new annotation view.
- [prepareForReuse()](prepareforreuse%28%29.md): Calls this method when removing the view from the reuse queue.
- [prepareForDisplay()](preparefordisplay%28%29.md): Notifies the annotation view that the map view is about to display it.

# initWithCoder: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates an annotation view using data from the specified unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: The unarchiver to read data from.

## See Also

### Creating and preparing an annotation view

- [initWithAnnotation:reuseIdentifier:](init%28annotation_reuseidentifier_%29.md): Creates and returns a new annotation view.
- [prepareForReuse](prepareforreuse%28%29.md): Calls this method when removing the view from the reuse queue.
- [prepareForDisplay](preparefordisplay%28%29.md): Notifies the annotation view that the map view is about to display it.
