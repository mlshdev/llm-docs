> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/match(for:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/match(for:))

# match(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.

## Declaration

```swift
func match(for predicate: NSPredicate) -> Double
```

<a id="return-value"></a>

## Return Value

A positive number if the template can represent `predicate`, and `0` if it cannot.

<a id="Discussion"></a>

## Discussion

By default, returns values in the range `0` to `1`.

The highest match among all the templates determines which template is responsible for displaying the predicate. You can override this to determine which predicates your custom template handles.

## See Also

### Primitive Methods

- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate(\_:)](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicates(of:)](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicate(withSubpredicates:)](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

# matchForPredicate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.

## Declaration

```objectivec
- (double) matchForPredicate:(NSPredicate *) predicate;
```

<a id="return-value"></a>

## Return Value

A positive number if the template can represent `predicate`, and `0` if it cannot.

<a id="Discussion"></a>

## Discussion

By default, returns values in the range `0` to `1`.

The highest match among all the templates determines which template is responsible for displaying the predicate. You can override this to determine which predicates your custom template handles.

## See Also

### Primitive Methods

- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate:](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicatesOfPredicate:](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicateWithSubpredicates:](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.
