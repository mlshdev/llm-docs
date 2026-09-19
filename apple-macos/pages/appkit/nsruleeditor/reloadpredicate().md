> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsruleeditor/reloadpredicate()

# reloadPredicate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.

## Declaration

```swift
func reloadPredicate()
```

<a id="Discussion"></a>

## Discussion

You typically invoke this method because something has changed (for example, a view’s value).

## See Also

### Working with Predicates

- [predicate](predicate.md): The rule editor’s predicate.
- [predicate(forRow:)](predicate%28forrow_%29.md): Returns the predicate for a given row.

# reloadPredicate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.

## Declaration

```objectivec
- (void) reloadPredicate;
```

<a id="Discussion"></a>

## Discussion

You typically invoke this method because something has changed (for example, a view’s value).

## See Also

### Working with Predicates

- [predicate](predicate.md): The rule editor’s predicate.
- [predicateForRow:](predicate%28forrow_%29.md): Returns the predicate for a given row.
