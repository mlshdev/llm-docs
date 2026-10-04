> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/sizecalculationmethod/allocated

# SizeCalculationMethod.allocated (Swift)

**Framework:** Background Assets  
**Kind:** Case  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

A calculation method that counts the number of bytes that the file system allocated for a file.

## Declaration

```swift
case allocated
```

<a id="discussion"></a>

## Discussion

The result of an “allocated” size calculation for a file roughly corresponds to the number of bytes that would newly be made available if the file were removed.

# BASizeCalculationMethodAllocated (Objective-C)

**Framework:** Background Assets  
**Kind:** Enumeration Case  
**Availability:** macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

A calculation method that counts the number of bytes that the file system allocated for a file.

## Declaration

```objectivec
BASizeCalculationMethodAllocated
```

<a id="discussion"></a>

## Discussion

The result of an “allocated” size calculation for a file roughly corresponds to the number of bytes that would newly be made available if the file were removed.
