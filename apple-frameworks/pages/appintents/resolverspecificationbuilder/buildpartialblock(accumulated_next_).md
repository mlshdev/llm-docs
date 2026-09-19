> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/resolverspecificationbuilder/buildpartialblock(accumulated:next:)

# buildPartialBlock(accumulated:next:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
static func buildPartialBlock<each Accumulated, R>(accumulated: ResolverSpecificationBuilder<Property>.Specification<Property, repeat each Accumulated>, next: R) -> ResolverSpecificationBuilder<Property>.Specification<Property, repeat each Accumulated, R> where repeat each Accumulated : Resolver, R : Resolver
```
