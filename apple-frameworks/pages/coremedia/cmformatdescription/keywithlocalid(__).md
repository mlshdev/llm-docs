> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmformatdescription/keywithlocalid(_:)

# keyWithLocalID(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the metadata for the local identifier you specify.

## Declaration

```swift
func keyWithLocalID(_ localKeyID: OSType) -> [String : CFPropertyList]?
```

## Parameters

- `localKeyID`: The local identifier that represents the key you associate with the metadata description.
