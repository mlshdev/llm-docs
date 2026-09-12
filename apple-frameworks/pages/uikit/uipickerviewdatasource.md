> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdatasource](https://developer.apple.com/documentation/uikit/uipickerviewdatasource)

# UIPickerViewDataSource (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for a picker view’s data source.

## Declaration

```swift
@MainActor protocol UIPickerViewDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The data source of a [UIPickerView](uipickerview.md) object must adopt this protocol to mediate between the picker view object and your app’s data model for that picker view. The data source provides the picker view with the number of components, and the number of rows in each component, for displaying the picker view data. Both methods in this protocol are required.

## Topics

### Providing counts for the picker view

- [numberOfComponents(in:)](uipickerviewdatasource/numberofcomponents%28in_%29.md): Asks the data source for the number of components in the picker view.
- [pickerView(\_:numberOfRowsInComponent:)](uipickerviewdatasource/pickerview%28__numberofrowsincomponent_%29.md): Asks the data source for the number of rows for a specified component.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Providing the picker data

- [dataSource](uipickerview/datasource.md): The data source for the picker view.

# UIPickerViewDataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for a picker view’s data source.

## Declaration

```objectivec
@protocol UIPickerViewDataSource <NSObject>
```

<a id="overview"></a>

## Overview

The data source of a [UIPickerView](uipickerview.md) object must adopt this protocol to mediate between the picker view object and your app’s data model for that picker view. The data source provides the picker view with the number of components, and the number of rows in each component, for displaying the picker view data. Both methods in this protocol are required.

## Topics

### Providing counts for the picker view

- [numberOfComponentsInPickerView:](uipickerviewdatasource/numberofcomponents%28in_%29.md): Asks the data source for the number of components in the picker view.
- [pickerView:numberOfRowsInComponent:](uipickerviewdatasource/pickerview%28__numberofrowsincomponent_%29.md): Asks the data source for the number of rows for a specified component.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Providing the picker data

- [dataSource](uipickerview/datasource.md): The data source for the picker view.
