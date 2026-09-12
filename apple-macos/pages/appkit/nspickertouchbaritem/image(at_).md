> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspickertouchbaritem/image(at:)](https://developer.apple.com/documentation/appkit/nspickertouchbaritem/image(at:))

# image(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```swift
func image(at index: Int) -> UIImage?
```

```swift
func image(at index: Int) -> NSImage?
```

## See Also

### Configuring picker appearance

- [numberOfOptions](numberofoptions.md)
- [setLabel(\_:at:)](setlabel%28__at_%29.md)
- [label(at:)](label%28at_%29.md)
- [setImage(\_:at:)](setimage%28__at_%29.md)
- [collapsedRepresentationImage](collapsedrepresentationimage.md)
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md)
- [controlRepresentation](controlrepresentation-swift.property.md)
- [NSPickerTouchBarItem.ControlRepresentation](controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.

# imageAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```objectivec
- (UIImage *) imageAtIndex:(NSInteger) index;
```

```objectivec
- (NSImage *) imageAtIndex:(NSInteger) index;
```

## See Also

### Configuring picker appearance

- [numberOfOptions](numberofoptions.md)
- [setLabel:atIndex:](setlabel%28__at_%29.md)
- [labelAtIndex:](label%28at_%29.md)
- [setImage:atIndex:](setimage%28__at_%29.md)
- [collapsedRepresentationImage](collapsedrepresentationimage.md)
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md)
- [controlRepresentation](controlrepresentation-swift.property.md)
- [NSPickerTouchBarItemControlRepresentation](controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
