> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdatapoint/xvalue](https://developer.apple.com/documentation/accessibility/axdatapoint/xvalue)

# xValue (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The value of the x-axis for the data point.

## Declaration

```swift
@NSCopying var xValue: AXDataPointValue { get set }
```

<a id="discussion"></a>

## Discussion

Use a `double` value for a numeric x-axis, or an [NSString](../../foundation/nsstring.md) value for a categorical x-axis.

## See Also

### Specifying the data value

- [yValue](yvalue.md): The value of the y-axis for the data point.
- [AXDataPointValue](../axdatapointvalue.md): A single data value.
- [AXDataPoint.Value](value.md): Constants that describe types of data values.

# xValue (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The value of the x-axis for the data point.

## Declaration

```objectivec
@property (nonatomic, copy) AXDataPointValue * xValue;
```

<a id="discussion"></a>

## Discussion

Use a `double` value for a numeric x-axis, or an [NSString](../../foundation/nsstring.md) value for a categorical x-axis.

## See Also

### Specifying the data value

- [yValue](yvalue.md): The value of the y-axis for the data point.
- [additionalValues](additionalvalues.md): An array of values for additional axes for the data point.
- [AXDataPointValue](../axdatapointvalue.md): A single data value.
