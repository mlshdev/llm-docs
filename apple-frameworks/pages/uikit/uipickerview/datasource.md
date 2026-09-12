> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/datasource](https://developer.apple.com/documentation/uikit/uipickerview/datasource)

# dataSource (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The data source for the picker view.

## Declaration

```swift
weak var dataSource: (any UIPickerViewDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

The data source must adopt the [UIPickerViewDataSource](../uipickerviewdatasource.md) protocol and implement the required methods to return the number of components and the number of rows in each component.

## See Also

### Providing the picker data

- [UIPickerViewDataSource](../uipickerviewdatasource.md): The interface for a picker view’s data source.

# dataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The data source for the picker view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPickerViewDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

The data source must adopt the [UIPickerViewDataSource](../uipickerviewdatasource.md) protocol and implement the required methods to return the number of components and the number of rows in each component.

## See Also

### Providing the picker data

- [UIPickerViewDataSource](../uipickerviewdatasource.md): The interface for a picker view’s data source.
