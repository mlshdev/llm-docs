> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/displayrepresentation/image-swift.struct/init(systemname:tintcolor:symbolconfiguration:)-3snvy

# init(systemName:tintColor:symbolConfiguration:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an image object backed by the given SF Symbol name, with optional configuration options.

## Declaration

```swift
init?(systemName name: String, tintColor: UIColor? = nil, symbolConfiguration: UIImage.SymbolConfiguration? = nil)
```

## Parameters

- `systemName`: Name of the SF Symbol
- `tintColor`: An optional UIColor to tint the icon
- `symbolConfiguration`: An optional symbol configuration
