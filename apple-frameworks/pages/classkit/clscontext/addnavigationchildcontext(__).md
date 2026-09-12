> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/addnavigationchildcontext(_:)](https://developer.apple.com/documentation/classkit/clscontext/addnavigationchildcontext(_:))

# addNavigationChildContext(\_:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Adds a child context that users can navigate to from this context.

## Declaration

```swift
func addNavigationChildContext(_ child: CLSContext)
```

## Parameters

- `child`: A context that you want to add as a presentable child from this context.

<a id="Discussion"></a>

## Discussion

Use this method to add a child to the [navigationChildContexts](navigationchildcontexts.md) collection of a given context. This only affects presentation. The method doesn’t alter your app’s context hierarchy because it has no effect on the context’s [identifierPath](identifierpath.md).

## See Also

### Creating a context presentation hierarchy

- [navigationChildContexts](navigationchildcontexts.md): The child contexts that a user can navigate to from this context in the Schoolwork app.
- [removeNavigationChildContext(\_:)](removenavigationchildcontext%28__%29.md): Removes the specified context as a presentable child of this context.

# addNavigationChildContext: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Adds a child context that users can navigate to from this context.

## Declaration

```objectivec
- (void) addNavigationChildContext:(CLSContext *) child;
```

## Parameters

- `child`: A context that you want to add as a presentable child from this context.

<a id="Discussion"></a>

## Discussion

Use this method to add a child to the [navigationChildContexts](navigationchildcontexts.md) collection of a given context. This only affects presentation. The method doesn’t alter your app’s context hierarchy because it has no effect on the context’s [identifierPath](identifierpath.md).

## See Also

### Creating a context presentation hierarchy

- [navigationChildContexts](navigationchildcontexts.md): The child contexts that a user can navigate to from this context in the Schoolwork app.
- [removeNavigationChildContext:](removenavigationchildcontext%28__%29.md): Removes the specified context as a presentable child of this context.
