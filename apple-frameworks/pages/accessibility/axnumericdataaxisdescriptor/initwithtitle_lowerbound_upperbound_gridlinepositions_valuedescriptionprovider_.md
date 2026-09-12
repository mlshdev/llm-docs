> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axnumericdataaxisdescriptor/initwithtitle:lowerbound:upperbound:gridlinepositions:valuedescriptionprovider:](https://developer.apple.com/documentation/accessibility/axnumericdataaxisdescriptor/initwithtitle:lowerbound:upperbound:gridlinepositions:valuedescriptionprovider:)

# initWithTitle:lowerBound:upperBound:gridlinePositions:valueDescriptionProvider:

**Interface language:** Objective-C

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a numeric data axis with the specified title, lower bound value, upper bound value, gridline positions, and value description provider block.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title lowerBound:(double) lowerbound upperBound:(double) upperBound gridlinePositions:(NSArray<NSNumber *> *) gridlinePositions valueDescriptionProvider:(NSString * (^)(double )) valueDescriptionProvider;
```

## See Also

### Creating a numeric data axis

- [initWithAttributedTitle:lowerBound:upperBound:gridlinePositions:valueDescriptionProvider:](initwithattributedtitle_lowerbound_upperbound_gridlinepositions_valuedescriptionprovider_.md): Creates a numeric data axis with the specified attributed title, lower bound value, upper bound value, gridline positions, and value description provider block.
