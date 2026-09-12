> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/systemintent](https://developer.apple.com/documentation/appintents/appschema/systemintent)

# AppSchema.SystemIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the system domain.

## Declaration

```swift
protocol SystemIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [open](systemintent/open.md): An intent schema that opens an item in the application.
- [search](systemintent/search.md): Deprecated. An intent schema that navigates to search results.
- [searchInApp](systemintent/searchinapp.md): An intent schema that navigates to search results.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [open](systemintent/open.md): An intent schema that opens an item in the application.
- [search](systemintent/search.md): Deprecated. An intent schema that navigates to search results.
