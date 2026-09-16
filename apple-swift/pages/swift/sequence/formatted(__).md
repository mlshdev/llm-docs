> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/sequence/formatted(_:)

# formatted(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
func formatted<S>(_ style: S) -> S.FormatOutput where Self == S.FormatInput, S : FormatStyle
```

## See Also

### Formatting a Sequence

- [formatted()](formatted%28%29.md): Conforms when `Element` is `String`.
- [ListFormatStyle](https://developer.apple.com/documentation/foundation/listformatstyle): A type that formats lists of items with a separator and conjunction appropriate for a given locale.
