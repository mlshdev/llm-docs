> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(uiedgeinsets:)](https://developer.apple.com/documentation/foundation/nsvalue/init(uiedgeinsets:))

# init(UIEdgeInsets:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified UIKit edge insets structure.

## Declaration

```swift
init(UIEdgeInsets insets: UIEdgeInsets)
```

```swift
init(uiEdgeInsets insets: UIEdgeInsets)
```

## Parameters

- `insets`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the edge inset information.

## See Also

### Related Documentation

- [UIEdgeInsets](../../uikit/uiedgeinsets.md): The inset distances for views.

### Working with UIKit Geometry Values

- [init(UIOffset:)](init%28uioffset_%29.md): Creates a new value object containing the specified UIKit offset structure.
- [uiEdgeInsetsValue](uiedgeinsetsvalue.md): Returns the UIKit edge insets structure representation of the value.
- [uiOffsetValue](uioffsetvalue.md): Returns the UIKit offset structure representation of the value.

# valueWithUIEdgeInsets: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified UIKit edge insets structure.

## Declaration

```objectivec
+ (NSValue *) valueWithUIEdgeInsets:(UIEdgeInsets) insets;
```

## Parameters

- `insets`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the edge inset information.

## See Also

### Related Documentation

- [UIEdgeInsets](../../uikit/uiedgeinsets.md): The inset distances for views.

### Working with UIKit Geometry Values

- [valueWithUIOffset:](init%28uioffset_%29.md): Creates a new value object containing the specified UIKit offset structure.
- [UIEdgeInsetsValue](uiedgeinsetsvalue.md): Returns the UIKit edge insets structure representation of the value.
- [UIOffsetValue](uioffsetvalue.md): Returns the UIKit offset structure representation of the value.
