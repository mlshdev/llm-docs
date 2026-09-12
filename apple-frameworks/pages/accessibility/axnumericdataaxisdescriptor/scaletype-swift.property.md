> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axnumericdataaxisdescriptor/scaletype-swift.property](https://developer.apple.com/documentation/accessibility/axnumericdataaxisdescriptor/scaletype-swift.property)

# scaleType (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The scale for the axis.

## Declaration

```swift
var scaleType: AXNumericDataAxisDescriptor.ScaleType { get set }
```

<a id="discussion"></a>

## Discussion

Match the value of this property to the visual representation in the chart.

The default value is [AXNumericDataAxisDescriptor.ScaleType.linear](scaletype-swift.enum/linear.md).

## See Also

### Configuring the axis scale

- [AXNumericDataAxisDescriptor.ScaleType](scaletype-swift.enum.md): Constants that describe the scale of a numeric axis.

# scaleType (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The scale for the axis.

## Declaration

```objectivec
@property (nonatomic, assign) AXNumericDataAxisDescriptorScale scaleType;
```

<a id="discussion"></a>

## Discussion

Match the value of this property to the visual representation in the chart.

The default value is [AXScaleTypeLinear](scaletype-swift.enum/linear.md).

## See Also

### Configuring the axis scale

- [AXNumericDataAxisDescriptorScale](scaletype-swift.enum.md): Constants that describe the scale of a numeric axis.
