> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/supportedfamilies-50ink

# supportedFamilies

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The families that support this type of complication.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * supportedFamilies;
```

<a id="Discussion"></a>

## Discussion

Different descriptors can support different sets of families.

## See Also

### Accessing the descriptor’s data

- [identifier](identifier.md): A string that uniquely identifies the descriptor.
- [displayName](displayname.md): A localized string that identifies complications from the descriptor to the user.
- [userActivity](useractivity.md): A user activity object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): A dictionary of data that your data source can use to generate timeline entries.
