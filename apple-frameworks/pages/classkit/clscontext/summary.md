> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/summary](https://developer.apple.com/documentation/classkit/clscontext/summary)

# summary (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+

An optional, user-visible description of the context.

## Declaration

```swift
var summary: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The Schoolwork app may display this string to help the user understand the kinds of activities the context provides.

Localize the summary string, and limit its length to 4,000 characters.

## See Also

### Identifying the context

- [identifier](identifier.md): A string that uniquely identifies a context among its siblings.
- [title](title.md): The name of the context as it appears to users.
- [thumbnail](thumbnail.md): An optional thumbnail image associated with the context.

# summary (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An optional, user-visible description of the context.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * summary;
```

<a id="Discussion"></a>

## Discussion

The Schoolwork app may display this string to help the user understand the kinds of activities the context provides.

Localize the summary string, and limit its length to 4,000 characters.

## See Also

### Identifying the context

- [identifier](identifier.md): A string that uniquely identifies a context among its siblings.
- [title](title.md): The name of the context as it appears to users.
- [thumbnail](thumbnail.md): An optional thumbnail image associated with the context.
