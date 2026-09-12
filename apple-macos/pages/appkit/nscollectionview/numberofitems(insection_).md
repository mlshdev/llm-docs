> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/numberofitems(insection:)](https://developer.apple.com/documentation/appkit/nscollectionview/numberofitems(insection:))

# numberOfItems(inSection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the number of items in the specified section.

## Declaration

```swift
func numberOfItems(inSection section: Int) -> Int
```

## Parameters

- `section`: The index of the section whose item count you want. This index is 0-based.

<a id="return-value"></a>

## Return Value

The number of items in the section.

<a id="Discussion"></a>

## Discussion

Use this method to get the number of items currently displayed by the collection view for the specified section. Do not call the methods of the data source to get this information.

## See Also

### Getting the State of the Collection View

- [numberOfSections](numberofsections.md): The number of sections in the collection view.

# numberOfItemsInSection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the number of items in the specified section.

## Declaration

```objectivec
- (NSInteger) numberOfItemsInSection:(NSInteger) section;
```

## Parameters

- `section`: The index of the section whose item count you want. This index is 0-based.

<a id="return-value"></a>

## Return Value

The number of items in the section.

<a id="Discussion"></a>

## Discussion

Use this method to get the number of items currently displayed by the collection view for the specified section. Do not call the methods of the data source to get this information.

## See Also

### Getting the State of the Collection View

- [numberOfSections](numberofsections.md): The number of sections in the collection view.
