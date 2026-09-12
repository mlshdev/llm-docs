> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/removefromparent()](https://developer.apple.com/documentation/classkit/clscontext/removefromparent())

# removeFromParent() (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Removes the context from its parent.

## Declaration

```swift
func removeFromParent()
```

<a id="Discussion"></a>

## Discussion

If you remove a context from its parent and don’t add it as the child of another context before you call [save(completion:)](../clsdatastore/save%28completion_%29.md), then the framework deletes the context entirely.

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](parent.md): The direct ancestor of this context.
- [addChildContext(\_:)](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendant(matchingIdentifierPath:completion:)](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.

# removeFromParent (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Removes the context from its parent.

## Declaration

```objectivec
- (void) removeFromParent;
```

<a id="Discussion"></a>

## Discussion

If you remove a context from its parent and don’t add it as the child of another context before you call [saveWithCompletion:](../clsdatastore/save%28completion_%29.md), then the framework deletes the context entirely.

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [parent](parent.md): The direct ancestor of this context.
- [addChildContext:](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendantMatchingIdentifierPath:completion:](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.
