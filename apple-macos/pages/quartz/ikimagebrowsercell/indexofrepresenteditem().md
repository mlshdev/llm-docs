> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikimagebrowsercell/indexofrepresenteditem()

# indexOfRepresentedItem() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the index of the receiver’s represented object in the datasource.

## Declaration

```swift
func indexOfRepresentedItem() -> Int
```

<a id="return-value"></a>

## Return Value

The index of the represented object in the datasource.

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Represented Item

- [representedItem()](representeditem%28%29.md): Returns the receiver’s represented object.

# indexOfRepresentedItem (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the index of the receiver’s represented object in the datasource.

## Declaration

```objectivec
- (NSUInteger) indexOfRepresentedItem;
```

<a id="return-value"></a>

## Return Value

The index of the represented object in the datasource.

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Represented Item

- [representedItem](representeditem%28%29.md): Returns the receiver’s represented object.
