> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewplaceholder/init(insertionindexpath:reuseidentifier:)](https://developer.apple.com/documentation/uikit/uicollectionviewplaceholder/init(insertionindexpath:reuseidentifier:))

# init(insertionIndexPath:reuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a placeholder object with the specified index path and reuse identifier.

## Declaration

```swift
init(insertionIndexPath: IndexPath, reuseIdentifier: String)
```

## Parameters

- `insertionIndexPath`: The index path at which to insert the placeholder cell.
- `reuseIdentifier`: The reuse identifier to use when dequeueing the cell.

<a id="return-value"></a>

## Return Value

A new placeholder cell object.

# initWithInsertionIndexPath:reuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a placeholder object with the specified index path and reuse identifier.

## Declaration

```objectivec
- (instancetype) initWithInsertionIndexPath:(NSIndexPath *) insertionIndexPath reuseIdentifier:(NSString *) reuseIdentifier;
```

## Parameters

- `insertionIndexPath`: The index path at which to insert the placeholder cell.
- `reuseIdentifier`: The reuse identifier to use when dequeueing the cell.

<a id="return-value"></a>

## Return Value

A new placeholder cell object.
