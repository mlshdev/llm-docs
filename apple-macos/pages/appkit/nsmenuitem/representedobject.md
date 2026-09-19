> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmenuitem/representedobject

# representedObject (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object represented by the menu item.

## Declaration

```swift
var representedObject: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

By setting a represented object for a menu item, you make an association between the menu item and that object. The represented object functions as a more specific form of tag that allows you to associate any object, not just an arbitrary integer, with the items in a menu.

## See Also

### Related Documentation

- [tag](tag.md): The menu item’s tag.

# representedObject (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object represented by the menu item.

## Declaration

```objectivec
@property (strong, nullable) id representedObject;
```

<a id="Discussion"></a>

## Discussion

By setting a represented object for a menu item, you make an association between the menu item and that object. The represented object functions as a more specific form of tag that allows you to associate any object, not just an arbitrary integer, with the items in a menu.

## See Also

### Related Documentation

- [tag](tag.md): The menu item’s tag.
