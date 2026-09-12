> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdataseriesdescriptor/init(attributedname:iscontinuous:datapoints:)](https://developer.apple.com/documentation/accessibility/axdataseriesdescriptor/init(attributedname:iscontinuous:datapoints:))

# init(attributedName:isContinuous:dataPoints:) (Swift)

**Framework:** Accessibility  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a data series with the specified attributed name, a Boolean value that indicates whether the series is continuous, and data points.

## Declaration

```swift
init(attributedName: NSAttributedString, isContinuous: Bool, dataPoints: [AXDataPoint])
```

## See Also

### Creating a data series

- [init(name:isContinuous:dataPoints:)](init%28name_iscontinuous_datapoints_%29.md): Creates a data series with the specified name, a Boolean value that indicates whether the series is continuous, and data points.

# initWithAttributedName:isContinuous:dataPoints: (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a data series with the specified attributed name, a Boolean value that indicates whether the series is continuous, and data points.

## Declaration

```objectivec
- (instancetype) initWithAttributedName:(NSAttributedString *) attributedName isContinuous:(BOOL) isContinuous dataPoints:(NSArray<AXDataPoint *> *) dataPoints;
```

## See Also

### Creating a data series

- [initWithName:isContinuous:dataPoints:](init%28name_iscontinuous_datapoints_%29.md): Creates a data series with the specified name, a Boolean value that indicates whether the series is continuous, and data points.
