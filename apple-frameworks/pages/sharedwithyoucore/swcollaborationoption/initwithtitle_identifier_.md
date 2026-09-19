> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoption/initwithtitle:identifier:

# initWithTitle:identifier:

**Interface language:** Objective-C

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration option object.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title identifier:(NSString *) identifier;
```

## Parameters

- `title`: A localized string the system displays as a title.
- `identifier`: A unique identifier.

## See Also

### Creating collaboration options

- [optionWithTitle:identifier:](init%28title_identifier_%29.md): Creates and initializes a collaboration option object with a provided title and identifier.
