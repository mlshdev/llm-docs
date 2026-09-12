> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcell/setobjectvalue(_:)](https://developer.apple.com/documentation/appkit/nspathcell/setobjectvalue(_:))

# setObjectValue(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the receiver’s object value.

## Declaration

```swift
func setObjectValue(_ obj: (any NSCopying)?)
```

## Parameters

- `obj`: The new object value for the cell.

<a id="Discussion"></a>

## Discussion

If `setObjectValue:` is called with an `NSURL` object, [clickedPathComponentCell](clickedpathcomponentcell.md) is automatically called. The [objectValue](../nscell/objectvalue.md) method returns the most recently set URL value. The `setObjectValue:` method can also take a string value, with the items separated by the path separator (`/`). Any other value is a programming error and will cause an assertion.

# setObjectValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the receiver’s object value.

## Declaration

```objectivec
- (void) setObjectValue:(id<NSCopying>) obj;
```

## Parameters

- `obj`: The new object value for the cell.

<a id="Discussion"></a>

## Discussion

If `setObjectValue:` is called with an `NSURL` object, [clickedPathComponentCell](clickedpathcomponentcell.md) is automatically called. The [objectValue](../nscell/objectvalue.md) method returns the most recently set URL value. The `setObjectValue:` method can also take a string value, with the items separated by the path separator (`/`). Any other value is a programming error and will cause an assertion.
