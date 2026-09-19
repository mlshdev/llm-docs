> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeygeneratepairblock

# SecKeyGeneratePairBlock (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

A block called with the results of a call to [SecKeyGeneratePairAsync(\_:\_:\_:)](seckeygeneratepairasync%28______%29.md).

## Declaration

```swift
typealias SecKeyGeneratePairBlock = (SecKey, SecKey, CFError) -> Void
```

# SecKeyGeneratePairBlock (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

A block called with the results of a call to [SecKeyGeneratePairAsync](seckeygeneratepairasync%28______%29.md).

## Declaration

```objectivec
typedef void (^)(struct __SecKey *, struct __SecKey *, struct __CFError *) SecKeyGeneratePairBlock;
```
