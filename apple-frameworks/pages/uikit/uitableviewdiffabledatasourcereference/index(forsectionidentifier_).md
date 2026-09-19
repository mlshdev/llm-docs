> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasourcereference/index(forsectionidentifier:)

# index(forSectionIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an index for the section with the identifier you specify in the table view.

## Declaration

```swift
func index(forSectionIdentifier identifier: Any) -> Int
```

## See Also

### Identifying sections

- [sectionIdentifier(for:)](sectionidentifier%28for_%29.md): Returns an identifier for the section at the index you specify in the table view.

# indexForSectionIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an index for the section with the identifier you specify in the table view.

## Declaration

```objectivec
- (NSInteger) indexForSectionIdentifier:(SectionIdentifierType) identifier;
```

## See Also

### Identifying sections

- [sectionIdentifierForIndex:](sectionidentifier%28for_%29.md): Returns an identifier for the section at the index you specify in the table view.
