> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicate(forrow:)](https://developer.apple.com/documentation/appkit/nsruleeditor/predicate(forrow:))

# predicate(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the predicate for a given row.

## Declaration

```swift
func predicate(forRow row: Int) -> NSPredicate?
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The predicate for the row at `row`.

<a id="Discussion"></a>

## Discussion

You should rarely have a need to call this directly, but you can override this method in a subclass to perform specialized predicate handling for certain criteria or display values.

## See Also

### Working with Predicates

- [predicate](predicate.md): The rule editor’s predicate.
- [reloadPredicate()](reloadpredicate%28%29.md): Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.

# predicateForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the predicate for a given row.

## Declaration

```objectivec
- (NSPredicate *) predicateForRow:(NSInteger) row;
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The predicate for the row at `row`.

<a id="Discussion"></a>

## Discussion

You should rarely have a need to call this directly, but you can override this method in a subclass to perform specialized predicate handling for certain criteria or display values.

## See Also

### Working with Predicates

- [predicate](predicate.md): The rule editor’s predicate.
- [reloadPredicate](reloadpredicate%28%29.md): Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.
