> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(uioffset:)](https://developer.apple.com/documentation/foundation/nsvalue/init(uioffset:))

# init(UIOffset:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified UIKit offset structure.

## Declaration

```swift
init(UIOffset insets: UIOffset)
```

```swift
init(uiOffset insets: UIOffset)
```

## Parameters

- `insets`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the offset information.

## See Also

### Related Documentation

- [UIOffset](../../uikit/uioffset.md): A structure that specifies an amount to offset a position.

### Working with UIKit Geometry Values

- [init(UIEdgeInsets:)](init%28uiedgeinsets_%29.md): Creates a new value object containing the specified UIKit edge insets structure.
- [uiEdgeInsetsValue](uiedgeinsetsvalue.md): Returns the UIKit edge insets structure representation of the value.
- [uiOffsetValue](uioffsetvalue.md): Returns the UIKit offset structure representation of the value.

# valueWithUIOffset: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified UIKit offset structure.

## Declaration

```objectivec
+ (NSValue *) valueWithUIOffset:(UIOffset) insets;
```

## Parameters

- `insets`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the offset information.

## See Also

### Related Documentation

- [UIOffset](../../uikit/uioffset.md): A structure that specifies an amount to offset a position.

### Working with UIKit Geometry Values

- [valueWithUIEdgeInsets:](init%28uiedgeinsets_%29.md): Creates a new value object containing the specified UIKit edge insets structure.
- [UIEdgeInsetsValue](uiedgeinsetsvalue.md): Returns the UIKit edge insets structure representation of the value.
- [UIOffsetValue](uioffsetvalue.md): Returns the UIKit offset structure representation of the value.
