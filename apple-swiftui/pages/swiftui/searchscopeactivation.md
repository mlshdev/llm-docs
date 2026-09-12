> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchscopeactivation](https://developer.apple.com/documentation/swiftui/searchscopeactivation)

# SearchScopeActivation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The ways that searchable modifiers can show or hide search scopes.

## Declaration

```swift
struct SearchScopeActivation
```

## Mentioned In

- [Scoping a search operation](scoping-a-search-operation.md)

## Topics

### Getting search scope activiation types

- [automatic](searchscopeactivation/automatic.md): The automatic activation of the scope bar.
- [onSearchPresentation](searchscopeactivation/onsearchpresentation.md): An activation where the system shows search scopes after presenting search and hides search scopes after search cancellation.
- [onTextEntry](searchscopeactivation/ontextentry.md): An activation where the system shows search scopes when typing begins in the search field and hides search scopes after search cancellation.

## See Also

### Limiting search scope

- [Scoping a search operation](scoping-a-search-operation.md): Divide the search space into a few broad categories.
- [searchScopes(\_:scopes:)](view/searchscopes%28__scopes_%29.md): Configures the search scopes for this view.
- [searchScopes(\_:activation:\_:)](view/searchscopes%28__activation___%29.md): Configures the search scopes for this view with the specified activation strategy.
