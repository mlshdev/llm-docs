> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerinkingitem/initwithinktype:color:width:identifier:](https://developer.apple.com/documentation/pencilkit/pktoolpickerinkingitem/initwithinktype:color:width:identifier:)

# initWithInkType:color:width:identifier:

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 2.0+

Creates a new inking item with the specified ink type, color, width, and identifier.

## Declaration

```objectivec
- (instancetype) initWithInkType:(PKInkType) inkType color:(UIColor *) color width:(CGFloat) width identifier:(NSString *) identifier;
```

```objectivec
- (instancetype) initWithInkType:(PKInkType) inkType color:(NSColor *) color width:(CGFloat) width identifier:(NSString *) identifier;
```

## See Also

### Creating an inking item

- [initWithInkType:color:width:](initwithinktype_color_width_.md): Creates a new inking item with the specified ink type, color, and width.
