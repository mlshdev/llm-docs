> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/searchmenutemplate](https://developer.apple.com/documentation/appkit/nssearchfieldcell/searchmenutemplate)

# searchMenuTemplate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu object used to dynamically construct the search field’s pop-up icon menu.

## Declaration

```swift
var searchMenuTemplate: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

The cell looks for the tag constants described in [Menu tags](../menu-tags.md) to determine how to populate the menu with items related to recent searches. For an example of how you might set up the search menu template, see [Configuring a Search Menu](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SearchFields/Articles/MenuTemplate.html#//apple_ref/doc/uid/20002245).

# searchMenuTemplate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu object used to dynamically construct the search field’s pop-up icon menu.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * searchMenuTemplate;
```

<a id="Discussion"></a>

## Discussion

The cell looks for the tag constants described in [Menu tags](../menu-tags.md) to determine how to populate the menu with items related to recent searches. For an example of how you might set up the search menu template, see [Configuring a Search Menu](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SearchFields/Articles/MenuTemplate.html#//apple_ref/doc/uid/20002245).
