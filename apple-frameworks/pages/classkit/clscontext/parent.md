> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/parent](https://developer.apple.com/documentation/classkit/clscontext/parent)

# parent (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The direct ancestor of this context.

## Declaration

```swift
weak var parent: CLSContext? { get }
```

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [removeFromParent()](removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext(\_:)](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendant(matchingIdentifierPath:completion:)](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.

# parent (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.4+ · iPadOS 11.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The direct ancestor of this context.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) CLSContext * parent;
```

## See Also

### Managing context hierarchy

- [identifierPath](identifierpath.md): The identifier path that locates the context within the data store’s context hierarchy.
- [removeFromParent](removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext:](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendantMatchingIdentifierPath:completion:](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.
