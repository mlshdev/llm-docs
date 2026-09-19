> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/declaredagerange/agerangeservice/agerangedeclaration/guardiandeclared

# AgeRangeService.AgeRangeDeclaration.guardianDeclared

**Framework:** Declared Age Range  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates a parent, guardian, or Family Organizer in a Family Sharing group set the age range.

## Declaration

```swift
case guardianDeclared
```

## See Also

### Determining the age set method

- [AgeRangeService.AgeRangeDeclaration.selfDeclared](selfdeclared.md): Indicates the person signed in to iCloud to set their own age range.
- [AgeRangeService.AgeRangeDeclaration.confirmed](confirmed.md): Indicates a user’s age range was set using a scrutinized method, like a credit card or government ID.
