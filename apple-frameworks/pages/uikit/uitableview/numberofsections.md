> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/numberofsections](https://developer.apple.com/documentation/uikit/uitableview/numberofsections)

# numberOfSections (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of sections in the table view.

## Declaration

```swift
var numberOfSections: Int { get }
```

<a id="Discussion"></a>

## Discussion

[UITableView](../uitableview.md) gets the value in this property from its data source and caches it.

## See Also

### Getting the number of rows and sections

- [numberOfRows(inSection:)](numberofrows%28insection_%29.md): Returns the number of rows (table cells) in a specified section.

# numberOfSections (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of sections in the table view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfSections;
```

<a id="Discussion"></a>

## Discussion

[UITableView](../uitableview.md) gets the value in this property from its data source and caches it.

## See Also

### Getting the number of rows and sections

- [numberOfRowsInSection:](numberofrows%28insection_%29.md): Returns the number of rows (table cells) in a specified section.
