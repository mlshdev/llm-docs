> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiapplication/categorydefaulterror/statuslastprovideddateerrorkey

# statusLastProvidedDateErrorKey

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A dictionary key, with a value that’s the date your app last received a successful result.

## Declaration

```swift
nonisolated static let statusLastProvidedDateErrorKey: String
```

## See Also

### Getting information about the error

- [UIApplication.CategoryDefaultError.Code](code.md): An enumeration of reasons an error happens when the system discovers whether your app is the default in a category.
- [retryAvailableDateErrorKey](retryavailabledateerrorkey.md): A dictionary key, with a value that’s a date when a result is next available.
