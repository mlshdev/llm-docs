> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/addchildcontext(_:)](https://developer.apple.com/documentation/classkit/clscontext/addchildcontext(_:))

# addChildContext(\_:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Adds the specifed context as a child of the context receiving the method call.

## Declaration

```swift
func addChildContext(_ child: CLSContext)
```

## Parameters

- `child`: The context to add as a child of the one receiving the method call.

<a id="Discussion"></a>

## Discussion

You don’t need to call this method directly. Instead, use the [CLSDataStoreDelegate](../clsdatastoredelegate.md) protocol to build contexts.

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](parent.md): The direct ancestor of this context.
- [removeFromParent()](removefromparent%28%29.md): Removes the context from its parent.
- [descendant(matchingIdentifierPath:completion:)](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.

# addChildContext: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Adds the specifed context as a child of the context receiving the method call.

## Declaration

```objectivec
- (void) addChildContext:(CLSContext *) child;
```

## Parameters

- `child`: The context to add as a child of the one receiving the method call.

<a id="Discussion"></a>

## Discussion

You don’t need to call this method directly. Instead, use the [CLSDataStoreDelegate](../clsdatastoredelegate.md) protocol to build contexts.

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](parent.md): The direct ancestor of this context.
- [removeFromParent](removefromparent%28%29.md): Removes the context from its parent.
- [descendantMatchingIdentifierPath:completion:](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.
