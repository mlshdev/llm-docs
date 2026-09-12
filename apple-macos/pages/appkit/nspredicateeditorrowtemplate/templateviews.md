> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/templateviews](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/templateviews)

# templateViews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the views that display this template’s predicate.

## Declaration

```swift
var templateViews: [NSView] { get }
```

<a id="return-value"></a>

## Return Value

The views for an [NSPredicateEditor](../nspredicateeditor.md) to display in a row that represents the predicate from [setPredicate(\_:)](setpredicate%28__%29.md).

<a id="Discussion"></a>

## Discussion

[NSPredicateEditor](../nspredicateeditor.md) treats instances of [NSPopUpButton](../nspopupbutton.md) specially by merging their menu items into a single popup button, and by combining menu items with matching titles. In this way, the editor builds a single tree from the separate templates.

## See Also

### Primitive Methods

- [match(for:)](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [setPredicate(\_:)](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicates(of:)](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicate(withSubpredicates:)](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

# templateViews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the views that display this template’s predicate.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSView *> * templateViews;
```

<a id="return-value"></a>

## Return Value

The views for an [NSPredicateEditor](../nspredicateeditor.md) to display in a row that represents the predicate from [setPredicate:](setpredicate%28__%29.md).

<a id="Discussion"></a>

## Discussion

[NSPredicateEditor](../nspredicateeditor.md) treats instances of [NSPopUpButton](../nspopupbutton.md) specially by merging their menu items into a single popup button, and by combining menu items with matching titles. In this way, the editor builds a single tree from the separate templates.

## See Also

### Primitive Methods

- [matchForPredicate:](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [setPredicate:](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicatesOfPredicate:](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicateWithSubpredicates:](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.
