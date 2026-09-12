> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/tag](https://developer.apple.com/documentation/appkit/nscontrol/tag)

# tag (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tag identifying the receiver (not the tag of the receiver’s cell).

## Declaration

```swift
var tag: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Tags allow you to identify particular controls. Tag values are not used internally; they are only changed when you set this property. You typically set tag values in Interface Builder and use them at runtime in your application. When you set the tag of a control with a single cell in Interface Builder, it sets the tags of both the control and the cell to the same value as a convenience.

## See Also

### Related Documentation

- [selectedTag()](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.

# tag (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tag identifying the receiver (not the tag of the receiver’s cell).

## Declaration

```objectivec
@property NSInteger tag;
```

<a id="Discussion"></a>

## Discussion

Tags allow you to identify particular controls. Tag values are not used internally; they are only changed when you set this property. You typically set tag values in Interface Builder and use them at runtime in your application. When you set the tag of a control with a single cell in Interface Builder, it sets the tags of both the control and the cell to the same value as a convenience.

## See Also

### Related Documentation

- [selectedTag](selectedtag%28%29.md): Returns the tag of the receiver’s selected cell.
