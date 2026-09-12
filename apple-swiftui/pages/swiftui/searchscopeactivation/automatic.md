> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchscopeactivation/automatic](https://developer.apple.com/documentation/swiftui/searchscopeactivation/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The automatic activation of the scope bar.

## Declaration

```swift
static var automatic: SearchScopeActivation { get }
```

<a id="discussion"></a>

## Discussion

By default, this is [onTextEntry](ontextentry.md) in iOS and [onSearchPresentation](onsearchpresentation.md) in macOS.

## See Also

### Getting search scope activiation types

- [onSearchPresentation](onsearchpresentation.md): An activation where the system shows search scopes after presenting search and hides search scopes after search cancellation.
- [onTextEntry](ontextentry.md): An activation where the system shows search scopes when typing begins in the search field and hides search scopes after search cancellation.
