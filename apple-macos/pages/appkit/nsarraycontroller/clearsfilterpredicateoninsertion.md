> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsarraycontroller/clearsfilterpredicateoninsertion

# clearsFilterPredicateOnInsertion (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver automatically clears an existing filter predicate when new items are inserted or added to the content

## Declaration

```swift
var clearsFilterPredicateOnInsertion: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). This property is observable using key-value observing.

## See Also

### Filtering Content

- [filterPredicate](filterpredicate.md): A predicate used by the receiver to filter the array controller contents

# clearsFilterPredicateOnInsertion (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver automatically clears an existing filter predicate when new items are inserted or added to the content

## Declaration

```objectivec
@property BOOL clearsFilterPredicateOnInsertion;
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). This property is observable using key-value observing.

## See Also

### Filtering Content

- [filterPredicate](filterpredicate.md): A predicate used by the receiver to filter the array controller contents
