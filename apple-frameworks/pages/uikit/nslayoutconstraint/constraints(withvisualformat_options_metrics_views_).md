> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/constraints(withvisualformat:options:metrics:views:)](https://developer.apple.com/documentation/uikit/nslayoutconstraint/constraints(withvisualformat:options:metrics:views:))

# constraints(withVisualFormat:options:metrics:views:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates constraints described by an ASCII art-like visual format string.

## Declaration

```swift
class func constraints(withVisualFormat format: String, options opts: NSLayoutConstraint.FormatOptions = [], metrics: [String : Any]?, views: [String : Any]) -> [NSLayoutConstraint]
```

## Parameters

- `format`: The format specification for the constraints. For more information, see [Auto Layout Cookbook](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/LayoutUsingStackViews.html#//apple_ref/doc/uid/TP40010853-CH3) in [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html#//apple_ref/doc/uid/TP40010853).
- `opts`: Options describing the attribute and the direction of layout for all objects in the visual format string.
- `metrics`: A dictionary of constants that appear in the visual format string. The dictionary’s keys must be the string values used in the visual format string. Their values must be [NSNumber](../../foundation/nsnumber.md) objects.
- `views`: A dictionary of views that appear in the visual format string. The keys must be the string values used in the visual format string, and the values must be the view objects.

<a id="return-value"></a>

## Return Value

An array of constraints that, combined, express the constraints between the provided views and their parent view as described by the visual format string. The constraints are returned in the same order they were specified in the visual format string.

<a id="Discussion"></a>

## Discussion

The language used for the visual format string is described in [Auto Layout Cookbook](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/LayoutUsingStackViews.html#//apple_ref/doc/uid/TP40010853-CH3) in [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html#//apple_ref/doc/uid/TP40010853).

## See Also

### Creating constraints

- [init(item:attribute:relatedBy:toItem:attribute:multiplier:constant:)](init%28item_attribute_relatedby_toitem_attribute_multiplier_constant_%29.md): Creates a constraint that defines the relationship between the specified attributes of the given views.

# constraintsWithVisualFormat:options:metrics:views: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates constraints described by an ASCII art-like visual format string.

## Declaration

```objectivec
+ (NSArray<NSLayoutConstraint *> *) constraintsWithVisualFormat:(NSString *) format options:(NSLayoutFormatOptions) opts metrics:(NSDictionary<NSString *,id> *) metrics views:(NSDictionary<NSString *,id> *) views;
```

## Parameters

- `format`: The format specification for the constraints. For more information, see [Auto Layout Cookbook](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/LayoutUsingStackViews.html#//apple_ref/doc/uid/TP40010853-CH3) in [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html#//apple_ref/doc/uid/TP40010853).
- `opts`: Options describing the attribute and the direction of layout for all objects in the visual format string.
- `metrics`: A dictionary of constants that appear in the visual format string. The dictionary’s keys must be the string values used in the visual format string. Their values must be [NSNumber](../../foundation/nsnumber.md) objects.
- `views`: A dictionary of views that appear in the visual format string. The keys must be the string values used in the visual format string, and the values must be the view objects.

<a id="return-value"></a>

## Return Value

An array of constraints that, combined, express the constraints between the provided views and their parent view as described by the visual format string. The constraints are returned in the same order they were specified in the visual format string.

<a id="Discussion"></a>

## Discussion

The language used for the visual format string is described in [Auto Layout Cookbook](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/LayoutUsingStackViews.html#//apple_ref/doc/uid/TP40010853-CH3) in [Auto Layout Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html#//apple_ref/doc/uid/TP40010853).

## See Also

### Creating constraints

- [constraintWithItem:attribute:relatedBy:toItem:attribute:multiplier:constant:](init%28item_attribute_relatedby_toitem_attribute_multiplier_constant_%29.md): Creates a constraint that defines the relationship between the specified attributes of the given views.
