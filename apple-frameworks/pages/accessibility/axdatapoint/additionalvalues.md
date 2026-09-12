> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdatapoint/additionalvalues](https://developer.apple.com/documentation/accessibility/axdatapoint/additionalvalues)

# additionalValues

**Interface language:** Objective-C

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of values for additional axes for the data point.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AXDataPointValue *> * additionalValues;
```

<a id="discussion"></a>

## Discussion

Provide these values in the same order as their corresponding [AXDataAxisDescriptor](../axdataaxisdescriptor.md) objects in [additionalAxes](../axchartdescriptor/additionalaxes-2adwh.md).

## See Also

### Specifying the data value

- [xValue](xvalue.md): The value of the x-axis for the data point.
- [yValue](yvalue.md): The value of the y-axis for the data point.
- [AXDataPointValue](../axdatapointvalue.md): A single data value.
