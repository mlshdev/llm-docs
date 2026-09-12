> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wksnapshotconfiguration/snapshotwidth](https://developer.apple.com/documentation/webkit/wksnapshotconfiguration/snapshotwidth)

# snapshotWidth (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The width of the captured image, in points.

## Declaration

```swift
@NSCopying var snapshotWidth: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to scale the generated image to the specified width. The web view maintains the aspect ratio of the captured content, but scales it to match the width you specify.

The default value of this property is `nil`, which returns an image whose size matches the original size of the captured rectangle.

## See Also

### Specifying the snapshot dimensions

- [rect](rect.md): The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.

# snapshotWidth (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The width of the captured image, in points.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * snapshotWidth;
```

<a id="Discussion"></a>

## Discussion

Use this property to scale the generated image to the specified width. The web view maintains the aspect ratio of the captured content, but scales it to match the width you specify.

The default value of this property is `nil`, which returns an image whose size matches the original size of the captured rectangle.

## See Also

### Specifying the snapshot dimensions

- [rect](rect.md): The portion of your web view to capture, specified as a rectangle in the view’s coordinate system.
