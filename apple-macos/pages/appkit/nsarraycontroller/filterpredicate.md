> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/filterpredicate](https://developer.apple.com/documentation/appkit/nsarraycontroller/filterpredicate)

# filterPredicate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A predicate used by the receiver to filter the array controller contents

## Declaration

```swift
var filterPredicate: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Filtering Content

- [clearsFilterPredicateOnInsertion](clearsfilterpredicateoninsertion.md): A Boolean value that indicates whether the receiver automatically clears an existing filter predicate when new items are inserted or added to the content

# filterPredicate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A predicate used by the receiver to filter the array controller contents

## Declaration

```objectivec
@property (strong, nullable) NSPredicate * filterPredicate;
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Filtering Content

- [clearsFilterPredicateOnInsertion](clearsfilterpredicateoninsertion.md): A Boolean value that indicates whether the receiver automatically clears an existing filter predicate when new items are inserted or added to the content
