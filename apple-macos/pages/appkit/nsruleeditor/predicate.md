> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/predicate](https://developer.apple.com/documentation/appkit/nsruleeditor/predicate)

# predicate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rule editor’s predicate.

## Declaration

```swift
var predicate: NSPredicate? { get }
```

<a id="Discussion"></a>

## Discussion

If the delegate implements [NSRuleEditor](../nsruleeditor.md), this property contains the rule editor’s predicate. If the delegate does not implement [NSRuleEditor](../nsruleeditor.md), or if the delegate does not return enough parts to construct a full predicate, this property contains `nil`.

## See Also

### Working with Predicates

- [reloadPredicate()](reloadpredicate%28%29.md): Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.
- [predicate(forRow:)](predicate%28forrow_%29.md): Returns the predicate for a given row.

# predicate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rule editor’s predicate.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

If the delegate implements [NSRuleEditor](../nsruleeditor.md), this property contains the rule editor’s predicate. If the delegate does not implement [NSRuleEditor](../nsruleeditor.md), or if the delegate does not return enough parts to construct a full predicate, this property contains `nil`.

## See Also

### Working with Predicates

- [reloadPredicate](reloadpredicate%28%29.md): Instructs the receiver to regenerate its predicate by invoking the corresponding delegate method.
- [predicateForRow:](predicate%28forrow_%29.md): Returns the predicate for a given row.
