> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/parentgroups()](https://developer.apple.com/documentation/addressbook/abperson/parentgroups())

# parentGroups() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of the address book groups that this person belongs to.

## Declaration

```swift
func parentGroups() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

If the person doesn’t belong to any groups, this method returns an empty array.

# parentGroups (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of the address book groups that this person belongs to.

## Declaration

```objectivec
- (NSArray *) parentGroups;
```

<a id="Discussion"></a>

## Discussion

If the person doesn’t belong to any groups, this method returns an empty array.
