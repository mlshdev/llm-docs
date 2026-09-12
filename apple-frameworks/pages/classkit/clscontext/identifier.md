> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/identifier](https://developer.apple.com/documentation/classkit/clscontext/identifier)

# identifier (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A string that uniquely identifies a context among its siblings.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

All contexts with a given parent context must have different identifiers. No such requirement exists for contexts that have different parent contexts. So, for example, the `chapter-1` and `chapter-2` contexts can each have child contexts with the identifier `section-1`, but `chapter-1` can’t have two contexts with that identifier.

## See Also

### Identifying the context

- [title](title.md): The name of the context as it appears to users.
- [summary](summary.md): An optional, user-visible description of the context.
- [thumbnail](thumbnail.md): An optional thumbnail image associated with the context.

# identifier (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A string that uniquely identifies a context among its siblings.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

All contexts with a given parent context must have different identifiers. No such requirement exists for contexts that have different parent contexts. So, for example, the `chapter-1` and `chapter-2` contexts can each have child contexts with the identifier `section-1`, but `chapter-1` can’t have two contexts with that identifier.

## See Also

### Identifying the context

- [title](title.md): The name of the context as it appears to users.
- [summary](summary.md): An optional, user-visible description of the context.
- [thumbnail](thumbnail.md): An optional thumbnail image associated with the context.
