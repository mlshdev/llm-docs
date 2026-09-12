> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/numberofcomponents](https://developer.apple.com/documentation/uikit/uipickerview/numberofcomponents)

# numberOfComponents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of components for the picker view.

## Declaration

```swift
var numberOfComponents: Int { get }
```

<a id="Discussion"></a>

## Discussion

A [UIPickerView](../uipickerview.md) object fetches the value of this property from the data source and caches it. The default value is `0`.

## See Also

### Getting the dimensions of the picker view

- [numberOfRows(inComponent:)](numberofrows%28incomponent_%29.md): Returns the number of rows for a component.
- [rowSize(forComponent:)](rowsize%28forcomponent_%29.md): Returns the size of a row for a component.

# numberOfComponents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of components for the picker view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfComponents;
```

<a id="Discussion"></a>

## Discussion

A [UIPickerView](../uipickerview.md) object fetches the value of this property from the data source and caches it. The default value is `0`.

## See Also

### Getting the dimensions of the picker view

- [numberOfRowsInComponent:](numberofrows%28incomponent_%29.md): Returns the number of rows for a component.
- [rowSizeForComponent:](rowsize%28forcomponent_%29.md): Returns the size of a row for a component.
