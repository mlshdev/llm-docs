> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarkregion/pointcount](https://developer.apple.com/documentation/vision/vnfacelandmarkregion/pointcount)

# pointCount (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of points in the face region.

## Declaration

```swift
var pointCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value is zero if no points for a region could be found.

# pointCount (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of points in the face region.

## Declaration

```objectivec
@property (readonly) NSUInteger pointCount;
```

<a id="Discussion"></a>

## Discussion

The value is zero if no points for a region could be found.
