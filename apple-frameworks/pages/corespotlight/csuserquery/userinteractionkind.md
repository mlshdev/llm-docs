> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/userinteractionkind](https://developer.apple.com/documentation/corespotlight/csuserquery/userinteractionkind)

# CSUserQuery.UserInteractionKind (Swift)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Constants that indicate how someone engaged with search-related content.

## Declaration

```swift
enum UserInteractionKind
```

## Topics

### Getting the interaction types

- [default](userinteractionkind/default.md)
- [CSUserQuery.UserInteractionKind.select](userinteractionkind/select.md)
- [CSUserQuery.UserInteractionKind.focus](userinteractionkind/focus.md)

### Creating an interaction kind

- [init(rawValue:)](userinteractionkind/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Improving the quality of ranked results

- [userEngaged(\_:visibleItems:interaction:)](userengaged%28__visibleitems_interaction_%29.md): Notifies the system that someone engaged with a specific search result in your app’s interface.
- [userEngaged(\_:visibleSuggestions:interaction:)](userengaged%28__visiblesuggestions_interaction_%29.md): Notifies the system that someone engaged with a specific text completion in your app’s interface.

# CSUserInteraction (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS · visionOS 1.0+

Constants that indicate how someone engaged with search-related content.

## Declaration

```objectivec
enum CSUserInteraction : NSInteger;
```

## Topics

### Getting the interaction types

- [CSUserInteractionDefault](userinteractionkind/default.md)
- [CSUserInteractionSelect](userinteractionkind/select.md)
- [CSUserInteractionFocus](userinteractionkind/focus.md)
