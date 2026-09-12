> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/constraints(withvisualformat:options:metrics:views:)](https://developer.apple.com/documentation/appkit/nslayoutconstraint/constraints(withvisualformat:options:metrics:views:))

# constraints(withVisualFormat:options:metrics:views:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates constraints described by an ASCII art-like visual format string.

## Declaration

```swift
class func constraints(withVisualFormat format: String, options opts: NSLayoutConstraint.FormatOptions = [], metrics: [String : Any]?, views: [String : Any]) -> [NSLayoutConstraint]
```

## Parameters

- `format`: The format specification for the constraints.
- `opts`: Options describing the attribute and the direction of layout for all objects in the visual format string.
- `metrics`: A dictionary of constants that appear in the visual format string. The dictionary’s keys must be the string values used in the visual format string. Their values must be [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects.
- `views`: A dictionary of views that appear in the visual format string. The keys must be the string values used in the visual format string, and the values must be the view objects.

<a id="return-value"></a>

## Return Value

An array of constraints that, combined, express the constraints between the provided views and their parent view as described by the visual format string. The constraints are returned in the same order they were specified in the visual format string.

<a id="Discussion"></a>

## Discussion

For more information, see [NSLayoutConstraint](../nslayoutconstraint.md).

## See Also

### Related Documentation

- [NSLayoutConstraint](../nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

### Creating constraints

- [init(item:attribute:relatedBy:toItem:attribute:multiplier:constant:)](init%28item_attribute_relatedby_toitem_attribute_multiplier_constant_%29.md): Creates a constraint that defines the relationship between the specified attributes of the given views.

# constraintsWithVisualFormat:options:metrics:views: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates constraints described by an ASCII art-like visual format string.

## Declaration

```objectivec
+ (NSArray<NSLayoutConstraint *> *) constraintsWithVisualFormat:(NSString *) format options:(NSLayoutFormatOptions) opts metrics:(NSDictionary<NSString *,id> *) metrics views:(NSDictionary<NSString *,id> *) views;
```

## Parameters

- `format`: The format specification for the constraints.
- `opts`: Options describing the attribute and the direction of layout for all objects in the visual format string.
- `metrics`: A dictionary of constants that appear in the visual format string. The dictionary’s keys must be the string values used in the visual format string. Their values must be [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects.
- `views`: A dictionary of views that appear in the visual format string. The keys must be the string values used in the visual format string, and the values must be the view objects.

<a id="return-value"></a>

## Return Value

An array of constraints that, combined, express the constraints between the provided views and their parent view as described by the visual format string. The constraints are returned in the same order they were specified in the visual format string.

<a id="Discussion"></a>

## Discussion

For more information, see [NSLayoutConstraint](../nslayoutconstraint.md).

## See Also

### Related Documentation

- [NSLayoutConstraint](../nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

### Creating constraints

- [constraintWithItem:attribute:relatedBy:toItem:attribute:multiplier:constant:](init%28item_attribute_relatedby_toitem_attribute_multiplier_constant_%29.md): Creates a constraint that defines the relationship between the specified attributes of the given views.
