> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/title](https://developer.apple.com/documentation/classkit/clscontext/title)

# title (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The name of the context as it appears to users.

## Declaration

```swift
var title: String { get set }
```

<a id="Discussion"></a>

## Discussion

The title that you choose appears to teachers exactly as you store it. If your app works in many locales, localize the title. The framework doesn’t do that for you automatically.

## See Also

### Identifying the context

- [identifier](identifier.md): A string that uniquely identifies a context among its siblings.
- [summary](summary.md): An optional, user-visible description of the context.
- [thumbnail](thumbnail.md): An optional thumbnail image associated with the context.

# title (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The name of the context as it appears to users.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The title that you choose appears to teachers exactly as you store it. If your app works in many locales, localize the title. The framework doesn’t do that for you automatically.

## See Also

### Identifying the context

- [identifier](identifier.md): A string that uniquely identifies a context among its siblings.
- [summary](summary.md): An optional, user-visible description of the context.
- [thumbnail](thumbnail.md): An optional thumbnail image associated with the context.
