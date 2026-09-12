> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/index(ofitem:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/index(ofitem:))

# index(ofItem:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Finds the index of the specified item in the section snapshot.

## Declaration

```swift
func index(ofItem item: Any) -> Int
```

## See Also

### Getting item metrics

- [level(ofItem:)](level%28ofitem_%29.md): Finds the hierarchical level of the specified item in the section snapshot.
- [parent(ofChildItem:)](parent%28ofchilditem_%29.md): Finds the parent item of the specified item in the section snapshot.
- [containsItem(\_:)](containsitem%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible(\_:)](isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.

# indexOfItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Finds the index of the specified item in the section snapshot.

## Declaration

```objectivec
- (NSInteger) indexOfItem:(ItemIdentifierType) item;
```

## See Also

### Getting item metrics

- [levelOfItem:](level%28ofitem_%29.md): Finds the hierarchical level of the specified item in the section snapshot.
- [parentOfChildItem:](parent%28ofchilditem_%29.md): Finds the parent item of the specified item in the section snapshot.
- [containsItem:](containsitem%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible:](isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.
