> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/init(localized:options:table:bundle:locale:comment:including:)-3zy6h](https://developer.apple.com/documentation/foundation/attributedstring/init(localized:options:table:bundle:locale:comment:including:)-3zy6h)

# init(localized:options:table:bundle:locale:comment:including:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
init<S>(localized key: String.LocalizationValue, options: AttributedString.LocalizationOptions, table: String? = nil, bundle: Bundle? = nil, locale: Locale? = nil, comment: StaticString? = nil, including scope: KeyPath<AttributeScopes, S.Type>) where S : AttributeScope
```
