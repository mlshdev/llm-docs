> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/representeditem()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/representeditem())

# representedItem() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s represented object.

## Declaration

```swift
func representedItem() -> Any!
```

<a id="return-value"></a>

## Return Value

The item represented by the cell.

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Represented Item

- [indexOfRepresentedItem()](indexofrepresenteditem%28%29.md): Returns the index of the receiver’s represented object in the datasource.

# representedItem (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s represented object.

## Declaration

```objectivec
- (id) representedItem;
```

<a id="return-value"></a>

## Return Value

The item represented by the cell.

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Represented Item

- [indexOfRepresentedItem](indexofrepresenteditem%28%29.md): Returns the index of the receiver’s represented object in the datasource.
