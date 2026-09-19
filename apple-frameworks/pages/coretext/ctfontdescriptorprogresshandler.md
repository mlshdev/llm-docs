> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretext/ctfontdescriptorprogresshandler

# CTFontDescriptorProgressHandler (Swift)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The progress callback type.

## Declaration

```swift
typealias CTFontDescriptorProgressHandler = (CTFontDescriptorMatchingState, CFDictionary) -> Bool
```

<a id="Discussion"></a>

## Discussion

Use this callback type with [CTFontDescriptorMatchFontDescriptorsWithProgressHandler(\_:\_:\_:)](ctfontdescriptormatchfontdescriptorswithprogresshandler%28______%29.md).

## See Also

### Data Types

- [ATSFontRef](atsfontref.md)
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.

# CTFontDescriptorProgressHandler (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The progress callback type.

## Declaration

```objectivec
typedef _Bool (^)(enum CTFontDescriptorMatchingState, const struct __CFDictionary *) CTFontDescriptorProgressHandler;
```

<a id="Discussion"></a>

## Discussion

Use this callback type with [CTFontDescriptorMatchFontDescriptorsWithProgressHandler](ctfontdescriptormatchfontdescriptorswithprogresshandler%28______%29.md).

## See Also

### Data Types

- [ATSFontRef](atsfontref.md)
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.
