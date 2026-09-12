> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/identifierpath](https://developer.apple.com/documentation/classkit/clscontext/identifierpath)

# identifierPath (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+

The identifier path that locates the context within the data store’s context hierarchy.

## Declaration

```swift
var identifierPath: [String] { get }
```

<a id="Discussion"></a>

## Discussion

You can use the value stored in this property when calling the [contexts(matchingIdentifierPath:completion:)](../clsdatastore/contexts%28matchingidentifierpath_completion_%29.md) method to retrieve the current context.

## See Also

### Managing context hierarchy

- [parent](parent.md): The direct ancestor of this context.
- [removeFromParent()](removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext(\_:)](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendant(matchingIdentifierPath:completion:)](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.

# identifierPath (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The identifier path that locates the context within the data store’s context hierarchy.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * identifierPath;
```

<a id="Discussion"></a>

## Discussion

You can use the value stored in this property when calling the [contextsMatchingIdentifierPath:completion:](../clsdatastore/contexts%28matchingidentifierpath_completion_%29.md) method to retrieve the current context.

## See Also

### Managing context hierarchy

- [parent](parent.md): The direct ancestor of this context.
- [removeFromParent](removefromparent%28%29.md): Removes the context from its parent.
- [addChildContext:](addchildcontext%28__%29.md): Adds the specifed context as a child of the context receiving the method call.
- [descendantMatchingIdentifierPath:completion:](descendant%28matchingidentifierpath_completion_%29.md): Finds the context with the given identifier path relative to this context.
