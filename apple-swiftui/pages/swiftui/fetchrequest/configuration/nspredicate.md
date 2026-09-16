> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/fetchrequest/configuration/nspredicate

# nsPredicate

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s predicate.

## Declaration

```swift
@MainActor @preconcurrency var nsPredicate: NSPredicate?
```

<a id="discussion"></a>

## Discussion

Set this configuration value to cause a [FetchRequest](../../fetchrequest.md) to execute a fetch with a new predicate.

Access this value of a [FetchRequest.Configuration](../configuration.md) structure for a given request by using the [nsPredicate](../../fetchedresults/nspredicate.md) property on the associated [FetchedResults](../../fetchedresults.md) instance, either directly or through a [Binding](../../binding.md).
