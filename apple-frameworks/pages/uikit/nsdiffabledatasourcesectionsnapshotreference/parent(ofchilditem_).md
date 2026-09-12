> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/parent(ofchilditem:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/parent(ofchilditem:))

# parent(ofChildItem:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Finds the parent item of the specified item in the section snapshot.

## Declaration

```swift
func parent(ofChildItem childItem: Any) -> Any?
```

## See Also

### Getting item metrics

- [index(ofItem:)](index%28ofitem_%29.md): Finds the index of the specified item in the section snapshot.
- [level(ofItem:)](level%28ofitem_%29.md): Finds the hierarchical level of the specified item in the section snapshot.
- [containsItem(\_:)](containsitem%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible(\_:)](isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.

# parentOfChildItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Finds the parent item of the specified item in the section snapshot.

## Declaration

```objectivec
- (ItemIdentifierType) parentOfChildItem:(ItemIdentifierType) childItem;
```

## See Also

### Getting item metrics

- [indexOfItem:](index%28ofitem_%29.md): Finds the index of the specified item in the section snapshot.
- [levelOfItem:](level%28ofitem_%29.md): Finds the hierarchical level of the specified item in the section snapshot.
- [containsItem:](containsitem%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible:](isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.
