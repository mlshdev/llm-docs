> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/contextexpression

# contextExpression (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The expression for the receiver’s managed object context.

## Declaration

```swift
var contextExpression: NSExpression { get }
```

<a id="Discussion"></a>

## Discussion

The expression must evaluate to an [NSManagedObjectContext](../nsmanagedobjectcontext.md) object.

## See Also

### Examining a Fetch Request Expression

- [requestExpression](requestexpression.md): The expression for the receiver’s fetch request.
- [isCountOnlyRequest](iscountonlyrequest.md): Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.

# contextExpression (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The expression for the receiver’s managed object context.

## Declaration

```objectivec
@property (strong, readonly) NSExpression * contextExpression;
```

<a id="Discussion"></a>

## Discussion

The expression must evaluate to an [NSManagedObjectContext](../nsmanagedobjectcontext.md) object.

## See Also

### Examining a Fetch Request Expression

- [requestExpression](requestexpression.md): The expression for the receiver’s fetch request.
- [countOnlyRequest](iscountonlyrequest.md): Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.
