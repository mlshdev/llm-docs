> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/sizecalculationmethod/logical

# SizeCalculationMethod.logical (Swift)

**Framework:** Background Assets  
**Kind:** Case  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

A calculation method that counts the number of bytes in a file.

## Declaration

```swift
case logical
```

<a id="discussion"></a>

## Discussion

The result of a “logical” size calculation for a file may be greater or less than the actual number of bytes that a file takes up on disk due to file-system features like alignment or compression.

# BASizeCalculationMethodLogical (Objective-C)

**Framework:** Background Assets  
**Kind:** Enumeration Case  
**Availability:** macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

A calculation method that counts the number of bytes in a file.

## Declaration

```objectivec
BASizeCalculationMethodLogical
```

<a id="discussion"></a>

## Discussion

The result of a “logical” size calculation for a file may be greater or less than the actual number of bytes that a file takes up on disk due to file-system features like alignment or compression.
