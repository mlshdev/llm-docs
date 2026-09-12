> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/tag](https://developer.apple.com/documentation/appkit/nsview/tag)

# tag (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s tag, which is an integer that you use to identify the view within your app.

## Declaration

```swift
var tag: Int { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `–1`. Subclasses can override this property to provide individual tags for views, possibly redefining the property as `readwrite` so that you can modify it more easily.

## See Also

### Identifying Views by Tag

- [viewWithTag(\_:)](viewwithtag%28__%29.md): Returns the view’s nearest descendant (including itself) with a specific tag, or `nil` if no subview has that tag.

# tag (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s tag, which is an integer that you use to identify the view within your app.

## Declaration

```objectivec
@property (readonly) NSInteger tag;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `–1`. Subclasses can override this property to provide individual tags for views, possibly redefining the property as `readwrite` so that you can modify it more easily.

## See Also

### Identifying Views by Tag

- [viewWithTag:](viewwithtag%28__%29.md): Returns the view’s nearest descendant (including itself) with a specific tag, or `nil` if no subview has that tag.
