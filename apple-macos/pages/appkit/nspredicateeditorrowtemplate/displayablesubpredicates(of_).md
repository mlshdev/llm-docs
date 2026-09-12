> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/displayablesubpredicates(of:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/displayablesubpredicates(of:))

# displayableSubpredicates(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the subpredicates that should be made sub-rows of a given predicate.

## Declaration

```swift
func displayableSubpredicates(of predicate: NSPredicate) -> [NSPredicate]?
```

## Parameters

- `predicate`: A predicate object.

<a id="return-value"></a>

## Return Value

The subpredicates that should be made sub-rows of `predicate`. For compound predicates (instances of [NSCompoundPredicate](https://developer.apple.com/documentation/foundation/nscompoundpredicate)), the array of subpredicates; for other types of predicate, returns `nil`. If a template represents a predicate in its entirety, or if the predicate has no subpredicates, returns `nil`.

<a id="Discussion"></a>

## Discussion

You can override this method to create custom templates that handle complicated compound predicates.

## See Also

### Primitive Methods

- [match(for:)](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate(\_:)](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [predicate(withSubpredicates:)](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

# displayableSubpredicatesOfPredicate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the subpredicates that should be made sub-rows of a given predicate.

## Declaration

```objectivec
- (NSArray<NSPredicate *> *) displayableSubpredicatesOfPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: A predicate object.

<a id="return-value"></a>

## Return Value

The subpredicates that should be made sub-rows of `predicate`. For compound predicates (instances of [NSCompoundPredicate](https://developer.apple.com/documentation/foundation/nscompoundpredicate)), the array of subpredicates; for other types of predicate, returns `nil`. If a template represents a predicate in its entirety, or if the predicate has no subpredicates, returns `nil`.

<a id="Discussion"></a>

## Discussion

You can override this method to create custom templates that handle complicated compound predicates.

## See Also

### Primitive Methods

- [matchForPredicate:](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate:](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [predicateWithSubpredicates:](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.
