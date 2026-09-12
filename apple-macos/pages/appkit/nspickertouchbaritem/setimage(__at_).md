> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspickertouchbaritem/setimage(_:at:)](https://developer.apple.com/documentation/appkit/nspickertouchbaritem/setimage(_:at:))

# setImage(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```swift
func setImage(_ image: UIImage?, at index: Int)
```

```swift
func setImage(_ image: NSImage?, at index: Int)
```

## See Also

### Configuring picker appearance

- [numberOfOptions](numberofoptions.md)
- [setLabel(\_:at:)](setlabel%28__at_%29.md)
- [label(at:)](label%28at_%29.md)
- [image(at:)](image%28at_%29.md)
- [collapsedRepresentationImage](collapsedrepresentationimage.md)
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md)
- [controlRepresentation](controlrepresentation-swift.property.md)
- [NSPickerTouchBarItem.ControlRepresentation](controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.

# setImage:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```objectivec
- (void) setImage:(UIImage *) image atIndex:(NSInteger) index;
```

```objectivec
- (void) setImage:(NSImage *) image atIndex:(NSInteger) index;
```

## See Also

### Configuring picker appearance

- [numberOfOptions](numberofoptions.md)
- [setLabel:atIndex:](setlabel%28__at_%29.md)
- [labelAtIndex:](label%28at_%29.md)
- [imageAtIndex:](image%28at_%29.md)
- [collapsedRepresentationImage](collapsedrepresentationimage.md)
- [collapsedRepresentationLabel](collapsedrepresentationlabel.md)
- [controlRepresentation](controlrepresentation-swift.property.md)
- [NSPickerTouchBarItemControlRepresentation](controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
