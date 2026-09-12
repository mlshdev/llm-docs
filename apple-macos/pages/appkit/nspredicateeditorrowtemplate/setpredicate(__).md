> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/setpredicate(_:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/setpredicate(_:))

# setPredicate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the value of the views according to the given predicate.

## Declaration

```swift
func setPredicate(_ predicate: NSPredicate)
```

## Parameters

- `predicate`: The predicate value for the receiver.

<a id="Discussion"></a>

## Discussion

This method is only called if [match(for:)](match%28for_%29.md) returned a positive value for the receiver.

You can override this to set the values of custom views.

## See Also

### Primitive Methods

- [match(for:)](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [displayableSubpredicates(of:)](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicate(withSubpredicates:)](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

# setPredicate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the value of the views according to the given predicate.

## Declaration

```objectivec
- (void) setPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: The predicate value for the receiver.

<a id="Discussion"></a>

## Discussion

This method is only called if [matchForPredicate:](match%28for_%29.md) returned a positive value for the receiver.

You can override this to set the values of custom views.

## See Also

### Primitive Methods

- [matchForPredicate:](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [displayableSubpredicatesOfPredicate:](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
- [predicateWithSubpredicates:](predicate%28withsubpredicates_%29.md): Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.
