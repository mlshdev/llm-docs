> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpasslibrary/passes(withreaderidentifier:)

# passes(withReaderIdentifier:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
func passes(withReaderIdentifier readerIdentifier: String) -> Set<PKSecureElementPass>
```

# passesWithReaderIdentifier: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
- (NSSet<PKSecureElementPass *> *) passesWithReaderIdentifier:(NSString *) readerIdentifier;
```
