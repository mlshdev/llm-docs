> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/numberofrows(insection:)](https://developer.apple.com/documentation/uikit/uitableview/numberofrows(insection:))

# numberOfRows(inSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the number of rows (table cells) in a specified section.

## Declaration

```swift
func numberOfRows(inSection section: Int) -> Int
```

## Parameters

- `section`: An index number that identifies a section of the table. Table views in a plain style have a section index of zero.

<a id="return-value"></a>

## Return Value

The number of rows in the section.

<a id="Discussion"></a>

## Discussion

[UITableView](../uitableview.md) gets the value returned by this method from its data source and caches it.

## See Also

### Getting the number of rows and sections

- [numberOfSections](numberofsections.md): The number of sections in the table view.

# numberOfRowsInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the number of rows (table cells) in a specified section.

## Declaration

```objectivec
- (NSInteger) numberOfRowsInSection:(NSInteger) section;
```

## Parameters

- `section`: An index number that identifies a section of the table. Table views in a plain style have a section index of zero.

<a id="return-value"></a>

## Return Value

The number of rows in the section.

<a id="Discussion"></a>

## Discussion

[UITableView](../uitableview.md) gets the value returned by this method from its data source and caches it.

## See Also

### Getting the number of rows and sections

- [numberOfSections](numberofsections.md): The number of sections in the table view.
