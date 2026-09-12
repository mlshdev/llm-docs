> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/removenavigationchildcontext(_:)](https://developer.apple.com/documentation/classkit/clscontext/removenavigationchildcontext(_:))

# removeNavigationChildContext(\_:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Removes the specified context as a presentable child of this context.

## Declaration

```swift
func removeNavigationChildContext(_ child: CLSContext)
```

## Parameters

- `child`: The context that you want to remove as a presentable child of this context.

<a id="Discussion"></a>

## Discussion

Use this method to remove a child from the [navigationChildContexts](navigationchildcontexts.md) collection of a given context. This only affects presentation. The method doesn’t alter your app’s context hierarchy because it has no effect on the context’s [identifierPath](identifierpath.md).

## See Also

### Creating a context presentation hierarchy

- [navigationChildContexts](navigationchildcontexts.md): The child contexts that a user can navigate to from this context in the Schoolwork app.
- [addNavigationChildContext(\_:)](addnavigationchildcontext%28__%29.md): Adds a child context that users can navigate to from this context.

# removeNavigationChildContext: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Removes the specified context as a presentable child of this context.

## Declaration

```objectivec
- (void) removeNavigationChildContext:(CLSContext *) child;
```

## Parameters

- `child`: The context that you want to remove as a presentable child of this context.

<a id="Discussion"></a>

## Discussion

Use this method to remove a child from the [navigationChildContexts](navigationchildcontexts.md) collection of a given context. This only affects presentation. The method doesn’t alter your app’s context hierarchy because it has no effect on the context’s [identifierPath](identifierpath.md).

## See Also

### Creating a context presentation hierarchy

- [navigationChildContexts](navigationchildcontexts.md): The child contexts that a user can navigate to from this context in the Schoolwork app.
- [addNavigationChildContext:](addnavigationchildcontext%28__%29.md): Adds a child context that users can navigate to from this context.
