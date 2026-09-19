> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstreecontroller/arrangedobjects

# arrangedObjects (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tree controller’s sorted content objects.

## Declaration

```swift
var arrangedObjects: NSTreeNode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property represents a proxy root tree node containing the tree controller’s sorted content objects. The proxy object responds to [children](../nstreenode/children.md) and [descendant(at:)](../nstreenode/descendant%28at_%29.md) messages. This property is observable using key-value observing.

## See Also

### Arranging Objects

- [rearrangeObjects()](rearrangeobjects%28%29.md): Use this method to trigger reordering of the tree controller’s content.

# arrangedObjects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tree controller’s sorted content objects.

## Declaration

```objectivec
@property (strong, readonly) NSTreeNode * arrangedObjects;
```

<a id="Discussion"></a>

## Discussion

The value of this property represents a proxy root tree node containing the tree controller’s sorted content objects. The proxy object responds to [childNodes](../nstreenode/children.md) and [descendantNodeAtIndexPath:](../nstreenode/descendant%28at_%29.md) messages. This property is observable using key-value observing.

## See Also

### Arranging Objects

- [rearrangeObjects](rearrangeobjects%28%29.md): Use this method to trigger reordering of the tree controller’s content.
