> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwtxtrecord/subscript(_:)

# subscript(\_:)

**Framework:** Network  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Get and set values in a TXT record dictionary, by keys.

## Declaration

```swift
subscript(key: String) -> String? { get set }
```

## See Also

### Examining TXT Records

- [getEntry(for:)](getentry%28for_%29.md): Accesses an entry in a TXT record dictionary.
- [dictionary](dictionary.md): The TXT record as a dictionary of strings.
