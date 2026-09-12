> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/numberofrows(incomponent:)](https://developer.apple.com/documentation/uikit/uipickerview/numberofrows(incomponent:))

# numberOfRows(inComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the number of rows for a component.

## Declaration

```swift
func numberOfRows(inComponent component: Int) -> Int
```

## Parameters

- `component`: A zero-indexed number identifying a component.

<a id="return-value"></a>

## Return Value

The number of rows in the given component.

<a id="Discussion"></a>

## Discussion

A picker view fetches the value of this property from the data source and and caches it. The default value is zero.

## See Also

### Getting the dimensions of the picker view

- [numberOfComponents](numberofcomponents.md): The number of components for the picker view.
- [rowSize(forComponent:)](rowsize%28forcomponent_%29.md): Returns the size of a row for a component.

# numberOfRowsInComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the number of rows for a component.

## Declaration

```objectivec
- (NSInteger) numberOfRowsInComponent:(NSInteger) component;
```

## Parameters

- `component`: A zero-indexed number identifying a component.

<a id="return-value"></a>

## Return Value

The number of rows in the given component.

<a id="Discussion"></a>

## Discussion

A picker view fetches the value of this property from the data source and and caches it. The default value is zero.

## See Also

### Getting the dimensions of the picker view

- [numberOfComponents](numberofcomponents.md): The number of components for the picker view.
- [rowSizeForComponent:](rowsize%28forcomponent_%29.md): Returns the size of a row for a component.
