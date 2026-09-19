> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/requestexpression

# requestExpression (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The expression for the receiver’s fetch request.

## Declaration

```swift
var requestExpression: NSExpression { get }
```

<a id="Discussion"></a>

## Discussion

The expression must evaluate to an [NSFetchRequest](../nsfetchrequest.md) object.

## See Also

### Examining a Fetch Request Expression

- [contextExpression](contextexpression.md): The expression for the receiver’s managed object context.
- [isCountOnlyRequest](iscountonlyrequest.md): Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.

# requestExpression (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The expression for the receiver’s fetch request.

## Declaration

```objectivec
@property (strong, readonly) NSExpression * requestExpression;
```

<a id="Discussion"></a>

## Discussion

The expression must evaluate to an [NSFetchRequest](../nsfetchrequest.md) object.

## See Also

### Examining a Fetch Request Expression

- [contextExpression](contextexpression.md): The expression for the receiver’s managed object context.
- [countOnlyRequest](iscountonlyrequest.md): Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.
