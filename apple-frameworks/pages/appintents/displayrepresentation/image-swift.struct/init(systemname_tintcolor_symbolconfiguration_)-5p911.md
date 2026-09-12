> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/displayrepresentation/image-swift.struct/init(systemname:tintcolor:symbolconfiguration:)-5p911](https://developer.apple.com/documentation/appintents/displayrepresentation/image-swift.struct/init(systemname:tintcolor:symbolconfiguration:)-5p911)

# init(systemName:tintColor:symbolConfiguration:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates an image object backed by the given SF Symbol name, with optional configuration options.

## Declaration

```swift
init?(systemName name: String, tintColor: NSColor? = nil, symbolConfiguration: NSImage.SymbolConfiguration? = nil)
```

## Parameters

- `systemName`: Name of the SF Symbol
- `tintColor`: An optional UIColor to tint the icon
- `symbolConfiguration`: An optional symbol configuration
