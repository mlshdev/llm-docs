> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaccessibilityimageregion/label](https://developer.apple.com/documentation/watchkit/wkaccessibilityimageregion/label)

# label (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A succinct label that succinctly identifies the purpose of the image region.

## Declaration

```swift
var label: String { get set }
```

<a id="Discussion"></a>

## Discussion

The label should be a very short, localized string that identifies the purpose of the region, but does not necessarily convey the imagery displayed in that region.

## See Also

### Getting the Region Attributes

- [frame](frame.md): A portion of the parent image, in the image’s coordinate system.

# label (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A succinct label that succinctly identifies the purpose of the image region.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * label;
```

<a id="Discussion"></a>

## Discussion

The label should be a very short, localized string that identifies the purpose of the region, but does not necessarily convey the imagery displayed in that region.

## See Also

### Getting the Region Attributes

- [frame](frame.md): A portion of the parent image, in the image’s coordinate system.
