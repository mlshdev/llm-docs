> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/predicate(withsubpredicates:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/predicate(withsubpredicates:))

# predicate(withSubpredicates:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

## Declaration

```swift
func predicate(withSubpredicates subpredicates: [NSPredicate]?) -> NSPredicate
```

## Parameters

- `subpredicates`: An array of predicates.

<a id="return-value"></a>

## Return Value

The predicate represented by the values of the template’s views and the given subpredicates. You can override this method to return the predicate represented by your custom views.

<a id="Discussion"></a>

## Discussion

This method is only called if [match(for:)](match%28for_%29.md) returned a positive value for the receiver.

You can override this method to return the predicate represented by a custom view.

## See Also

### Primitive Methods

- [match(for:)](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate(\_:)](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicates(of:)](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.

# predicateWithSubpredicates: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the predicate represented by the receiver’s views’ values and the given sub-predicates.

## Declaration

```objectivec
- (NSPredicate *) predicateWithSubpredicates:(NSArray<NSPredicate *> *) subpredicates;
```

## Parameters

- `subpredicates`: An array of predicates.

<a id="return-value"></a>

## Return Value

The predicate represented by the values of the template’s views and the given subpredicates. You can override this method to return the predicate represented by your custom views.

<a id="Discussion"></a>

## Discussion

This method is only called if [matchForPredicate:](match%28for_%29.md) returned a positive value for the receiver.

You can override this method to return the predicate represented by a custom view.

## See Also

### Primitive Methods

- [matchForPredicate:](match%28for_%29.md): Returns a positive number if the receiver can represent a given predicate, and `0` if it cannot.
- [templateViews](templateviews.md): Returns the views that display this template’s predicate.
- [setPredicate:](setpredicate%28__%29.md): Sets the value of the views according to the given predicate.
- [displayableSubpredicatesOfPredicate:](displayablesubpredicates%28of_%29.md): Returns the subpredicates that should be made sub-rows of a given predicate.
