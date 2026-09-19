> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessibility/axdatapoint/initwithx:y:additionalvalues:label:

# initWithX:y:additionalValues:label:

**Interface language:** Objective-C

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a data point with the specified x-value, y-value, additional values, and label.

## Declaration

```objectivec
- (instancetype) initWithX:(AXDataPointValue *) xValue y:(AXDataPointValue *) yValue additionalValues:(NSArray<AXDataPointValue *> *) additionalValues label:(NSString *) label;
```

## See Also

### Creating a data point

- [initWithX:y:](initwithx_y_.md): Creates a data point with the specified x- and y-values.
- [initWithX:y:additionalValues:](initwithx_y_additionalvalues_.md): Creates a data point with the specified x-value, y-value, and additional values.
